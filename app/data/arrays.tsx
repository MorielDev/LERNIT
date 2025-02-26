import earnData from '../../public/animations/anim2.json';
import goalData from '../../public/animations/goal.json';
import studyData from '../../public/animations/study.json';
import redeemData from '../../public/animations/reward.json';
import cash from "../../public/animations/cash.json";
import discount from "../../public/animations/discount.json";
import gamification from "../../public/animations/gamification.json";
import { FaDiscord, FaDribbble, FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";


// Steps array
export const steps = [
    {
        title: "Set Goals",
        description: "Choose subjects (coding, math, etc.) and daily targets. Customize your study plan to match your learning style and pace. Track progress in real-time and adjust goals as you improve.",
        animation: goalData,
    },
    {
        title: "Study & Verify",
        description: "Use our app, offline time-lapse, or screen recording. AI confirms your effort by analyzing your study patterns and validating your focus. Peer reviews further ensure fairness and transparency.",
        animation: studyData,
    },
    {
        title: "Earn EDU Coins",
        description: "1 hour = 10 EDU Coins. Bonus coins for streaks and quizzes! Boost earnings with weekly challenges, group study sessions, and special events. The more you stay consistent, the more you earn.",
        animation: earnData
    },
    {
        title: "Redeem Rewards",
        description: "Cash out, grab discounts, or unlock NFTs. Your choice! Exchange EDU Coins for real-life benefits—gift cards, learning resources, and exclusive NFT badges that showcase your academic milestones.",
        animation: redeemData,
    },
];


//Rewards array
export const rewards = [
    {
        title: "💵 Cash",
        description: "Withdraw via Opay, PayPal, or bank transfer.",
        animations: cash,
    },
    {
        title: "🛍️ Discounts",
        description: "20% off Jumia, free MTN data bundles, Coursera coupons.",
        animations: discount,
    },
    {
        title: "🎖️ NFTs & Certifications",
        description: "Earn tradeable NFTs like 'Blockchain Basics' after 30 hours.",
        animations: cash,
    },
    {
        title: "🔥 Gamification",
        description:
            "Compete on the leaderboard and unlock badges like 'Weekend Warrior'.",
        animations: gamification,
    },
];

//Testimonial array
export const testimonials = [
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


//FAQ array
export const faqs = [
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

// Footer sections array
export const footerSections = [
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

//Social icons array
export const socialIcons = [
    { icon: FaFacebook, label: "Facebook page", href: "#" },
    { icon: FaDiscord, label: "Discord community", href: "#" },
    { icon: FaXTwitter, label: "Twitter page", href: "#" },
    { icon: FaGithub, label: "GitHub account", href: "#" },
    { icon: FaDribbble, label: "Dribbble account", href: "#" },
];
