import React from "react";
import PropTypes from "prop-types";

function SettingsIcon({className, fill}) {
  return (
    <svg width="37" height="37" className={className}>
      <path
        d="M33.3 0H3.7A3.7 3.7 0 0 0 0 3.7V37l7.4-7.4h25.9a3.7 3.7 0 0 0 3.7-3.7V3.7C37 1.646 35.335 0 33.3 0z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

SettingsIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

SettingsIcon.defaultProps = {
  className: undefined
};

export default SettingsIcon;
