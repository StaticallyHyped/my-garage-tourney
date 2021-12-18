import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const buttonStyles = css`
  flex-direction: column;
  background-color: red;
  color: white;
  opacity: 0.7;

  &:hover {
    opacity: 0.9;
  }
`;

export const HomepageButtonContainer = styled(Link)`
  width: 22vw;
  height: 90px;
  letter-spacing: 0.5px;
  padding: 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid black;

  ${buttonStyles}
`;
