import React from "react";
import { Text, View, StatusBar, AsyncStorage, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

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
        backgroundColor="#1b1b1b"
        barStyle="light-content"
      />
      <Onboarding
        pages={[
          {
            backgroundColor: "#1b1b1b",
            image: <Image source={require("./assets/Splash/iPhone.png")} />,
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "#1b1b1b",
            image: <Image source={require("./assets/Splash/Union.png")} />,
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "#1b1b1b",
            image: <Image source={require("./assets/Splash/iPhone.png")} />,
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "#1b1b1b",
            image: <Image source={require("./assets/Splash/Logotipo.png")} />,
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "#1b1b1b",
            image: <Image source={require("./assets/Splash/iPhone.png")} />,
            title: "",
            subtitle: "",
          },
        ]}
      />
    </>
  );
};

export default App;
