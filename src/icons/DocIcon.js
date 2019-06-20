import React from "react";
import PropTypes from "prop-types";

function DocIcon({className, fill}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
      <path
        d="M36.985 0H7.963C7.155 0 6.5.655 6.5 1.926V55c0 .345.655 1 1.463 1h40.074c.808 0 1.463-.655 1.463-1V12.978c0-.696-.093-.92-.257-1.085L37.607.257A.884.884 0 0 0 36.985 0z"
        fill="#e9e9e0"
      />
      <path fill="#d9d7ca" d="M37.5.151V12h11.849z" />
      <path
        d="M18.5 13h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm3 5h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2zm4 0c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29zm12 0h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm-25 15c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.44.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29zm12 0h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm19-15h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm-9 5h-22a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-27 5h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm14 0h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm13 0h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2z"
        fill="#8697cb"
      />
      <path
        d="M48.037 56H7.963A1.463 1.463 0 0 1 6.5 54.537V39h43v15.537c0 .808-.655 1.463-1.463 1.463z"
        fill="#0096e6"
      />
      <path
        d="M23.5 47.682c0 .829-.089 1.538-.267 2.126s-.403 1.08-.677 1.477-.581.709-.923.937-.672.398-.991.513a4.094 4.094 0 0 1-.875.219c-.264.03-.46.046-.587.046h-3.814V42.924H18.4c.848 0 1.593.135 2.235.403s1.176.627 1.6 1.073.74.955.95 1.524c.21.57.315 1.156.315 1.758zm-4.867 4.115c1.112 0 1.914-.355 2.406-1.066s.738-1.741.738-3.09c0-.419-.05-.834-.15-1.244-.101-.41-.294-.781-.581-1.114s-.677-.602-1.169-.807-1.13-.308-1.914-.308h-.957v7.629h1.627zm14.842-3.883c0 .848-.107 1.595-.321 2.242-.214.647-.511 1.185-.889 1.613-.378.429-.82.752-1.326.971s-1.06.328-1.661.328-1.155-.109-1.661-.328-.948-.542-1.326-.971c-.378-.429-.675-.966-.889-1.613-.214-.647-.321-1.395-.321-2.242s.107-1.593.321-2.235c.214-.643.51-1.178.889-1.606.378-.429.82-.754 1.326-.978s1.06-.335 1.661-.335 1.155.111 1.661.335.948.549 1.326.978c.378.429.674.964.889 1.606.213.642.321 1.387.321 2.235zm-4.239 3.815c.337 0 .658-.066.964-.198.305-.132.579-.349.82-.649.241-.301.431-.695.567-1.183s.209-1.082.219-1.784c-.009-.684-.08-1.265-.212-1.743-.132-.479-.314-.873-.547-1.183s-.497-.533-.793-.67a2.203 2.203 0 0 0-.937-.205c-.337 0-.659.063-.964.191a2.065 2.065 0 0 0-.82.649c-.242.306-.431.699-.567 1.183s-.21 1.075-.219 1.777c.009.684.08 1.267.212 1.75.132.483.314.877.547 1.183s.497.528.793.67c.297.141.609.212.937.212zm13.371.246a3.73 3.73 0 0 1-1.271.82 4.212 4.212 0 0 1-1.531.273c-.602 0-1.155-.109-1.661-.328s-.948-.542-1.326-.971c-.378-.429-.675-.966-.889-1.613-.214-.647-.321-1.395-.321-2.242s.107-1.593.321-2.235c.214-.643.51-1.178.889-1.606a3.78 3.78 0 0 1 1.333-.978 4.069 4.069 0 0 1 1.654-.335c.547 0 1.057.091 1.531.273.474.183.897.456 1.271.82l-1.135 1.012a2.072 2.072 0 0 0-1.627-.752c-.337 0-.659.063-.964.191a2.065 2.065 0 0 0-.82.649c-.242.306-.431.699-.567 1.183s-.21 1.075-.219 1.777c.009.684.08 1.267.212 1.75.132.483.314.877.547 1.183s.497.528.793.67c.296.142.608.212.937.212s.636-.06.923-.178.549-.31.786-.574l1.134.999z"
        fill="#fff"
      />
    </svg>
  );
}

DocIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

DocIcon.defaultProps = {
  className: undefined
};

export default DocIcon;