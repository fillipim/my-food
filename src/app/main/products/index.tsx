import ProductCard from "../../../components/ProductCard";
import { Flex } from "../../../styles/main.style";

export default function Products() {
  return (
    <Flex gap={5} paddingHorizontal={10} paddingTop={20}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Flex>
  );
}
