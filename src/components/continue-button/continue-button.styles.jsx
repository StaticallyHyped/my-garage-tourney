import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: red;
  color: white;
  border: none;
  margin: 5px 0;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const ContinueButtonContainer = styled.button`
  width: 80%;
  height: 30px;
  letter-spacing: 0.5px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${buttonStyles}
`;
