import React from "react";
import PropTypes from "prop-types";

function IntercomIcon({className, fill}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
      <path
        d="M58 7v33c0 2.722-2.278 5-5 5H24L14 56V45H5c-2.722 0-5-2.278-5-5V7c0-2.722 2.278-5 5-5h48c2.722 0 5 2.278 5 5z"
        fill="#4362a5"
      />
      <path fill="#fff" d="M9 33l10-20 18 13 12-14-12 23-18-13z" />
    </svg>
  );
}

IntercomIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

IntercomIcon.defaultProps = {
  className: undefined,
  fill: "#fff"
};

export default IntercomIcon;
