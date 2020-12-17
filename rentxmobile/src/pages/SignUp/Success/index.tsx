import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import Button from "../../../components/Button";

import {
  Container,
  ContainerMiddle,
  TextCreateAccount,
  TextSuccess,
} from "./styles";

const Success: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image
        style={{ width: "100%" }}
        source={require("../../../assets/UnionOk.png")}
      />
      <ContainerMiddle>
        <Image source={require("../../../assets/Done.png")} />
        <TextCreateAccount>Conta criada!</TextCreateAccount>
        <TextSuccess>Agora é só fazer login e aproveitar.</TextSuccess>
      </ContainerMiddle>

      <Button
        style={{
          backgroundColor: "#29292E",
          width: 80,
          height: 56,
          marginTop: 60,
        }}
        text="Ok"
        onPress={() => navigation.navigate("SignIn")}
      />
    </Container>
  );
};

export default Success;
