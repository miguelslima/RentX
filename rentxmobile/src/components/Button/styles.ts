import styled, { css } from "styled-components/native";
import { RectButton as ReactRectButton } from "react-native-gesture-handler";

interface ButtonContainerProps {
  enable?: boolean;
}

export const Container = styled.View``;

export const RectButton = styled(ReactRectButton)<ButtonContainerProps>`
  width: 156px;
  height: 56px;
  background-color: #dc1637;
  justify-content: center;
  border-radius: 10px;

  ${(props) =>
    !props.enable &&
    css`
      opacity: 0.5;
    `}
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #e1e1e6;
  font-weight: bold;
`;
