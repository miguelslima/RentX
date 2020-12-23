import React from "react";
import { Text, View } from "react-native";

import { Container, Header, Brand, Name, Day, Price } from "./styles";

interface CarProps {
  id?: string;
  name: string;
  brand: string;
  model?: string;
  daily_price: number;
  fuel?: string;
  images?: {
    id: string;
    image_url: string;
  }[];
}

const Car: React.FC<CarProps> = ({ id, name, brand, daily_price }) => {
  return (
    <Container>
      <Header>
        <View>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
        </View>
        <View>
          <Day>Ao dia</Day>
          <Price>R$ {daily_price}</Price>
        </View>
      </Header>
    </Container>
  );
};

export default Car;
