import styled from "styled-components/native";

export const Container = styled.View`
  margin-horizontal: 16px;
  margin-top: 16px;

  height: 130px;

  flex-direction: row;
  justify-content: space-between;

  background-color: #f4f5f6;
`;

export const InfoCar = styled.View`
  margin: 24px;
`;

export const ImageCar = styled.View`
  margin: 24px;
`;

export const Brand = styled.Text`
  font-family: "Arhico-Medium";
  font-size: 12px;
  line-height: 11px;
  color: #aeaeb3;
`;

export const Name = styled.Text`
  font-family: "Arhico-Bold";
  font-size: 17px;
  line-height: 16px;
  color: #47474d;
  margin-top: 5px;
`;

export const Days = styled.Text`
  font-family: "Arhico-Medium";
  font-size: 12px;
  line-height: 11px;
  color: #aeaeb3;

  margin-top: 17px;
`;

export const Price = styled.Text`
  font-family: "Arhico-SemiBold";
  font-size: 17px;
  line-height: 16px;
  color: #dc1637;
  margin-top: 5px;
`;
