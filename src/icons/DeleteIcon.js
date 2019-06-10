import React from "react";
import PropTypes from "prop-types";

function DeleteIcon({ className, fill }) {
  return (
    <svg width="10" height="12" className={className}>
      <path
        d="M10 .667H7.5L6.786 0H3.214L2.5.667H0V2h10V.667zm-9.286 10c0 .736.64 1.333 1.429 1.333h5.714c.79 0 1.429-.597 1.429-1.333v-8H.714v8z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
}

DeleteIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

DeleteIcon.defaultProps = {
  className: undefined
};

export default DeleteIcon;
