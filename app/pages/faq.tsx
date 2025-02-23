"use client";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { MdOutlineArrowForward } from "react-icons/md";
import HeaderText from "../components/Text/HeaderText";
import { faqs } from "../data/arrays";


export default function FAQ() {
    return (
        <section className="bg-backgroundColor px-20 h-screen flex flex-col justify-evenly items-center pt-8 pb-16">
            <HeaderText placeholder="🧐 Got Questions?"/>
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
