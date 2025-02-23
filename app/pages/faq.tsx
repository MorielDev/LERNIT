"use client";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { MdOutlineArrowForward } from "react-icons/md";
import HeaderText from "../components/Text/HeaderText";
import { faqs } from "../data/arrays";


export default function FAQ() {
    return (
        <section className="bg-backgroundColor px-4 md:px-10 lg:px-10 xl:px-20 2xl:px-20 h-screen flex flex-col justify-evenly items-center pt-0 pb-16">
            <HeaderText placeholder="🧐 Got Questions?" className="text-center"/>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10 mt-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-mutedGray border-b-0.5 w-full">
                        <div className="w-full flex flex-row gap-4 py-6">
                            <div className="rounded-xl h-14 w-14 flex items-center justify-center">
                                <span className="text-lg">📌</span>
                            </div>
                            <div className="w-full px-2 h-14 flex flex-col justify-center">
                                <h1 className="text-black text-sm md:text-base lg:text-base xl:text-base 2xl:text-base font-semibold">{faq.question}</h1>
                                <h1 className="text-mutedGray text-xs md:text-base lg:text-xs xl:text-sm 2xl:text-base font-light text-sm">{faq.answer}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="w-full flex justify-center items-center mt-5 md:mt-0 lg:mt-5 xl:mt-0 2xl:mt-0">
                <SecondaryButton primary={true} placeholder="📌 Still Have Questions? Contact Us">
                    <MdOutlineArrowForward className="text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl text-white" />
                </SecondaryButton>
            </div>
        </section>
    );
}
