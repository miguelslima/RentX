import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerHeader = styled.View`
  margin-bottom: 40px;
  background-color: #1b1b1f;
`;

export const ChooseDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 24px;
  margin-top: 24px;
`;

export const Border = styled.Text`
  border-bottom-width: 1px;
  border-bottom-color: #7a7a80;
  color: #fff;
  width: 104px;
  height: 20px;
  margin-bottom: 40px;
`;

export const ChooseDateText = styled.Text`
  color: #7a7a80;
  font-family: "Archivo-Regular";
  font-size: 12px;
  line-height: 12px;
`;

export const ChooseDateOf = styled.View`
  width: 105px;
`;

export const ChooseDateTo = styled.View`
  width: 105px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 24px;
`;
export const SearchText = styled.Text`
  font-size: 25px;
  line-height: 28px;
  font-family: "Archivo-Bold";
  color: #47474d;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;

`;
export const FindCars = styled.Text`
  font-family: "Inter-Regular";
  color: #aeaeb3;
  line-height: 16px;
  font-size: 13px;
  margin-right: 25px;
`;
