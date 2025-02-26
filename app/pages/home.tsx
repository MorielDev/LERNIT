"use client";

import GamifiedHook from "../components/gamiefiedContent/gamiefied";
import LottieAnimation from "../components/animations/LottieAnimation";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import HeaderText from "../components/Text/HeaderText";
import SubHeaderText from "../components/Text/SubHeaderText";
import HomeModal from "../components/modals/HomeModal";
import MainModal from "../components/modals/MainModal";
import DownloadModal from "../components/modals/DownloadModal";
import FaqModal from "../components/modals/FaqModal";
import animationData from "../../public/animations/anim.json";
import { ModalProps } from "../data/list";
import TestimonialModal from "../components/modals/TestimonialModal";

export default function HomeSection({ type, setType, open, setOpen }: ModalProps) {
  return (
    <>
      {open && (
        <MainModal open={open} setOpen={setOpen}>
          {type === "home" && <HomeModal open={open} setOpen={setOpen} />}
          {type === "download" && (
            <DownloadModal setOpen={setOpen} />
          )}
          {type === "faq" && <FaqModal open={open} setOpen={setOpen} />}
          {type === 'testimonials' && <TestimonialModal  setOpen={setOpen}/>}
        </MainModal>
      )}
      <div className="bg-backgroundColor flex flex-row flex-wrap-reverse md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap max-h-fit md:h-screen lg:h-screen xl:h-screen 2xl:h-screen justify-center gap-2 md:gap-6 lg:gap-6 xl:gap-6 items-start md:-items-center lg:items-center xl:items-center 2xl:items-center w-full flex-1 px-4 md:px-10 lg:px-10 xl:pr-0 xl:pl-20 2xl:px-20 pt-16 md:pt-20 lg:pt-20 xl:pt-20 2xl:pt-20 ">
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-6 w-12/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-7/12 mb-14">
          <div className="w-full flex flex-col gap-2 md:gap-3 lg:gap-3 xl:gap-4 2xl:gap-6 text-left">
            <HeaderText placeholder="Earn Crypto While You Study: Turn Procrastination into Profit!" />
            <div className="">
              <SubHeaderText placeholder="Get rewarded with EDU Coins for hitting your study goals. Verified by AI." />
              <SubHeaderText placeholder="No gimmicks—just real rewards for real effort." />
            </div>
          </div>
          <div className="">
            <GamifiedHook />
          </div>
          <div className="flex flex-row justify-start items-center gap-6">
            <SecondaryButton
              onClick={() => {
                setOpen(true);
                setType("home");
              }}
              placeholder="Join the Waitlist"
              primary={true}
            >
              <MdOutlineArrowOutward className="text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl" />
            </SecondaryButton>
            <SecondaryButton
              placeholder="Download the App"
              onClick={() => {
                setOpen(true);
                setType("download");
              }}
              primary={false}
            >
              <BsDownload className="text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl" />
            </SecondaryButton>
          </div>
        </div>
        <div className="w-12/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-5/12 h-96 md: lg:h-screen xl:h-screen 2xl:h-screen mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-20">
          <LottieAnimation
            animationData={animationData}
            loop={true}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </>
  );
}
