import React from "react";
import PropTypes from "prop-types";

function SharedIcon({ className, fill }) {
  return (
    <svg width="21" height="31" className={className}>
      <path
        d="M9.64 17.743l3.948 3.968a4.944 4.944 0 0 1 5.963.802A4.975 4.975 0 0 1 21 26.026a4.971 4.971 0 0 1-3.058 4.595 4.944 4.944 0 0 1-5.403-1.078 4.983 4.983 0 0 1-.721-6.11L8.243 19.84a4.947 4.947 0 0 1-6.793-.208 4.983 4.983 0 0 1-1.071-5.42 4.955 4.955 0 0 1 4.583-3.064c.89 0 1.755.24 2.51.686l4.308-4.33a4.986 4.986 0 0 1-.312-4.44A4.955 4.955 0 0 1 16.05 0c1.314 0 2.573.525 3.502 1.457A4.975 4.975 0 0 1 21 4.97a4.971 4.971 0 0 1-3.06 4.594 4.942 4.942 0 0 1-4.416-.313L9.218 13.58a4.98 4.98 0 0 1 .422 4.163z"
        fillRule="nonzero"
      />
    </svg>
  );
}

SharedIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

SharedIcon.defaultProps = {
  className: undefined
};

export default SharedIcon;
