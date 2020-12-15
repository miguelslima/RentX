import React from "react";
import { Text, View } from "react-native";
import { RectButtonProperties } from "react-native-gesture-handler";

import { Container, RectButton, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties {
  text?: string;
  enable?: boolean;
  marginHorizontal?: number;
}

const Button: React.FC<ButtonProps> = ({
  text,
  enable = true,
  marginHorizontal = 20,
  ...rest
}) => {
  return (
    <Container style={{ marginHorizontal }}>
      <RectButton enabled={enable} enable={enable} {...rest}>
        <ButtonText>{text}</ButtonText>
      </RectButton>
    </Container>
  );
};

export default Button;
