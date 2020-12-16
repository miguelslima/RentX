import React, { useCallback, useState, useRef } from "react";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import Icon from "react-native-vector-icons/Feather";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  Container,
  KeyboardAvoidingContainer,
  GoBack,
  HeaderContainer,
  Title,
  Subtitle,
  InputContainer,
  TextContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface SubmitForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSubmitForm = () => {
    Alert.alert("Teste");
  };

  return (
    <Container>
      <KeyboardAvoidingContainer behavior="position">
        <GoBack onPress={() => navigation.goBack()}>
          <Icon size={20} name="chevron-left" color="#AEAEB3" />
        </GoBack>
        <HeaderContainer>
          <Title>Estamos quase lá</Title>
          <Subtitle>
            Faça seu login para começar uma experiência incrível
          </Subtitle>
        </HeaderContainer>

        <Form ref={formRef} onSubmit={handleSubmitForm}>
          <InputContainer>
            <Input />
            <Input />
          </InputContainer>
          <TextContainer>
            <Text>Lembrar-me</Text>
            <Text> Esqueci minha senha</Text>
          </TextContainer>
        </Form>

        <Button
          style={{ width: "100%" }}
          text="Login"
          enable
          onPress={() => {}}
        />
      </KeyboardAvoidingContainer>
    </Container>
  );
};

export default SignIn;
