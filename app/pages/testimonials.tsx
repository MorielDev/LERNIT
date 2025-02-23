"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdOutlineArrowForward } from "react-icons/md";
import SecondaryButton from "../components/Buttons/SecondaryButton";

const testimonials = [
    {
        quote: "I paid my WiFi bill with EDU Coins—while prepping for finals! It felt amazing to earn while studying and not worry about expenses. The platform makes it incredibly easy to focus on my studies while knowing that each session brings me closer to covering my everyday needs. It's like a win-win situation for any student looking to stay productive and financially secure.",
        author: "Tunde Adebayo",
        university: "University of Lagos",
        image: "https://images.unsplash.com/photo-1551692703-f4941f2f0f6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "The AI stops me from scrolling Instagram. Now I study AND earn! It's like having a personal tutor that keeps me on track and rewards my focus. I've tried many productivity apps, but nothing compares to this experience. It feels empowering to convert my study hours into tangible rewards, giving me extra motivation to stay committed and disciplined.",
        author: "Ada Obi",
        university: "University of Benin",
        image: "https://images.unsplash.com/photo-1533108344127-a586d2b02479?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // {
    //     quote: "Watch how easy it is to redeem rewards!",
    //     video: "https://www.w3schools.com/html/mov_bbb.mp4",
    // },
    {
        quote: "I never thought studying could pay off like this. I covered my semester's textbooks using the rewards I earned from consistent study sessions. With every focused session, I feel more accomplished—not just academically but financially too. This platform has transformed the way I view learning and made me more disciplined in my academic pursuits.",
        author: "Emeka Okonkwo",
        university: "Veritas University",
        image: "https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "Being a medical student is tough, but knowing I can earn while revising makes the journey a little easier and a lot more fun! The ability to turn study hours into meaningful rewards is a game-changer. It has relieved some of the financial stress that comes with being a student and encouraged me to stay focused on my long-term goals.",
        author: "Zainab Yusuf",
        university: "Nile University",
        image: "https://images.unsplash.com/photo-1529663557617-39f3243b531a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "Balancing academics and finances was hard, but now I pay for my monthly subscriptions by simply studying smarter. This platform has changed my perspective on how to manage time effectively. It's more than just earning—it’s about building a habit of consistent learning while easing the financial burden of being a student.",
        author: "Ife Adeyemi",
        university: "Baze University",
        image: "https://images.unsplash.com/photo-1552493450-2b5ce80ed13f?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-backgroundColor py-16 px-8 flex flex-col justify-evenly items-center h-screen">
            <h2 className="text-3xl font-bold text-center text-darkGray mb-12">
                🗣️ From Procrastinators to Earners
            </h2>

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
                            <div className="flex flex-col items-center justify-center shadow-xl rounded-2xl p-6 px-14 w-3/6 h-96 bg-white mb-12">
                                <p className="text-lg italic text-darkGray text-center mb-4">"{item.quote}"</p>
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
                    <MdOutlineArrowForward className="text-xl text-white" />
                </SecondaryButton>
            </div>
        </section>
    );
}