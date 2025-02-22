"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import SecondaryButton from "./Buttons/SecondaryButton";

const faqs = [
  {
    question: "How does Proof-of-Study work?",
    answer:
      "AI analyzes screen activity (eye tracking, scroll speed) and cross-checks with peer reviews for offline sessions.",
  },
  {
    question: "Can I study offline?",
    answer: "Yes! Submit time-lapse videos for peer verification.",
  },
  {
    question: "What’s the catch?",
    answer: "None. We partner with brands to fund rewards—you focus on studying!",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f0] py-16 px-20">
      <h2 className="text-4xl font-bold text-center text-[#452B1F] mb-12">
        🧐 Got Questions?
      </h2>

      <div className="w-full space-y-6 grid grid-cols-2 gap-4 flex justify-between gap-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-mutedGray border-b-0.5 w-full">
            <div className="w-full border-b-[#eaece3] border-b flex flex-row gap-4 py-6">
              <div className="rounded-xl h-14 w-14 bg-white flex items-center justify-center">
                <span className="text-lg font-semibold text-[#452B1F]">
                  📌
                </span>
              </div>
              <div key={index} className="w-full px-2 h-14 flex flex-col justify-center">
                <div className="flex flex-col justify-between h-14 py-1">
                  <h1 className="text-black"><span className="font-semibold">{faq.question}</span></h1>
                  <h1 className="text-[#aaaaaa] font-light text-sm">{faq.answer}</h1>
                </div>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.42, 0, 0.58, 1], // Smooth cubic bezier curve
                  }}
                  className="py-4 text-[#452B1F]"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="w-full flex justify-center items-center mt-10">
        <SecondaryButton primary={true} placeholder="📌 Still Have Questions? Contact Us">
          <IoIosArrowRoundForward className="text-xl text-white" />
        </SecondaryButton>
      </div>
    </section>
  );
}
