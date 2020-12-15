import React, { useCallback, useEffect } from "react";
import { Text, View, StatusBar, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { TouchableOpacity } from "react-native-gesture-handler";
import Onboarding from "./components/OnBoarding";

// import { Container } from './styles';

// const completeOnboarding = async () => {
//   await AsyncStorage.setItem(
//     "rentX",
//     JSON.stringify({
//       rentX: true,
//     })
//   );
//   navigation.navigate("Login");
// };

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="#FFF"
        barStyle="dark-content"
      />
      <Onboarding />
    </>
  );
};

export default App;
