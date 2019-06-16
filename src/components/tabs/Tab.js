import React, {Component} from "react";
import PropTypes from "prop-types";

export default function Tab(props) {
  const onClick = () => {
    const {label, onClick} = props;
    onClick(label);
  };

  const {activeTab, label} = props;

  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }

  return (
    <li className={className} onClick={onClick}>
      {label}
    </li>
  );
}
