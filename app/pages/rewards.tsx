"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const rewards = [
    {
        title: "💵 Cash",
        description: "Withdraw via Opay, PayPal, or bank transfer.",
        image: "/images/cash-reward.png",
    },
    {
        title: "🛍️ Discounts",
        description: "20% off Jumia, free MTN data bundles, Coursera coupons.",
        image: "/images/discounts.png",
    },
    {
        title: "🎖️ NFTs & Certifications",
        description: "Earn tradeable NFTs like 'Blockchain Basics' after 30 hours.",
        image: "/images/nft-reward.png",
    },
    {
        title: "🔥 Gamification",
        description:
            "Compete on the leaderboard and unlock badges like 'Weekend Warrior'.",
        image: "/images/gamification.png",
    },
];

export default function Rewards() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[#f5f5f0] text-[#452B1F] py-12 px-6">
            <h2 className="text-4xl font-bold text-center mb-8">💰 What Can You Earn?</h2>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-8 mb-10">
                {rewards.map((reward, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-lg transition ${activeTab === index
                                ? "bg-[#8B4513] text-white"
                                : "bg-transparent text-[#452B1F]"
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
                <img
                    src={rewards[activeTab].image}
                    alt={rewards[activeTab].title}
                    className="w-full max-w-md mx-auto mb-6"
                />
                <p className="text-lg">{rewards[activeTab].description}</p>
            </motion.div>

            {/* Call to Action */}
            <div className="flex justify-center mt-12">
                <button className="bg-[rgba(67,97,238,1)] text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all">
                    Start Earning Rewards →
                </button>
            </div>
        </section>
    );
}
