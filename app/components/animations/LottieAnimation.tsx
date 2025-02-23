"use client";

import dynamic from 'next/dynamic';
import animationData from '../../../public/animations/anim.json';

const Lottie = dynamic(() => import('lottie-react'));

export default function LottieAnimation() {
  return(
    <div className='w-full h-full'>
      <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
