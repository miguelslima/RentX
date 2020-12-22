import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #1b1b1f;
  flex: 1;
`;

export const ContainerHeader = styled.View``;

export const Title = styled.Text`
  width: 218px;
  height: 102px;
  margin-vertical: 48px;
  margin-left: 24px;
  font-family: "Archivo-Bold";
  font-size: 30px;
  line-height: 34px;
  color: #fff;
`;

export const ChooseDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 24px;
`;

export const Border = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #7a7a80;
  width: 104px;
  height: 18px;
`;

export const ChooseDateText = styled.Text`
  color: #7a7a80;
  font-family: "Archivo-Regular";
  font-size: 11px;
  line-height: 11px;
`;

export const ChooseDateOf = styled.View`
  flex: 0.5;
`;

export const ChooseDateTo = styled.View`
  flex: 0.5;
`;
