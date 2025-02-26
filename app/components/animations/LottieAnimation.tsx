"use client";

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'));

export default function LottieAnimation({animationData, loop, width, height}) {
  return(
    <div className='w-full h-full'>
      <Lottie animationData={animationData} loop={loop} style={{ width: width, height: height }} />
    </div>
  )
}
