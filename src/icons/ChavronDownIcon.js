import React from "react";
import PropTypes from "prop-types";

function ChavronDownIcon({ className, fill }) {
  return (
    <svg width="24" height="24" className={className}>
      <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z" />
    </svg>
  );
}

ChavronDownIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

ChavronDownIcon.defaultProps = {
  className: undefined,
  fill: "#708EB0"
};

export default ChavronDownIcon;
