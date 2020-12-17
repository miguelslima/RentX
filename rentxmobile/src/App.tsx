import React from "react";
import { StatusBar } from "react-native";

import Onboarding from "./components/OnBoarding";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <Routes />
    </>
  );
};

export default App;
