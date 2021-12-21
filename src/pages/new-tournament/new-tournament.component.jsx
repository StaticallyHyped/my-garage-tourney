import React from "react";
import TourneySizeSelector from "../../components/player-num-select/tourney-size-selector.components";
import PlayersSelector from "../../components/players-selector/players-selector.component";
import { connect } from "react-redux";
import {
  ButtonAddRemove,
  ButtonContainer,
  Items,
  PlayerSelectorContainer,
} from "./new-tournament.styles";
import "./new-tournament.styles.scss";
import { useParams } from "react-router-dom";
import { updateCollections } from "../../redux/players/players.actions";
import styled from "styled-components";

const Styles = styled.div`
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

const NewTournament = ({ hidden }) => {
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
  ]);

  const data = React.useMemo(() => [
    { name: "Seth" },
    { name: "John" },
    { name: "Adam" },
    { name: "Timi" },
    { name: "Tyler" },
    { name: "Cuba" },
  ]);

  const INITIAL_DATA = React.useMemo(() => [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ]);

  return (
    <div className="new-tournament-page">
      <TourneySizeSelector />
      <div>
        {hidden ? null : (
          <Items>
            <Styles>
              <PlayersSelector columns={columns} data={data} />
            </Styles>
            <ButtonContainer>
              <ButtonAddRemove />
            </ButtonContainer>
            <Styles>
              <PlayersSelector columns={columns} data={INITIAL_DATA} />
            </Styles>
          </Items>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

const mapStateToProps = ({ newTournament: { hidden } }) => ({
  hidden,
});

/* function makeData(...lens) {
const makeDataLevel = (depth = 0) => {
  const len = lens[depth] {
    return {
      name: "Seth",
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
    }
  })
}
return makeDataLevel();

}; */
export default connect(mapStateToProps, mapDispatchToProps)(NewTournament);
//export default connect(mapStateToProps)(NewTournament);
