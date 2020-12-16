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
  CheckBoxContainer,
  CheckBox,
  TextRemember,
  ForgotPasswordButton,
  TextForgotPassword,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, TextInput } from "react-native";

import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

interface SignUpFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmitForm = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().min(6, "No mínimo 06 dígitos"),
        });
        console.log(data);
        await schema.validate(data, {
          abortEarly: false,
        });

        // await api.post('/users', data);

        Alert.alert(
          `🎉 Cadastro realizado 🚀`,
          `Você já pode fazer seu logon no\n🧔GoBarber💇‍♂️️💈️!`
        );

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          "Erro no cadastro 🥴",
          "Ocorreu um erro ao fazer cadastro, tente novamente."
        );
      }
    },
    [navigation]
  );

  return (
    <Container>
      <KeyboardAvoidingContainer behavior="position">
        <GoBack onPress={() => navigation.goBack()}>
          <Icon size={20} name="chevron-left" color="#AEAEB3" />
        </GoBack>
        <HeaderContainer>
          <Title>Crie sua conta</Title>
          <Subtitle>Faça seu cadastro de forma rápida e fácil.</Subtitle>
        </HeaderContainer>

        <Form ref={formRef} onSubmit={handleSubmitForm}>
          <InputContainer>
            <Text>1. Dados</Text>
            <Input
              name="nome"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              icon="user"
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />

            <Input
              name="email"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            {/* <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              showPassword={true}
              placeholder="Senha"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            /> */}
          </InputContainer>
        </Form>

        <Button
          style={{ width: "100%" }}
          text="Login"
          enable
          onPress={() => {
            formRef.current?.submitForm();
          }}
        />
      </KeyboardAvoidingContainer>
    </Container>
  );
};

export default SignUp;
