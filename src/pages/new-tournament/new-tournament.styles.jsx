import styled from "styled-components";
import AddRemoveButton from "../../components/add-remove-button/add-remove-button.component";

export const PlayerSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0px;
  border: 2px solid black;
  border-radius: 10px;
  align-content: center;
  width: fit-content;
  margin: 2px;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  align-items: center;
`;
export const ButtonAddRemove = styled(AddRemoveButton)`
  width: auto;
  margin: 0px;
  background-color: purple;
`;
