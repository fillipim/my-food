import { ScrollView } from "react-native";
import ProductCard from "../../../components/ProductCard";
import { Flex } from "../../../styles/main.style";
import { useStore } from "../../../contexts/StoreContext";

export default function Products() {
  const { products } = useStore();
  return (
    <ScrollView>
      <Flex gap={5} paddingLeft={10} paddingRight={10} paddingTop={20}>
        {products.map((product, index) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Flex>
    </ScrollView>
  );
}
