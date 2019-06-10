import React from "react";
import PropTypes from "prop-types";

function DashboardIcon({ className, fill }) {
  return (
    <svg width="30" height="27" className={className}>
      <path
        d="M16.667 0v9H30V0H16.667zm0 27H30V12H16.667v15zM0 27h13.333v-9H0v9zm0-12h13.333V0H0v15z"
        fillRule="nonzero"
      />
    </svg>
  );
}

DashboardIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

DashboardIcon.defaultProps = {
  className: undefined
};

export default DashboardIcon;
