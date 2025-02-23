"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "../logo/logo";
import SecondaryButton from "../Buttons/SecondaryButton";
import { MdOutlineArrowForward, MdOutlineArrowOutward } from "react-icons/md";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Header() {
    const [selected, setSelected] = useState<string>("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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
        setIsMobileMenuOpen(false); // Close mobile menu on click
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
        <header className="bg-backgroundColor border-gray-200 fixed top-0 z-50 w-full">
            <nav className="flex items-center justify-between p-4 px-6 md:px-20">
                {/* Logo */}
                <Link href="/" className="w-40 md:w-80">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-12">
                    {NavigationContent.map((content, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(content.link)}
                            className={`text-base font-medium transition-colors duration-300 ${selected === content.link
                                    ? "text-primary"
                                    : "text-black hover:text-primary"
                                }`}
                        >
                            {content.title}
                        </button>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="hidden md:flex space-x-3">
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
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 w-10 h-10"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-backgroundColor shadow-lg flex flex-col items-center space-y-6 p-6 md:hidden">
                        {NavigationContent.map((content, index) => (
                            <button
                                key={index}
                                onClick={() => handleScroll(content.link)}
                                className={`text-lg font-medium ${selected === content.link ? "text-primary" : "text-black"
                                    }`}
                            >
                                {content.title}
                            </button>
                        ))}

                        {/* Mobile Action Buttons */}
                        <SecondaryButton placeholder="Join the Waitlist" primary={false}>
                            <MdOutlineArrowOutward className="text-xl" />
                        </SecondaryButton>
                        <SecondaryButton placeholder="Sign In" primary={true}>
                            <MdOutlineArrowForward className="text-xl" />
                        </SecondaryButton>
                    </div>
                )}
            </nav>
        </header>
    );
}
