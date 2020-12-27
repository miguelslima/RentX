import React from "react";
import { Text, View } from "react-native";
import Button from "../Button";

import { Container, ModalContainer, Line } from "./styles";

interface FiltersModalProps {
  showModal: boolean;
  // filtersUpdater: ((filters: Filters) => void)
}

const FiltersCar: React.FC<FiltersModalProps> = ({ showModal }) => {
  if (showModal === true) {
    return (
      <Container>
        <ModalContainer>
          <Text>Filtro</Text>

          <Line />

          <Button onPress={() => {}} text="Confirmar" />
        </ModalContainer>
      </Container>
    );
  } else {
    return <View />;
  }
};

export default FiltersCar;
