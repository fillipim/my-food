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
  padding-top: ${({ paddingTop }) => (paddingTop ? `${paddingTop}px` : "0px")};
  padding-right: ${({ paddingRight }) =>
    paddingRight ? `${paddingRight}px` : "0px"};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? `${paddingBottom}px` : "0px"};
  padding-left: ${({ paddingLeft }) =>
    paddingLeft ? `${paddingLeft}px` : "0px"};
`;
