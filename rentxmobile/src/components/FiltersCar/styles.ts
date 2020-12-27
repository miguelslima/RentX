import styled from "styled-components/native";

export const Container = styled.View.attrs({ zIndex: 20 })`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  justify-content: flex-end;
`;

export const ModalContainer = styled.View`
  width: 100%;
  /* height: 100%; */

  padding: 0 24px 24px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const Line = styled.View`
  margin-top: 19px;
  margin-bottom: 27px;
  margin-horizontal: 24px;
  border-bottom-width: 2px;
  border-bottom-color: #e6e6f0;
`;
