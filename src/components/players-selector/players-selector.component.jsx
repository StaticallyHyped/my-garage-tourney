import React from "react";
import { useTable, useRowSelect } from "react-table";
import { createStructuredSelector } from "reselect";
import {
  selectTourneyPoolItems,
  selectPlayerPoolItems,
} from "../../redux/new-tournament/new-tournament.selectors";

import { connect } from "react-redux";
import { addItemToPool } from "../../redux/new-tournament/new-tournament.utils";
import {
  addPlayerPoolItem,
  updatePlayerPoolCollection,
} from "../../redux/new-tournament/new-tournament.actions";
import "./players-selector.styles.scss";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

function PlayersSelector({
  columns,
  data,
  tableId,
  playerPoolItems,
  tourneyPoolItems,
  addPlayerPoolItem,
  updatePlayerPoolCollection,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,

    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  console.log("initial player pool");
  console.log(playerPoolItems);

  if (tableId === "player" && playerPoolItems) {
    for (let item of selectedFlatRows.map((d) => d.original)) {
      console.log("add player items to p pool");
      addPlayerPoolItem(item);
    }
  }
  /* if (tableId === "player" && playerPoolItems) {
    playerPoolItems = selectedFlatRows.map((d) => d.original);
    for (let item of playerPoolItems) {
      addPlayerPoolItem(item);
    }
  } */

  console.log("playerPoolItems");
  console.log(playerPoolItems);
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.slice(0, 10).map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
      <p>Table ID: {tableId}</p>

      {/* <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              "selectedFlatRows[].original": selectedFlatRows.map(
                (d) => d.original
              ),
            },
            null,
            2
          )}
        </code>
      </pre> */}
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  playerPoolItems: selectPlayerPoolItems,
  tourneyPoolItems: selectTourneyPoolItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerPoolCollection: (collectionsMap) =>
      dispatch(updatePlayerPoolCollection(collectionsMap)),
    addPlayerPoolItem: (item) => dispatch(addPlayerPoolItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersSelector);
//export default PlayersSelector;
