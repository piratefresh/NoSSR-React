import React from "react";
import PropTypes from "prop-types";

function HomeIcon({className, fill}) {
  return (
    <svg width="36" height="29" className={className}>
      <path
        d="M14.4 29V18.765h7.2V29h9V15.353H36L18 0 0 15.353h5.4V29z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

HomeIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

HomeIcon.defaultProps = {
  className: undefined
};

export default HomeIcon;
