"use client";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
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
];

export default function Testimonials() {
    return (
        <section className="bg-[#f5f5f0] py-16 px-8">
            <h2 className="text-4xl font-bold text-center text-[#452B1F] mb-12">
                🗣️ From Procrastinators to Earners
            </h2>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        className="bg-white p-6 rounded-2xl shadow-lg"
                    >
                        <p className="text-lg italic mb-4">"{item.quote}"</p>
                        <p className="font-semibold text-[#8B4513]">{item.author}</p>
                        <img
                            src={item.image}
                            alt={item.author}
                            className="rounded-lg mt-4"
                        />
                    </motion.div>
                ))}

                {/* Video Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                >
                    <p className="text-lg italic mb-4">
                        "Watch how easy it is to redeem rewards!"
                    </p>
                    <video
                        src="/videos/jumia-redemption.mp4"
                        controls
                        className="rounded-lg w-full"
                    />
                </motion.div>
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
