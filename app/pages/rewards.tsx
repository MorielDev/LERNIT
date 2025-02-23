"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import Lottie from "lottie-react";
import { MdOutlineArrowForward } from "react-icons/md";
import HeaderText from "../components/Text/HeaderText";
import { rewards } from "../data/arrays";

export default function Rewards() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-backgroundColor px-4 h-screen w-full  pt-8 md:pt-8 lg:pt-0 xl:pt-0 2xl:pt-8 pb-16">
            <div className="w-full flex flex-col sm:justify-none sm:items-start md:items-center md:justify-center lg:items-center lg:justify-center xl:items-center xl:justify-center">
                <HeaderText placeholder="💰 What Can You Earn?" className="text-center" />

                {/* Tab Navigation */}
                <div className="flex overflow-x-auto whitespace-nowrap gap-4 md:gap-8 lg:gap-8 xl:gap-8 mb-10 md:mb-10 lg:mb-0 xl:mb-10 2xl:mb-10 mt-4 scrollbar-hide overscroll-none touch-pan-x">
                    {rewards.map((reward, index) => (
                        <button
                            key={index}
                            className={`px-4 md:px-4 lg:px-2 xl:px-4 2xl:px-4 py-2 rounded-lg transition text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base  ${activeTab === index
                                ? "bg-primary text-white"
                                : "bg-transparent text-primary"
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {reward.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
            >
                <div className="w-12/12 h-[22rem] md:h-[22rem] lg:h-[22rem] xl:h-[28rem] 2xl:h-[36rem]">
                    <Lottie animationData={rewards[activeTab].animations} loop={true} style={{ width: '100%', height: '100%' }} />
                </div>
                <p className="text-lg md:text-base lg:text-base xl:text-lg 2xl:text-lg">{rewards[activeTab].description}</p>
            </motion.div>

            {/* Call to Action */}
            <div className="w-full flex justify-center items-center mt-10 lg:mt-3 xl:mt-10 2xl:mt-10">
                <SecondaryButton primary={true} placeholder="Start Earning Rewards">
                    <MdOutlineArrowForward className="text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl text-white" />
                </SecondaryButton>
            </div>
        </section>
    );
}
