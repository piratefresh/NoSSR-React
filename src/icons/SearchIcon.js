import React from "react";
import PropTypes from "prop-types";

function SearchIcon({ className, fill }) {
  return (
    <svg width="16" height="16" className={className}>
      <path
        d="M5.943 0a5.943 5.943 0 0 1 5.943 5.943c0 1.472-.54 2.825-1.427 3.867l.247.247h.723L16 14.63 14.629 16l-4.572-4.571v-.723l-.247-.247a5.957 5.957 0 0 1-3.867 1.427A5.943 5.943 0 0 1 5.943 0zm0 1.829a4.097 4.097 0 0 0-4.114 4.114 4.097 4.097 0 0 0 4.114 4.114 4.097 4.097 0 0 0 4.114-4.114 4.097 4.097 0 0 0-4.114-4.114z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
}

SearchIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

SearchIcon.defaultProps = {
  className: undefined
};

export default SearchIcon;
