import styled from "styled-components/native";

export const Container = styled.View``;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  height: 180px;
  padding-horizontal: 27px;
  padding-top: 32px;
  background-color: #1b1b1f;
`;

export const ImageContainer = styled.View`
  width: 180px;
  height: 180px;
  position: absolute;
  top: 90px;
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

export const ButtonEdit = styled.TouchableOpacity``;
export const ButtonSignOut = styled.TouchableOpacity``;

export const Name = styled.Text`
  font-family: "Archivo-Bold";
  font-size: 30px;
  line-height: 33px;
  color: #3d3d4d;
  text-align: center;
`;

export const SchedulingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 24px;
  margin-top: 64px;
`;

export const SchedulingText = styled.Text`
  font-family: "Inter-Regular";
  font-size: 15px;
  line-height: 18px;
  color: #7a7a80;
`;

export const SchedulingNumber = styled.Text`
  font-family: "Archivo-Medium";
  font-size: 15px;
  line-height: 18px;
  color: #47474d;
`;

export const Line = styled.View`
  margin-top: 19px;
  margin-bottom: 27px;
  margin-horizontal: 24px;
  border-bottom-width: 2px;
  border-bottom-color: #e6e6f0;
`;

export const FavoriteCarContainer = styled.View``;

export const FavoriteCarText = styled.Text`
  color: #7a7a80;
  font-size: 15px;
  line-height: 18px;
  font-family: "Inter-Regular"
`;

export const FavoriteCarNumber = styled.Text``;
