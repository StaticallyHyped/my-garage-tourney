import styled from "styled-components";
import AddRemoveButton from "../../components/add-remove-button/add-remove-button.component";

export const PlayerSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Styles = styled.div`
  padding: 5px;
  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 200px;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      font-weight: bolder;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :first-child {
        width: 10%;
      }
      :last-child {
        border-right: 0;
      }
    }
  }
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
