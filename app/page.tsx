import Header from "./components/Navigation/Navigation";
import HomeSection from "./pages/home";
import './globals.css';
import HowITWorks from "./pages/how-it-works";
import Rewards from "./pages/rewards";
import Testimonials from "./pages/testimonials";
import FAQ from "./pages/faq";
import Footer from "./pages/footer";


export default function Home() {
  return (
    <div className="">
      <Header />
      <HomeSection />
      <HowITWorks />
      <Rewards />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
