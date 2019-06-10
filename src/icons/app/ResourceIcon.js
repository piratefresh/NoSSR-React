import React from "react";
import PropTypes from "prop-types";

function ResourceIcon({className, fill}) {
  return (
    <svg width="31" height="31" className={className}>
      <path
        d="M30.032 31H.969A.967.967 0 0 1 0 30.041V15l11.624 5.71v2.62a1.934 1.934 0 0 0 1.937 1.917h3.875a1.934 1.934 0 0 0 1.939-1.917v-2.62L31 15v15.041a.967.967 0 0 1-.968.959zM18 23h-4v-2h4v2zm-.562-5.608h-3.875a1.938 1.938 0 0 0-1.402.608L0 12.083V8.848a.962.962 0 0 1 .969-.95h4.844c.004-1.047.87-1.895 1.938-1.898h1.937c1.07.003 1.935.852 1.938 1.9h7.75c.003-1.048.868-1.896 1.937-1.9h1.937c1.068.004 1.934.852 1.937 1.9h4.844a.962.962 0 0 1 .969.949v3.235L18.84 18a1.938 1.938 0 0 0-1.402-.608zm.923-15.375l-5.701-.018c-1.204 0-2.278.798-2.68 1.992L8 3.985C8.46 1.66 10.409-.004 12.666 0l5.7.018C20.61.029 22.541 1.689 23 4h-1.984c-.402-1.181-1.462-1.973-2.655-1.983z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

ResourceIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

ResourceIcon.defaultProps = {
  className: undefined
};

export default ResourceIcon;
