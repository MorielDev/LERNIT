"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import SecondaryButton from "../components/Buttons/SecondaryButton";


const faqs = [
    // Study & Verification Section
    {
        question: "How does Proof-of-Study work?",
        answer: "AI analyzes screen activity (eye tracking, scroll speed) and cross-checks with peer reviews for offline sessions.",
    },
    {
        question: "What subjects can I study?",
        answer: "Any subject! From coding and math to language learning—just stay focused and the AI tracks your effort.",
    },
    {
        question: "How do I track my study time?",
        answer: "Our AI monitors active study sessions and verifies offline work through time-lapse videos or peer reviews.",
    },

    // Earning & Rewards Section
    {
        question: "How many EDU Coins can I earn per day?",
        answer: "You earn 10 EDU Coins per study hour. Hit streaks and complete quizzes to unlock bonus coins!",
    },
    // Security & Privacy Section
    {
        question: "Is my study data private?",
        answer: "Yes! We prioritize privacy. Your data is encrypted and only used to verify your study sessions.",
    },
    // Achievements & Progress Section
    {
        question: "How do streaks work?",
        answer: "Study consistently to build streaks. A 7-day streak earns bonus EDU Coins and exclusive badges!",
    },
];


export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-backgroundColor py-16 px-20 h-screen">
            <h2 className="text-4xl font-bold text-center text-darkGray mb-12">
                🧐 Got Questions?
            </h2>

            <div className="w-full space-y-6 grid grid-cols-2 flex justify-between gap-20">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-mutedGray border-b-0.5 w-full">
                        <div className="w-full flex flex-row gap-4 py-6">
                            <div className="rounded-xl h-14 w-14 flex items-center justify-center">
                                <span className="text-lg">
                                    📌
                                </span>
                            </div>
                            <div key={index} className="w-full px-2 h-14 flex flex-col justify-center">
                                <div className="flex flex-col justify-between h-14 py-1">
                                    <h1 className="text-black"><span className="font-semibold">{faq.question}</span></h1>
                                    <h1 className="text-mutedGray font-light text-sm">{faq.answer}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="w-full flex justify-center items-center mt-20">
                <SecondaryButton primary={true} placeholder="📌 Still Have Questions? Contact Us">
                    <IoIosArrowRoundForward className="text-xl text-white" />
                </SecondaryButton>
            </div>
        </section>
    );
}
