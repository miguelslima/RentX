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
import { useAuth } from "../../hooks/authMock";
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

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insert an valid email')
            .required('This field is required.'),
          password: Yup.string().min(6, 'At least 6 digits'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data);

        navigation.reset({
          routes: [{ name: 'Success' }],
          index: 0,
        });
        console.log("ok")
      } catch (err) {
        console.log(err)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn, navigation.reset],
  );

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

        <Form ref={formRef} onSubmit={handleSignIn}>
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
            <ForgotPasswordButton onPress={() => Alert.alert("Em manutenção")}>
              <TextForgotPassword> Esqueci minha senha</TextForgotPassword>
            </ForgotPasswordButton>
          </TextContainer>
          <Button
            style={{ width: "100%" }}
            text="Login"
            enable
            onPress={() => {
              formRef.current?.submitForm();
            }}
          />
        </Form>
      </KeyboardAvoidingContainer>
    </Container>
  );
};

export default SignIn;
