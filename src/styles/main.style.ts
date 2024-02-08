import { FlexStyle } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
`;

export const Flex = styled.View<FlexStyle>`
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "start")};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;
