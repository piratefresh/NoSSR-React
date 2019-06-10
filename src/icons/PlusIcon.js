import React from "react";
import PropTypes from "prop-types";

function DevicesIcon({ className, fill }) {
  return (
    <svg width="12" height="12" className={className}>
      <path
        d="M12 6.857H6.857V12H5.143V6.857H0V5.143h5.143V0h1.714v5.143H12z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
}

DevicesIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

DevicesIcon.defaultProps = {
  className: undefined
};

export default DevicesIcon;
