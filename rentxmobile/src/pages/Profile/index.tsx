import React from "react";
import { Alert, Text, View } from "react-native";

import ListingCars from "../../components/ListingCars";

import Icon from "react-native-vector-icons/AntDesign";
import IconEletric from "react-native-vector-icons/SimpleLineIcons";
import IconLeaf from "react-native-vector-icons/FontAwesome5";

import { useAuth } from "../../hooks/authMock";

import {
  Container,
  HeaderContainer,
  ImageContainer,
  Title,
  ButtonEdit,
  ButtonSignOut,
  Name,
  SchedulingContainer,
  SchedulingText,
  SchedulingNumber,
  Line,
  FavoriteCarContainer,
  FavoriteCarText,
  FavoriteCarNumber,
} from "./styles";

const Profile: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <HeaderContainer>
        <ButtonEdit
          onPress={() => Alert.alert("Edit", "Estamos em manutenção!")}
        >
          <Icon name="edit" size={18} color="#AEAEB3" />
        </ButtonEdit>
        <Title>Perfil</Title>
        <ButtonSignOut onPress={() => signOut()}>
          <Icon name="poweroff" size={20} color="#AEAEB3" />
        </ButtonSignOut>
      </HeaderContainer>

      <ImageContainer>
        <Icon name="user" size={90} />
      </ImageContainer>

      <View style={{ marginTop: 125 }}>
        <Name>Miguel Lima</Name>
      </View>

      <SchedulingContainer>
        <SchedulingText>Agendamentos feitos</SchedulingText>
        <SchedulingNumber>05</SchedulingNumber>
      </SchedulingContainer>

      <Line />

      <FavoriteCarContainer
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 24,
        }}
      >
        <FavoriteCarText>Carro favorito</FavoriteCarText>
        <FavoriteCarNumber>Utilizado 2 vezes</FavoriteCarNumber>
      </FavoriteCarContainer>
      <IconEletric name="energy" size={30} />
      <IconLeaf name="leaf" size={30} />
      <ListingCars />
    </Container>
  );
};

export default Profile;
