import { FaDiscord, FaDribbble, FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";
import Logo from "../components/logo/logo";

const footerSections = [
    {
        title: "Company",
        links: [
            { name: "How It Works", href: "#" },
            { name: "Rewards", href: "#" },
            { name: "Testimonials", href: "#" },
            { name: "FAQ", href: "#" },
        ],
    },
    {
        title: "Help center",
        links: [
            { name: "Discord Server", href: "#" },
            { name: "Twitter", href: "#" },
            { name: "Facebook", href: "#" },
            { name: "Contact Us", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "#" },
            { name: "Licensing", href: "#" },
            { name: "Terms & Conditions", href: "#" },
        ],
    },
    {
        title: "Download",
        links: [
            { name: "iOS", href: "#" },
            { name: "Android", href: "#" },
        ],
    },
];

const socialIcons = [
    { icon: FaFacebook, label: "Facebook page", href: "#" },
    { icon: FaDiscord, label: "Discord community", href: "#" },
    { icon: FaXTwitter, label: "Twitter page", href: "#" },
    { icon: FaGithub, label: "GitHub account", href: "#" },
    { icon: FaDribbble, label: "Dribbble account", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-backgroundColor">
            <div className="mx-auto w-full flex flex-col justify-center items-center max-w-screen-xl">
                <div className="grid grid-cols-2 gap-24 px-4 py-6 lg:py-8 md:grid-cols-4">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                {section.title}
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                {section.links.map((link) => (
                                    <li className="mb-4" key={link.name}>
                                        <a href={link.href} className="hover:underline">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="px-4 py-6 w-full md:flex md:items-center md:flex-col space-y-5 rtl:space-y-reverse">
                    <Logo />
                    <span className="text-sm text-mutedGray sm:text-center">
                        © 2025 <a href="#">Lernit™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        {socialIcons.map(({ icon: Icon, label, href }, index) => (
                            <a key={index} href={href} className="text-gray-400 hover:text-primary">
                                <Icon className="text-xl" />
                                <span className="sr-only">{label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
