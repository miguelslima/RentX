import React from "react";
import { View, ActivityIndicator } from "react-native";

import SplashScreen from "react-native-splash-screen";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";

import { useAuth } from "../hooks/auth";

const Routes: React.FC = () => {
  const { user = true, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="666" />
      </View>
    );
  }

  SplashScreen.hide();

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
