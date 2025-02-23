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
      <div id="home">
        <HomeSection />
      </div>
      <div id="howitworks">
        <HowITWorks />
      </div>
      <div id="rewards">
        <Rewards />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
