import styled from "styled-components/native";

interface CarImageDotProps {
  isSelected?: boolean;
}

export const Container = styled.View`
  height: 250px;
  margin: 16px 24px;
  padding: 24px;
  background-color: #f4f5f6;
  elevation: 3;

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

export const Dot = styled.View<CarImageDotProps>`
  margin-left: 8px;
  height: 4px;
  width: 4px;
  border-radius: 4px;
  /* background-color: #3d3d4d; */
  background-color: ${(props) => (props.isSelected ? "#3d3d4d" : "#c9c9d4")};
`;
