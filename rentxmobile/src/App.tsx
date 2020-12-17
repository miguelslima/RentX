import React from "react";
import { StatusBar } from "react-native";
import AppProvider from "./hooks";
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
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
};

export default App;
