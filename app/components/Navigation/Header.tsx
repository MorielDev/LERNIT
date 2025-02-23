"use client";

import Link from "next/link";
import Button from "../Button";
import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "../logo/logo";
import SecondaryButton from "../Buttons/SecondaryButton";
import { MdArrowBack, MdArrowBackIos, MdArrowForwardIos, MdOutlineArrowForward, MdOutlineArrowForwardIos, MdOutlineArrowOutward } from "react-icons/md";

export default function Header() {

    const [selected, isSelected] = useState<string>("");

    const NavigationContent = [
        { title: "Home", link: "#" },
        { title: "How It Works", link: "#" },
        { title: "Rewards", link: "#" },
        { title: "Testimonials", link: "#" },
        { title: "FAQ", link: "#" },
    ];

    return (
        <div>
            <header>
                <nav className="bg-backgroundColor border-gray-200 ">
                    <div className="w-full flex flex-wrap items-center justify-between p-4 px-20">
                        <Link
                            href="https://flowbite.com/"
                            className=""
                        >
                            <Logo />
                        </Link>
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-cta"
                        >
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-12 text-sm rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                                {NavigationContent.map((content, index) => (
                                    <Link
                                        key={index}
                                        href={content.link}
                                        className={`block py-2 px-3 md:p-0 font-medium rounded-sm md:bg-transparent ${selected ? "text-primary" : "text-black hover:text-primary"}`}
                                        aria-current="page"
                                    >
                                        {content.title}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <SecondaryButton placeholder="Join the Waitlist" primary={false}>
                                <MdOutlineArrowOutward className="text-xl" />
                            </SecondaryButton>
                            <SecondaryButton placeholder="Sign In" primary={true}>
                                <MdOutlineArrowForward className="text-xl" />
                            </SecondaryButton>
                            <button
                                data-collapse-toggle="navbar-cta"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-cta"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
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

                    </div>
                </nav>
            </header>
        </div>
    );
}