"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "../logo/logo";
import SecondaryButton from "../Buttons/SecondaryButton";
import { MdOutlineArrowForward, MdOutlineArrowOutward } from "react-icons/md";

export default function Header() {
    const [selected, setSelected] = useState<string>("Home");

    const NavigationContent = [
        { title: "Home", link: "#home" },
        { title: "How It Works", link: "#howitworks" },
        { title: "Rewards", link: "#rewards" },
        { title: "Testimonials", link: "#testimonials" },
        { title: "FAQ", link: "#faq" },
    ];
    

    // Handle smooth scrolling and active link
    const handleScroll = (id: string) => {
        setSelected(id);
        const section = document.querySelector(id);
        if (section) {
            window.scrollTo({
                top: section.getBoundingClientRect().top + window.pageYOffset - 80,
                behavior: "smooth",
            });
        }
    };

    // Detect scroll position to update active link
    useEffect(() => {
        const onScroll = () => {
            NavigationContent.forEach((content) => {
                const section = document.querySelector(content.link);
                if (section) {
                    const { top } = section.getBoundingClientRect();
                    if (top <= 100 && top >= -100) {
                        setSelected(content.link);
                    }
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div>
            <header className="bg-backgroundColor border-gray-200 fixed top-0 z-50 w-full">
                <nav className="w-full flex flex-wrap items-center justify-between p-4 px-20">
                    <Link href="/" className="w-80">
                        <Logo />
                    </Link>

                    {/* Navigation Links */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex space-x-12 font-medium text-sm">
                            {NavigationContent.map((content, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleScroll(content.link)}
                                    className={`py-2 px-3 text-base font-medium rounded-sm transition-colors duration-300 ${selected === content.link
                                            ? "text-primary"
                                            : "text-black hover:text-primary"
                                        }`}
                                >
                                    {content.title}
                                </button>
                            ))}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex md:order-2 space-x-3">
                        <div className="w-80 flex">
                            <SecondaryButton placeholder="Join the Waitlist" primary={false}>
                                <MdOutlineArrowOutward className="text-xl" />
                            </SecondaryButton>
                            <SecondaryButton placeholder="Sign In" primary={true}>
                                <MdOutlineArrowForward className="text-xl" />
                            </SecondaryButton>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 md:hidden"
                            aria-label="Open main menu"
                        >
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
}
