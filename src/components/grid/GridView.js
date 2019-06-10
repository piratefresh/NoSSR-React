import {
  Grid,
  GridColumn as Column,
  GridToolbar
} from "@progress/kendo-react-grid";

export function GridView(props) {
  return (
    <Grid
      style={{height: "420px"}}
      data={props.data}
      rowHeight={50}
      onItemChange={props.itemChange}
      cellRender={props.renderers.cellRender}
      rowRender={props.renderers.rowRender}
      editField="inEdit"
      selectedField="selected"
      onSelectionChange={props.selectionChange}
      onHeaderSelectionChange={props.headerSelectionChange}
      onRowClick={props.rowClick}
    >
      <GridToolbar>
        <button
          title="Save Changes"
          className="k-button"
          onClick={props.saveChanges}
          disabled={!props.changes}
        >
          Save Changes
        </button>
        <button
          title="Cancel Changes"
          className="k-button"
          onClick={props.cancelChanges}
          disabled={!props.changes}
        >
          Cancel Changes
        </button>
      </GridToolbar>
      <Column
        field="selected"
        width="50px"
        headerSelectionValue={
          props.data.findIndex(dataItem => dataItem.selected === false) === -1
        }
      />
    </Grid>
  );
}
