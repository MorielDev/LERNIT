"use client";

import { motion } from "framer-motion";
import { earnAnimation, goalAnimation, studyAnimation } from '../components/animations/animations';
import Lottie from "lottie-react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CTAButton from "../components/Buttons/CTAButton";
import { steps } from "../data/arrays";



export default function HowItWorks() {
    return (
        <section className="bg-backgroundColor min-h-screen pt-8 pb-16 px-4 md:px-10 lg:px-10 xl:pr-0 xl:pl-20 2xl:px-20">
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-darkGray text-center"
            >
                From Study to Crypto in 4 Steps
            </motion.h1>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-20 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 flex justify-between w-full">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-row flex-wrap-reverse md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap items-center"
                    >
                        <div className="text-center w-6/6 md:w-4/6 lg:w-4/6 xl:w-4/6 2xl:w-4/6 md:text-left">
                            <h2 className="text-md md:text-md lg:text-base xl:text-base 2xl:text-xl font-semibold text-darkGray">{`Step ${index + 1} - ${step.title}`}</h2>
                            <p className="text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-lg text-mutedGray mt-2">{step.description}</p>
                        </div>

                        <div className="w-6/6 md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 flex justify-center">
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
