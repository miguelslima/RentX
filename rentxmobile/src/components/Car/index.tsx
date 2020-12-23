import React from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Container, Header, Brand, Name, Day, Price, Dot } from "./styles";

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

      <Image
        style={{
          width: 250,
          height: 120,
          marginVertical: 15,
          flexDirection: "row",
          alignSelf: "center",
        }}
        source={{
          uri:
            "https://quatrorodas.abril.com.br/wp-content/uploads/2019/04/lamborghini-huracan-evo2-e1557165118475.jpg",
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon name="droplet" size={24} color="#aeaeb3" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Dot />
          <Dot isSelected />
          <Dot />
          <Dot />
        </View>
      </View>
    </Container>
  );
};

export default Car;
