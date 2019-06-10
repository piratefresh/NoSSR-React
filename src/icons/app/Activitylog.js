import React from "react";
import PropTypes from "prop-types";

function ActivityLogIcon({className, fill}) {
  return (
    <svg width="32" height="32" className={className}>
      <path
        d="M28.444 28.444H3.556V3.556h17.777V0H3.556A3.543 3.543 0 0 0 0 3.556v24.888A3.556 3.556 0 0 0 3.556 32h24.888A3.556 3.556 0 0 0 32 28.444V14.222h-3.556v14.222zM8.73 12.587L6.222 15.11l8 8L32 5.333 29.493 2.81 14.223 18.08l-5.494-5.493z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

ActivityLogIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

ActivityLogIcon.defaultProps = {
  className: undefined
};

export default ActivityLogIcon;
