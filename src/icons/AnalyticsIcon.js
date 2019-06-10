import React from "react";
import PropTypes from "prop-types";

function AnalyticsIcon({className, fill}) {
  return (
    <svg width="34" height="34" className={className}>
      <path
        d="M30.222 0A3.778 3.778 0 0 1 34 3.778v26.444A3.778 3.778 0 0 1 30.222 34h-7.555V3.778A3.778 3.778 0 0 1 26.444 0h3.778zM3.778 34A3.778 3.778 0 0 1 0 30.222v-3.778a3.778 3.778 0 0 1 3.778-3.777h7.555V15.11a3.778 3.778 0 0 1 3.778-3.778h6.611V34H3.778z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

AnalyticsIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

AnalyticsIcon.defaultProps = {
  className: undefined
};

export default AnalyticsIcon;
