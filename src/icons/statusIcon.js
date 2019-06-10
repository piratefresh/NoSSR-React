import React from "react";
import PropTypes from "prop-types";

function ShareVarientIcon({className, fill}) {
  return (
    <svg width="17" height="18" className={className}>
      <path
        d="M17 9c0 4.963-3.813 9-8.5 9C3.813 18 0 13.963 0 9s3.813-9 8.5-9C13.187 0 17 4.037 17 9z"
        fill={fill}
        fillRule="nonzero"
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
