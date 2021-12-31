import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: red;
  color: white;
  border: none;
  margin: 5px 0;
  padding: 2px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContinueButtonContainer = styled.button`
  width: 22vw;
  border-radius: 10px;
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
