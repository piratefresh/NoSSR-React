import React from "react";

export default function Checkbox(props) {
  return (
    <label className="k-form-field">
      <input type="checkbox" id={props.labelname} className="k-checkbox" />
      <label className="k-checkbox-label" for={props.labelname} />
    </label>
  );
}
