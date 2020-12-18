import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeTabs from "../HomeTabs";
import Home from "../../pages/Home";

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#F9F9F9" },
    }}
  >
    <App.Screen name="HomeTabs" component={HomeTabs} />
  </App.Navigator>
);

export default AppRoutes;
