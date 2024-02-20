import { ScrollView } from "react-native";
import ProductCard from "../../../components/ProductCard";
import { Flex } from "../../../styles/main.style";

export default function Products() {
  return (
    <ScrollView>
      <Flex gap={5} paddingLeft={10} paddingRight={10} paddingTop={20}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </ScrollView>
  );
}
