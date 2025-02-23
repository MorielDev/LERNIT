import Header from "./components/Navigation/Header";
import HomeSection from "./pages/home";
import Content from "./components/Content";
import './globals.css';
import Content2 from "./components/Content2";
import Plan from "./components/Plan";
import CustomerLogo from "./components/CustomerLogo";
import ToolsPotential from "./components/ToolsPotential";
import Trust from "./components/Trust";
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
      <HowITWorks/>
      <Rewards/>
      <Testimonials/>
      <FAQ/>
      <Footer />
    </div>
  );
}
