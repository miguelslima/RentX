import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";

import Icon from "react-native-vector-icons/AntDesign";

import { useAuth } from "../../hooks/authMock";

import {
  Container,
  HeaderContainer,
  ImageContainer,
  Title,
  ButtonSignOut,
  Name,
} from "./styles";

const Profile: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <HeaderContainer>
        <Icon name="edit" size={18} color="#AEAEB3" />
        <Title>Perfil</Title>
        <ButtonSignOut onPress={() => signOut()}>
          <Icon name="poweroff" size={20} color="#AEAEB3" />
        </ButtonSignOut>
      </HeaderContainer>

      <ImageContainer

      >
        <Icon name="user" size={90} />
      </ImageContainer>

      <View style={{ marginTop: 150 }}>
        <Name>Miguel Lima</Name>
      </View>
    </Container>
  );
};

export default Profile;
