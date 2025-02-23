"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdOutlineArrowForward } from "react-icons/md";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import HeaderText from "../components/Text/HeaderText";
import { testimonials } from "../data/arrays";


export default function Testimonials() {
    return (
        <section className="bg-backgroundColor px-4 md:px-8 lg:px-8 xl:px-8 2xl:px-8 flex flex-col justify-evenly items-center h-screen pt-8 pb-16">
            <HeaderText placeholder="🗣️ From Procrastinators to Earners" className="text-center" />

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full flex justify-center items-center"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="w-full flex justify-center items-center"
                    >
                        {/* {item.video ? (
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="flex flex-col shadow-xl items-center justify-center rounded-2xl p-6 w-3/6 h-96 bg-white mb-12">
                                    <p className="text-lg italic">{item.quote}</p>
                                    <video
                                        src={item.video}
                                        controls
                                        className="rounded-lg w-full h-full"
                                    />
                                </div>
                            </div>
                        ) : ( */}
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className="flex flex-col items-center justify-center shadow-xl rounded-2xl p-6 px-14 w-6/6 md:w-3/6 lg:w-3/6 xl:w-3/6 h-96 md:h-80 lg:h-80 xl:h-96 2xl:h-96 bg-white mb-12">
                                <p className="text-sm md:text-base lg:text-sm xl:text-lg 2xl:text-lg italic text-darkGray text-center mb-4">"{item.quote}"</p>
                                <div className="w-16 h-16 rounded-full">
                                    <img
                                        src={item.image}
                                        alt={item.author}
                                        className="rounded-full w-full h-full object-cover"
                                    />
                                </div>
                                <p className="font-semibold text-primary">{item.author}</p>
                                {item.university && (
                                    <p className="text-sm text-darkGray">{item.university}</p>
                                )}
                            </div>
                        </div>
                        {/* }) */}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Call to Action */}
            <div className="w-full flex justify-center items-center mt-12">
                <SecondaryButton primary={true} placeholder="📌 Join 12,345+ Happy Learners">
                    <MdOutlineArrowForward className="text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl text-white" />
                </SecondaryButton>
            </div>
        </section>
    );
}