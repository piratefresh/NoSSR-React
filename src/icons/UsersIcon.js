import React from "react";
import PropTypes from "prop-types";

function UsersIcon({className, fill}) {
  return (
    <svg width="42" height="26" className={className}>
      <path
        d="M28.735 14.857c-.54 0-1.156 0-1.808.093 2.162 1.56 3.671 3.621 3.671 6.407V26H41.78v-4.643c0-4.327-8.703-6.5-13.045-6.5zm-14.91 0C9.483 14.857.78 17.03.78 21.357V26h26.09v-4.643c0-4.327-8.702-6.5-13.045-6.5zm0-3.714c3.088 0 5.591-2.495 5.591-5.572S16.913 0 13.826 0c-3.088 0-5.591 2.494-5.591 5.571 0 3.077 2.503 5.572 5.59 5.572zm14.91 0c3.087 0 5.59-2.495 5.59-5.572S31.822 0 28.735 0c-3.088 0-5.591 2.494-5.591 5.571 0 3.077 2.503 5.572 5.59 5.572z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

UsersIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

UsersIcon.defaultProps = {
  className: undefined
};

export default UsersIcon;
