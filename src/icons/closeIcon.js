import React from "react";
import PropTypes from "prop-types";

function CloseIcon({className, fill, onClick}) {
  return (
    <svg width="34" height="34" className={className} onClick={onClick}>
      <path
        stroke="#000"
        strokeWidth="2"
        d="M1 11L11 1M1 1l10 10"
        fill={fill}
      />
    </svg>
  );
}

CloseIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func
};

CloseIcon.defaultProps = {
  className: undefined
};

export default CloseIcon;
