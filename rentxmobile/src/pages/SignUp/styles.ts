import styled from "styled-components/native";
import ReactCheckBox from "@react-native-community/checkbox";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: space-between;
`;

export const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const GoBack = styled.TouchableOpacity`
  padding-horizontal: 32px;
`;

export const HeaderContainer = styled.View`
  padding-horizontal: 32px;
`;

export const Title = styled.Text`
  width: 169px;
  font-size: 40px;
  line-height: 44px;
  font-family: "Archivo-Bold";
  margin-top: 80px;
`;

export const Subtitle = styled.Text`
  width: 205px;
  font-size: 14px;
  line-height: 25px;
  font-family: "Inter-Regular";
  margin-top: 24px;
`;

export const InputContainer = styled.View`
  margin-top: 110px;
  padding-horizontal: 24px;
  margin-bottom: 32px;
`;

export const InfoText = styled.Text`
  font-family: "Archivo-Bold";
  color: #3d3d4d;
  font-size: 20px;
  line-height: 22px;
  margin-bottom: 24px;
  padding-left: 8px;
`;
