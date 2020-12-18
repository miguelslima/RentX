import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import IconI from "react-native-vector-icons/Ionicons";

import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
// import Notes from '../pages/Notes';
// import BuyList from '../pages/BuyList';
// import Account from '../pages/Account';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          height: 56,
          backgroundColor: "#FFF",
        },
        tabStyle: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="home"
                size={size}
                color={focused ? "#DC1637" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Enviar nota"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <IconI
                name="car"
                size={size}
                color={focused ? "#DC1637" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Minhas Listas"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="calendar"
                size={size}
                color={focused ? "#DC1637" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Conta"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="user"
                size={size}
                color={focused ? "#DC1637" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default HomeTabs;
// list, user, file-text, home
