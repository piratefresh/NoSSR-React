import React from "react";
import PropTypes from "prop-types";

function DownloadIcon({ className, fill }) {
  return (
    <svg width="24" height="24" className={className}>
      <path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7 7-7z" fill={fill} />
    </svg>
  );
}

DownloadIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

DownloadIcon.defaultProps = {
  className: undefined,
  fill: "#fff"
};

export default DownloadIcon;
