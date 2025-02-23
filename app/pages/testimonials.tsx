"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdOutlineArrowForward } from "react-icons/md";
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
    return (
        <section className="bg-[#f5f5f0] py-16 px-8 flex flex-col justify-center items-center h-screen">
            <h2 className="text-4xl font-bold text-center text-[#452B1F] mb-12">
                🗣️ From Procrastinators to Earners
            </h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full flex justify-center"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        {item.video ? (
                            <div className="p-6 bg-white w-6/12 rounded-2xl shadow-lg text-center">
                                <p className="text-lg italic mb-4">{item.quote}</p>
                                <video
                                    src={item.video}
                                    controls
                                    className="rounded-lg w-full"
                                />
                            </div>
                        ) : (
                            <div className="p-6 bg-white w-6/12 shadow-lg rounded-2xl flex flex-col justify-center items-center">
                                <p className="text-lg italic mb-4">"{item.quote}"</p>
                                <p className="font-semibold text-[#8B4513]">{item.author}</p>
                                <img
                                    src={item.image}
                                    alt={item.author}
                                    className="rounded-lg mt-4 w-full"
                                />
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Call to Action */}
            <div className="w-full flex justify-center items-center mt-10">
                <SecondaryButton primary={true} placeholder="📌 Join 12,345+ Happy Learners">
                    <MdOutlineArrowForward className="text-xl text-white" />
                </SecondaryButton>
            </div>
        </section>
    );
}
