"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"));

import { LottieComponentProps } from "lottie-react";

export default function LottieAnimation({
  animationData,
  loop,
  width,
  height,
}: LottieComponentProps) {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={animationData}
        loop={loop}
        style={{ width: width, height: height }}
      />
    </div>
  );
}
