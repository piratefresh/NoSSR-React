import React from "react";
import PropTypes from "prop-types";

function ShareVarientIcon({ className, fill }) {
  return (
    <svg width="18" height="21" className={className}>
      <path
        d="M15 14.583c-.76 0-1.44.3-1.96.77l-7.13-4.15c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 1 0-3-3c0 .24.04.47.09.7l-7.05 4.11c-.54-.5-1.25-.81-2.04-.81a3 3 0 1 0 0 6c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66 0 1.61 1.31 2.91 2.92 2.91a2.915 2.915 0 1 0 0-5.83z"
        fillRule="evenodd"
      />
    </svg>
  );
}

ShareVarientIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

ShareVarientIcon.defaultProps = {
  className: undefined
};

export default ShareVarientIcon;
