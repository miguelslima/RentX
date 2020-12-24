import React from "react";
import { Text, View } from "react-native";

import { Container, ModalContainer } from "./styles";

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
        </ModalContainer>
      </Container>
    );
  } else {
    return <View />;
  }
};

export default FiltersCar;
