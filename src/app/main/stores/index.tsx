import React from "react";
import { Flex } from "../../../styles/main.style";
import { StoreCard } from "../../../components/StoreCard";

export default function Stores() {
  return (
    <Flex gap={5} paddingTop={20} paddingHorizontal={10}>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
    </Flex>
  );
};
