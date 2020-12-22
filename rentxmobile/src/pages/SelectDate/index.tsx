import React from "react";
import { Text, View } from "react-native";

import {
  Container,
  Title,
  ContainerHeader,
  ChooseDateContainer,
  Border,
  ChooseDateText,
  ChooseDateOf,
  ChooseDateTo,
} from "./styles";

const SelectDate: React.FC = () => {
  return (
    <Container>
      <ContainerHeader>
        <Title>Escolha a data e encontre um carro.</Title>
        <ChooseDateContainer>
          <ChooseDateOf>
            <ChooseDateText>De</ChooseDateText>
            <Border />
          </ChooseDateOf>

          <ChooseDateTo>
            <ChooseDateText>Até</ChooseDateText>
            <Border />
          </ChooseDateTo>
        </ChooseDateContainer>
      </ContainerHeader>
    </Container>
  );
};

export default SelectDate;
