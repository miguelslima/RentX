import "react-native-gesture-handler";

import React from "react";
import { StatusBar, View } from "react-native";
import AppProvider from "./hooks";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={false}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
