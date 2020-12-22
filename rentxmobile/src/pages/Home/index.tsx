import React, { useCallback, useState } from "react";
import { Platform, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import moment from "moment";

import {
  Container,
  ContainerHeader,
  ChooseDateContainer,
  Border,
  ChooseDateText,
  ChooseDateOf,
  ChooseDateTo,
  SearchContainer,
  SearchText,
  FilterContainer,
  FindCars,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

moment.locale("pt-br");

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState({
    start: "",
    end: "",
  });

  return (
    <Container>
      <ContainerHeader>
        <ChooseDateContainer>
          <ChooseDateOf>
            <ChooseDateText>De</ChooseDateText>
            <Border>{selectedDate.start}</Border>
          </ChooseDateOf>

          <View>
            <Icon name="arrow-right" size={24} color="#fff" />
          </View>

          <ChooseDateTo>
            <ChooseDateText>Até</ChooseDateText>
            <Border>{selectedDate.end}</Border>
          </ChooseDateTo>
        </ChooseDateContainer>
      </ContainerHeader>

      <SearchContainer>
        <SearchText>Resultados</SearchText>
        <FilterContainer>
          <FindCars>3 carros</FindCars>
          <Icon name="filter" size={20} color="#47474D" />
        </FilterContainer>
      </SearchContainer>
    </Container>
  );
};

export default Home;
