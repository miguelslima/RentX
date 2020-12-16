import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Container, KeyboardAvoidingContainer, GoBack, HeaderContainer, Title, Subtitle } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <KeyboardAvoidingContainer behavior="position">
        <GoBack>
          <Icon size={20} name="chevron-left" color="#AEAEB3" />
        </GoBack>
        <HeaderContainer>
          <Title>
            Estamos quase lá
          </Title>
          <Subtitle>
            Faça seu login para começar uma experiência incrível
          </Subtitle>
        </HeaderContainer>


      </KeyboardAvoidingContainer>
    </Container>
  );
};

export default SignIn;
