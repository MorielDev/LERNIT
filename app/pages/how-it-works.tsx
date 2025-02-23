"use client";

import { motion } from "framer-motion";
import { earnAnimation, goalAnimation, studyAnimation } from '../components/animations/animations';
import Lottie from "lottie-react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CTAButton from "../components/Buttons/CTAButton";
import { steps } from "../data/arrays";



export default function HowItWorks() {
    return (
        <section className="bg-backgroundColor min-h-screen pt-8 pb-16 px-20">
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
