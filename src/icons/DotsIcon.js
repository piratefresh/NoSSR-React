import React from "react";
import PropTypes from "prop-types";

function DotsIcon({className, fill}) {
  return (
    <svg
      width="40"
      height="40"
      fill="#617182"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.871 5.807a3.87 3.87 0 1 0 0 7.741 3.87 3.87 0 0 0 0-7.741zm0 10.322a3.87 3.87 0 1 0 0 7.742 3.87 3.87 0 0 0 0-7.742zm0 10.323a3.87 3.87 0 1 0 0 7.741 3.87 3.87 0 0 0 0-7.741zm9.032-14.194H37.42a2.58 2.58 0 1 0 0-5.161H12.903a2.58 2.58 0 1 0 0 5.161zM37.42 17.42H12.903a2.58 2.58 0 1 0 0 5.16H37.42a2.58 2.58 0 1 0 0-5.16zm0 10.322H12.903a2.58 2.58 0 1 0 0 5.161H37.42a2.58 2.58 0 1 0 0-5.16z"
        fill="#617182"
      />
    </svg>
  );
}

DotsIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

DotsIcon.defaultProps = {
  className: undefined
};

export default DotsIcon;
