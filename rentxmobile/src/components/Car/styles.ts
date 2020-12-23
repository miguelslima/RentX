import styled from "styled-components/native";

export const Container = styled.View`
  height: 250px;
  margin: 16px 24px 0;
  padding: 24px;
  background-color: #f4f5f6;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Brand = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: "Archivo-Regular";
  color: #aeaeb3;
`;

export const Name = styled.Text`
  font-size: 22px;
  line-height: 23px;
  font-family: "Archivo-Regular";
  color: #47474d;
  margin-top: 4px;
`;

export const Day = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: "Archivo-Regular";
  color: #aeaeb3;
`;

export const Price = styled.Text`
  font-size: 22px;
  line-height: 23px;
  font-family: "Archivo-Regular";
  color: #dc1637;
  margin-top: 4px;
`;
