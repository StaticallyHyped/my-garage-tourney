import styled, { css } from "styled-components";

export const ButtonStyles = css`
  background-color: red;
  color: black;
  border: 1px solid black;

  &:hover {
    opacity: 0.7;
  }
`;

export const AddRemoveButtonContainer = styled.button`
  width: 70px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
