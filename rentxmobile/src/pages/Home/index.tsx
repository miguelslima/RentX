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
import Car from "../../components/Car";
import { TouchableOpacity } from "react-native-gesture-handler";
import FiltersCar from "../../components/FiltersCar";

moment.locale("pt-br");

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);

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

      <FiltersCar showModal={openModal} />

      <SearchContainer>
        <SearchText>Resultados</SearchText>
        <FilterContainer>
          <FindCars>3 carros</FindCars>
          <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
            <Icon name="filter" size={20} color="#47474D" />
          </TouchableOpacity>
        </FilterContainer>
      </SearchContainer>

      {/* <View>
        <Car brand="Lamborghini" name="Huracan" daily_price={580} />
        <Car brand="Volvo" name="XC40" daily_price={280} />
        <Car brand="Honda" name="Civic" daily_price={80} />
      </View> */}
    </Container>
  );
};

export default Home;
