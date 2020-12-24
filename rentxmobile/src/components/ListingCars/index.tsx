import React from "react";
import { Image } from "react-native";

import {
  Container,
  InfoCar,
  ImageCar,
  Brand,
  Name,
  Days,
  Price,
} from "./styles";

const ListingCars: React.FC = () => {
  return (
    <Container>
      <InfoCar>
        <Brand>Mitsubish</Brand>
        <Name>Lancer Evo X</Name>

        <Days>Por 3 dias</Days>
        <Price>R$ 290</Price>
      </InfoCar>

      <ImageCar>
        <Image
          style={{
            width: 165,
            height: 85,

            flexDirection: "row",
            alignSelf: "center",
          }}
          source={{
            uri:
              "https://quatrorodas.abril.com.br/wp-content/uploads/2019/04/lamborghini-huracan-evo2-e1557165118475.jpg",
          }}
        />
      </ImageCar>
    </Container>
  );
};

export default ListingCars;
