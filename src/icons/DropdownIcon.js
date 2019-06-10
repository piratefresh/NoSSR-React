import React from "react";
import PropTypes from "prop-types";

function DropdownIcon({ className, fill }) {
  return (
    <svg width="37" height="37" className={className}>
      <path
        d="M18.5 27.75L9.25 18.5h5.55v-7.4h7.4v7.4h5.55l-9.25 9.25zM18.5 0A18.5 18.5 0 0 1 37 18.5C37 28.717 28.717 37 18.5 37a18.5 18.5 0 1 1 0-37zm0 3.7c-8.174 0-14.8 6.626-14.8 14.8s6.626 14.8 14.8 14.8a14.8 14.8 0 0 0 14.8-14.8c0-8.174-6.626-14.8-14.8-14.8z"
        fill="#1F98F4"
        fillRule="nonzero"
      />
    </svg>
  );
}

DropdownIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

DropdownIcon.defaultProps = {
  className: undefined
};

export default DropdownIcon;
