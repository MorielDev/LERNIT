"use client";

import dynamic from 'next/dynamic';
import earnData from '../../../public/animations/earn.json';
import goalData from '../../../public/animations/goal.json';
import studyData from '../../../public/animations/goal.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export function earnAnimation() {
    return (
        <div className=''>
            <Lottie animationData={earnData} loop={true} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export function goalAnimation() {
    return (
        <div className=''>
            <Lottie animationData={goalData} loop={true} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export function studyAnimation() {
    return (
        <div className=''>
            <Lottie animationData={studyData} loop={true} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}
