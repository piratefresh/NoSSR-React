import React from "react";
import Lottie from "react-lottie";
import LegoLoading from "../../images/410-lego-loader";

export default function LottieLoader() {
  // Lottie Player Options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LegoLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return <Lottie options={defaultOptions} height={400} width={400} />;
}
