import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Button from "../../components/Button";

import { Container, WelcomeTitle, WelcomeSubTitle } from "./styles";

const Welcome: React.FC = () => {
  return (
    <Container>
      <Image
        style={{ alignSelf: "center", marginTop: 120 }}
        source={require("../../assets/Splash/Union.png")}
      />

      <View style={{ width: 202, height: 88, alignSelf: "center" }}>
        <WelcomeTitle>Seja bem-vindo</WelcomeTitle>
        <WelcomeSubTitle>O que deseja fazer?</WelcomeSubTitle>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{ backgroundColor: "#dc1637" }}
            text="Login"
            enable
            marginHorizontal={20}
            onPress={() => {}}
          />
          <Button
            style={{ backgroundColor: "#29292e" }}
            text="Cadastro"
            enable
            marginHorizontal={20}
            onPress={() => {}}
          />
        </View>

        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 14,
              marginVertical: 40,
              color: "#7a7a80",
              textAlign: "center",
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Welcome;
