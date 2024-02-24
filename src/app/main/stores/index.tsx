import React from "react";
import { Flex } from "../../../styles/main.style";
import { StoreCard } from "../../../components/StoreCard";
import { ScrollView } from "react-native";
import { useStore } from "../../../contexts/StoreContext";

export default function Stores() {
  const { stores } = useStore();
  return (
    <ScrollView>
      <Flex gap={5} paddingTop={20} paddingLeft={10} paddingRight={10}>
        {stores.map((store, index) => (
          <StoreCard key={store.id} {...store} />
        ))}
      </Flex>
    </ScrollView>
  );
}
