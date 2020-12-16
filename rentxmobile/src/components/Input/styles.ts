import styled, { css } from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f2f2fa;
  /* border-radius: 10px; */
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #f2f2f9;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-color: #207b58;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #dc1637;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #7a7a80;
  font-size: 16px;
  font-family: "Inter-Regular";
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
