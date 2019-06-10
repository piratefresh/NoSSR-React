import React from "react";
import PropTypes from "prop-types";

function ResourceIcon({ className, fill }) {
  return (
    <svg width="38" height="25" className={className}>
      <path
        d="M34.833 20.313H28.5V9.374h6.333v10.938zM36.417 6.25h-9.5c-.875 0-1.584.7-1.584 1.563v15.625c0 .862.71 1.562 1.584 1.562h9.5C37.29 25 38 24.3 38 23.437V7.813c0-.862-.709-1.562-1.583-1.562zM6.333 3.125h28.5V0h-28.5C4.584 0 3.167 1.4 3.167 3.125v17.188H0V25h22.167v-4.688H6.333V3.125z"
        fillRule="nonzero"
      />
    </svg>
  );
}

ResourceIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

ResourceIcon.defaultProps = {
  className: undefined
};

export default ResourceIcon;
