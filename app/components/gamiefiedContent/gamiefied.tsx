"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function GamifiedHook() {
    const [studentCount, setStudentCount] = useState(12345);
    const [studyHours, setStudyHours] = useState(5);
    const [eduCoins, setEduCoins] = useState(50);
    const controls = useAnimation();

    // Live Counter Animation
    useEffect(() => {
        const interval = setInterval(() => {
            setStudentCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
            controls.start({ scale: [1, 1.2, 1], transition: { duration: 0.5 } });
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    }, [controls]);

    const handleHoursChange = (e: any) => {
        const hours = parseInt(e.target.value, 10) || 0;
        setStudyHours(hours);
        setEduCoins(hours * 10);
    };

    return (
        <div className="flex flex-col items-start py-6 bg-backgrouncColor">
            <motion.div animate={controls} className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold text-primary">
                🎓 Join {studentCount.toLocaleString()}+ students already earning!
            </motion.div>

            {/* Interactive Calculator */}
            <div className="mt-4 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8 w-full max-w-lg">
                <label htmlFor="hours" className="block text-lg md: font-medium text-darkGray mb-4">
                    How many hours do you study per week?
                </label>
                <input
                    type="range"
                    id="hours"
                    min="1"
                    max="50"
                    value={studyHours}
                    onChange={handleHoursChange}
                    className="w-full cursor-pointer"
                />
                <p className="mt-4 text-lg text-darkGray">
                    📊 Study {studyHours} hours/week = Earn <strong>{eduCoins} EDU Coins/month</strong>
                </p>
            </div>
        </div>
    );
}