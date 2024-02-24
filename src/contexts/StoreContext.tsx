import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  CartProduct,
  ProductCardProps,
  StoreContextProps,
  StoreProps,
} from "../types/stores";
import { getProducts, getStores } from "../services/store.service";
import { useToast } from "react-native-toast-notifications";

const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [stores, setStores] = useState([] as StoreProps[]);

  const toast = useToast();

  const [products, setProducts] = useState([] as ProductCardProps[]);

  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addCart = (product: ProductCardProps) => {
    const hasProduct = cartProducts.findIndex((item) => item.id === product.id);

    let productsCopy = [...cartProducts];

    if (hasProduct >= 0) {
      productsCopy[hasProduct].amount += 1;
      setCartProducts(productsCopy);
    } else {
      const productCopy = { ...product, amount: 1 };
      setCartProducts([...cartProducts, productCopy]);
    }

    toast.show("Produto adicionado à sacola", {
      type: "success",
      duration: 4000,
    });
  };

  const removeCart = (id: number) => {
    const hasProduct = cartProducts.findIndex((item) => item.id === id);

    let productsCopy = [...cartProducts];

    if (hasProduct && cartProducts[hasProduct]?.amount > 1) {
      productsCopy[hasProduct].amount -= 1;
      setCartProducts(productsCopy);
      return;
    }
    setCartProducts(cartProducts.filter((item) => item.id !== id));

    toast.show("Produto removido", {
      type: "error",
      duration: 4000,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseStores = await getStores();
        const responseProducts = await getProducts();
        setProducts(responseProducts);
        setStores(responseStores);
      } catch (error) {
        console.error(error);
      }
      return;
    };
    fetchData();
  }, []);


  return (
    <StoreContext.Provider value={{ stores, products, addCart, removeCart, cartProducts }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => useContext(StoreContext);
