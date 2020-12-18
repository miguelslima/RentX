import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";

import { useAuth } from '../../hooks/authMock';

// import { Container } from './styles';

const Profile: React.FC = () => {

  const { signOut } = useAuth();
  return (
    <View>
      <Text>Profile testando</Text>
      <Button text="Sair" onPress={() => signOut()} />
    </View>
  );
};

export default Profile;
