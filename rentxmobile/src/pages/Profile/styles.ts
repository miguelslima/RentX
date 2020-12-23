import styled from "styled-components/native";

export const Container = styled.View``;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  height: 150px;
  padding-horizontal: 27px;
  padding-top: 32px;
  background-color: #1b1b1f;
`;

export const ImageContainer = styled.View`
  width: 180px;
  height: 180px;
  position: absolute;
  top: 95px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  background-color: #f0f0f0;
  elevation: 3;
`;

export const Title = styled.Text`
  font-size: 25px;
  line-height: 27px;
  font-family: "Archivo-Bold";
  color: #fff;
`;

export const ButtonSignOut = styled.TouchableOpacity``;

export const Name = styled.Text``;
