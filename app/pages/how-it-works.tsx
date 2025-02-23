"use client";

import { motion } from "framer-motion";
import { earnAnimation, goalAnimation, studyAnimation } from '../components/animations/animations';
import Lottie from "lottie-react";
import earnData from '../../public/animations/anim2.json';
import goalData from '../../public/animations/goal.json';
import studyData from '../../public/animations/study.json';
import redeemData from '../../public/animations/reward.json';
import { IoIosArrowRoundForward } from "react-icons/io";
import CTAButton from "../components/Buttons/CTAButton";

const steps = [
    {
        title: "Set Goals",
        description: "Choose subjects (coding, math, etc.) and daily targets. Customize your study plan to match your learning style and pace. Track progress in real-time and adjust goals as you improve.",
        animation: goalData,
    },
    {
        title: "Study & Verify",
        description: "Use our app, offline time-lapse, or screen recording. AI confirms your effort by analyzing your study patterns and validating your focus. Peer reviews further ensure fairness and transparency.",
        animation: studyData,
    },
    {
        title: "Earn EDU Coins",
        description: "1 hour = 10 EDU Coins. Bonus coins for streaks and quizzes! Boost earnings with weekly challenges, group study sessions, and special events. The more you stay consistent, the more you earn.",
        animation: earnData
    },
    {
        title: "Redeem Rewards",
        description: "Cash out, grab discounts, or unlock NFTs. Your choice! Exchange EDU Coins for real-life benefits—gift cards, learning resources, and exclusive NFT badges that showcase your academic milestones.",
        animation: redeemData,
    },
];


export default function HowItWorks() {
    return (
        <section className="bg-backgroundColor min-h-screen py-16 px-20">
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-3xl font-bold text-darkGray text-center"
            >
                From Study to Crypto in 4 Steps
            </motion.h1>

            <div className="mt-12 grid grid-cols-2 gap-4 flex justify-between w-full">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-row items-center"
                    >
                        <div className="text-center w-4/6 md:text-left">
                            <h2 className="text-2xl font-semibold text-darkGray">{`Step ${index + 1} - ${step.title}`}</h2>
                            <p className="text-lg text-mutedGray mt-2">{step.description}</p>
                        </div>

                        <div className="w-2/6 flex justify-center">
                            <Lottie animationData={step.animation} loop={true} style={{ width: '100%', height: '100%' }} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Call to Action */}
            <CTAButton placeholder="Start Earning Today"/>
        </section>
    );
}
