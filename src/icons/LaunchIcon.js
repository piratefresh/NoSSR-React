import React from "react";
import PropTypes from "prop-types";

function LaunchIcon({ className, fill }) {
  return (
    <svg width="24" height="24" className={className}>
      <path
        d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"
        fill={fill}
      />
    </svg>
  );
}

LaunchIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

LaunchIcon.defaultProps = {
  className: undefined,
  fill: "#fff"
};

export default LaunchIcon;
