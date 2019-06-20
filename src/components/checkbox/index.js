import React, {useState} from "react";

export default function Checkbox(props) {
  const [checked, setChecked] = useState(false);

  const onCheck = e => {
    props.handleItemClick(e.target.value);
    setChecked(prevState => !prevState);
  };

  return (
    <label className="k-form-field">
      <input
        type="checkbox"
        id={props.labelname}
        className="k-checkbox"
        value={props.value}
        checked={checked}
        onChange={event => {
          onCheck(event);
        }}
      />
      <label className="k-checkbox-label" htmlFor={props.labelname} />
    </label>
  );
}
