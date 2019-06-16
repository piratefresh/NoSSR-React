import React from "react";
import {GridToolbar} from "@progress/kendo-react-grid";
import {ButtonStyleSecondary, ButtonStyleBlue} from "../buttons";

export default function GridHeader(props) {
  return (
    <GridToolbar>
      {props.changes ? (
        <>
          <ButtonStyleSecondary
            small
            title="Cancel Changes"
            onClick={props.cancelChanges}
            disabled={!props.changes}
          >
            Cancel Changes
          </ButtonStyleSecondary>
          <ButtonStyleBlue
            small
            title="Save Changes"
            onClick={props.saveChanges}
            disabled={!props.changes}
          >
            Save Changes
          </ButtonStyleBlue>
        </>
      ) : null}
    </GridToolbar>
  );
}
