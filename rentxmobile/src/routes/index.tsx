import React from "react";
import { View, ActivityIndicator } from "react-native";

import SplashScreen from "react-native-splash-screen";
import AuthRoutes from "./AuthRoutes/";
import AppRoutes from "./AppRoutes/";

import { useAuth } from "../hooks/authMock";

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#DC1637" />
      </View>
    );
  }

  SplashScreen.hide();

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
