import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';

interface CTAButtonProps {
    placeholder: React.ReactNode;
}

export default function CTAButton({ placeholder }: CTAButtonProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
        >
            <a
                href="/signup"
                className="flex flex-row gap-2 bg-primary text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-primary transition duration-300"
            >
                {placeholder}
                <MdOutlineArrowForward className="text-xl" />
            </a>
        </motion.div>
    );
}