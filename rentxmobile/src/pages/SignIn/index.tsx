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
import { useAuth } from "../../hooks/auth";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const { signIn } = useAuth();

  const [remember, setRemember] = useState(false);

  const handleSubmitForm = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um email válido")
          .required("Email obrigatório"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        "Erro na autenticação",
        `Ocorreu um erro ${err} ao fazer login, cheque as credenciais.`
      );
    }
  }, []);

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
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              showPassword={true}
              placeholder="Senha"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
          </InputContainer>
          <TextContainer>
            <CheckBoxContainer>
              <CheckBox
                value={remember}
                onValueChange={(value) => setRemember(value)}
                tintColors={{ true: "#c53030", false: "#EDEBF9" }}
              />

              <TextRemember>Lembrar-me</TextRemember>
            </CheckBoxContainer>
            <ForgotPasswordButton>
              <TextForgotPassword> Esqueci minha senha</TextForgotPassword>
            </ForgotPasswordButton>
          </TextContainer>
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

export default SignIn;
