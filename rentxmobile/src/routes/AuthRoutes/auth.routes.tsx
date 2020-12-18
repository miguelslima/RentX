import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../../pages/Welcome";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Success from "../../pages/SignUp/Success";

import HomeTabs from "../HomeTabs";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator>
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ headerShown: false }}
    />
    <Auth.Screen
      name="Success"
      component={Success}
      options={{ headerShown: false }}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
