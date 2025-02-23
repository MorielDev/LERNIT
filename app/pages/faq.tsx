"use client";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { MdOutlineArrowForward } from "react-icons/md";


const faqs = [
    {
        question: "How does Proof-of-Study work?",
        answer: "AI analyzes screen activity, such as eye tracking and scroll speed, to ensure active engagement during online study sessions. For offline work, users can provide evidence through time-lapse videos or peer reviews.",
    },
    {
        question: "What subjects can I study?",
        answer: "You can study any subject you like! Whether it's computer programming, mathematics, language learning, or even creative arts, our AI system is designed to track your study progress.",
    },
    {
        question: "How do I track my study time?",
        answer: "Our platform automatically monitors your study sessions through advanced AI tracking mechanisms. For online activities, the AI analyzes your on-screen interactions in real-time.",
    },
    {
        question: "How many EDU Coins can I earn per day?",
        answer: "You can earn 10 EDU Coins for every active study hour you complete. Additionally, you can unlock bonus coins by maintaining study streaks or successfully completing quizzes.",
    },
    {
        question: "Is my study data private?",
        answer: "Absolutely! We place the highest priority on your privacy and security. All user data is encrypted and stored securely, with access restricted to essential verification processes.",
    },
    {
        question: "How do streaks work?",
        answer: "Streaks are built by studying consistently on consecutive days. For instance, maintaining a 7-day study streak earns you additional EDU Coins and exclusive digital badges.",
    },
];

export default function FAQ() {
    return (
        <section className="bg-backgroundColor px-20 h-screen flex flex-col justify-evenly items-center">
            <h2 className="text-4xl font-bold text-center text-darkGray">
                🧐 Got Questions?
            </h2>

            <div className="w-full grid grid-cols-2 gap-10">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-mutedGray border-b-0.5 w-full">
                        <div className="w-full flex flex-row gap-4 py-6">
                            <div className="rounded-xl h-14 w-14 flex items-center justify-center">
                                <span className="text-lg">📌</span>
                            </div>
                            <div className="w-full px-2 h-14 flex flex-col justify-center">
                                <h1 className="text-black font-semibold">{faq.question}</h1>
                                <h1 className="text-mutedGray font-light text-sm">{faq.answer}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="w-full flex justify-center items-center">
                <SecondaryButton primary={true} placeholder="📌 Still Have Questions? Contact Us">
                    <MdOutlineArrowForward className="text-xl text-white" />
                </SecondaryButton>
            </div>
        </section>
    );
}
