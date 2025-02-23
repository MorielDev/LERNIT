"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState, useEffect } from "react";
import SecondaryButton from "../components/Buttons/SecondaryButton";

const testimonials = [
    {
        quote: "I paid my WiFi bill with EDU Coins—while prepping for finals!",
        author: "Tunde, UNILAG",
        image: "/images/student-desk.png",
    },
    {
        quote: "The AI stops me from scrolling Instagram. Now I study AND earn!",
        author: "Ada, UNIBEN",
        image: "/images/student-phone.png",
    },
    {
        quote: "Watch how easy it is to redeem rewards!",
        video: "/videos/jumia-redemption.mp4",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Auto-play every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#f5f5f0] py-16 px-8 flex flex-col items-center h-screen">
            <h2 className="text-4xl font-bold text-center text-[#452B1F] mb-12">
                🗣️ From Procrastinators to Earners
            </h2>

            <div className="relative w-full overflow-hidden flex justify-center items-center">
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={index}
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        {testimonials[index].video ? (
                            <div className="p-6 bg-white w-6/12 rounded-2xl shadow-lg">
                                <p className="text-lg italic mb-4">{testimonials[index].quote}</p>
                                <video
                                    src={testimonials[index].video}
                                    controls
                                    className="rounded-lg w-full"
                                />
                            </div>
                        ) : (
                            <div className="p-6 bg-white w-6/12 shadow-lg rounded-2xl flex flex-col justify-center items-center">
                                <p className="text-lg italic mb-4">"{testimonials[index].quote}"</p>
                                <p className="font-semibold text-[#8B4513]">{testimonials[index].author}</p>
                                <img
                                    src={testimonials[index].image}
                                    alt={testimonials[index].author}
                                    className="rounded-lg mt-4"
                                />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Call to Action */}
            <div className="w-full flex justify-center items-center mt-10">
                <SecondaryButton primary={true} placeholder="📌 Join 12,345+ Happy Learners">
                    <IoIosArrowRoundForward className="text-xl text-white" />
                </SecondaryButton>
            </div>
        </section>
    );
}
