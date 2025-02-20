import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";
import Content from "./components/Content";
import './globals.css';
import Content2 from "./components/Content2";
import Plan from "./components/Plan";
import CustomerLogo from "./components/CustomerLogo";
import ToolsPotential from "./components/ToolsPotential";
import Trust from "./components/Trust";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HomeSection />
      <CustomerLogo />
      <ToolsPotential />
      <Trust />
      <Content2 />
      <Plan />
      <Content />
      <Footer />
    </div>
  );
}
