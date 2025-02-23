"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import cash from "../../public/animations/cash.json";
import discount from "../../public/animations/discount.json";
import nft from "../../public/animations/cash.json";
import gamification from "../../public/animations/gamification.json";
import Lottie from "lottie-react";
import { MdOutlineArrowForward } from "react-icons/md";

const rewards = [
    {
        title: "💵 Cash",
        description: "Withdraw via Opay, PayPal, or bank transfer.",
        animations: cash,
    },
    {
        title: "🛍️ Discounts",
        description: "20% off Jumia, free MTN data bundles, Coursera coupons.",
        animations: discount,
    },
    {
        title: "🎖️ NFTs & Certifications",
        description: "Earn tradeable NFTs like 'Blockchain Basics' after 30 hours.",
        animations: cash,
    },
    {
        title: "🔥 Gamification",
        description:
            "Compete on the leaderboard and unlock badges like 'Weekend Warrior'.",
        animations: gamification,
    },
];

export default function Rewards() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-backgroundColor py-12 px-6 h-screen w-full">
            <h2 className="text-3xl font-bold text-darkGray text-center mb-8">💰 What Can You Earn?</h2>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-8 mb-10">
                {rewards.map((reward, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-lg transition ${activeTab === index
                            ? "bg-primary text-white"
                            : "bg-transparent text-primary"
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {reward.title}
                    </button>
                ))}
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
                <div className="w-12/12 h-[36rem]">
                    <Lottie animationData={rewards[activeTab].animations} loop={true} style={{ width: '100%', height: '100%' }} />
                </div>
                <p className="text-lg">{rewards[activeTab].description}</p>
            </motion.div>

            {/* Call to Action */}
            <div className="w-full flex justify-center items-center mt-10">
                <SecondaryButton primary={true} placeholder="Start Earning Rewards">
                    <MdOutlineArrowForward className="text-xl text-white" />
                </SecondaryButton>
            </div>
        </section>
    );
}
