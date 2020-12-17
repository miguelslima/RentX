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
  InfoText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, TextInput } from "react-native";

import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

import { useAuth } from "../../hooks/authMock";

interface SignUpFormData {
  nome: string;
  email: string;
  password: string;
  test?: string[];
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const passwordConfirmInputRef = useRef<TextInput>(null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [fieldPassword, setFieldPassword] = useState(true);

  const { signUp } = useAuth();

  const handleSubmitForm = useCallback(
    async (data: SignUpFormData) => {
      // console.log({ ...data, nome, email });

      data = { ...data, nome, email };
      console.log(data);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().min(6, "No mínimo 06 dígitos"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        // await api.post('/users', data);
        await signUp(data);

        Alert.alert(
          `🎉 Cadastro realizado 🚀`,
          `Você já pode fazer seu logon no\nRentX!`
        );

        navigation.navigate("Success");
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
          {fieldPassword ? (
            <>
              <InputContainer>
                <InfoText>01. Dados</InfoText>
                <Input
                  name="nome"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoCorrect={false}
                  icon="user"
                  placeholder="Nome"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   passwordInputRef.current?.focus();
                  // }}
                />

                <Input
                  name="email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoCorrect={false}
                  icon="mail"
                  placeholder="E-mail"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   passwordInputRef.current?.focus();
                  // }}
                />
              </InputContainer>

              <Button
                style={{ width: "100%" }}
                text="Próximo"
                enable
                onPress={() => {
                  setNome(formRef.current?.getFieldValue("nome"));
                  setEmail(formRef.current?.getFieldValue("email"));
                  setFieldPassword(false);
                }}
              />
            </>
          ) : (
            <>
              <InputContainer>
                <InfoText>02. Senha</InfoText>
                <Input
                  ref={passwordInputRef}
                  name="password"
                  icon="lock"
                  showPassword={true}
                  placeholder="Senha"
                  returnKeyType="send"
                  onSubmitEditing={() => {
                    passwordConfirmInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={passwordConfirmInputRef}
                  name="confirmPassword"
                  icon="lock"
                  showPassword={true}
                  placeholder="Repetir senha"
                  returnKeyType="send"
                  onSubmitEditing={() => {
                    formRef.current?.submitForm();
                  }}
                />
              </InputContainer>

              <Button
                style={{ width: "100%" }}
                text="Cadastrar"
                enable
                onPress={() => {
                  setNome(nome);
                  setEmail(email);
                  formRef.current?.submitForm();
                }}
                // onPress={() => navigation.navigate("Success")}
              />
            </>
          )}
        </Form>
      </KeyboardAvoidingContainer>
    </Container>
  );
};

export default SignUp;
