'use client'

import Header from "./components/Navigation/Navigation";
import HomeSection from "./pages/home";
import './globals.css';
import HowITWorks from "./pages/how-it-works";
import Rewards from "./pages/rewards";
import Testimonials from "./pages/testimonials";
import FAQ from "./pages/faq";
import Footer from "./pages/footer";
import { useState } from "react";


export default function Home() {
  const [type, setType] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="">
      <Header />
      <div id="home">
        <HomeSection open={open} setOpen={setOpen} type={type} setType={setType} />
      </div>
      <div id="howitworks">
        <HowITWorks />
      </div>
      <div id="rewards">
        <Rewards />
      </div>
      <div id="testimonials">
        <Testimonials setOpen={setOpen} setType={setType} />
      </div>
      <div id="faq">
        <FAQ setOpen={setOpen} setType={setType} />
      </div>
      <Footer />
    </div>
  );
}
