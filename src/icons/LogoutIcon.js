import React from "react";
import PropTypes from "prop-types";

function LogoutIcon({className, fill}) {
  return (
    <svg width="32" height="32" className={className}>
      <path
        d="M19.698 22.382l4.604-4.604H7.112v-3.556h17.19l-4.604-4.604 2.524-2.507L31.112 16l-8.89 8.889-2.524-2.507zM28.444 0A3.556 3.556 0 0 1 32 3.556v8.302l-3.556-3.556V3.556H3.556v24.888h24.888v-4.746L32 20.142v8.302A3.556 3.556 0 0 1 28.444 32H3.556A3.555 3.555 0 0 1 0 28.444V3.556A3.543 3.543 0 0 1 3.556 0h24.888z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

LogoutIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

LogoutIcon.defaultProps = {
  className: undefined
};

export default LogoutIcon;
