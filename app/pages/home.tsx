import PrimaryButton from "../components/Buttons/PrimaryButton";
import GamifiedHook from "../components/gamiefiedContent/gamiefied";
import Image from "next/image";
import LottieAnimation from "../components/animations/LottieAnimation";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import HeaderText from "../components/Text/HeaderText";
import SubHeaderText from "../components/Text/SubHeaderText";

export default function HomeSection() {
  return (
    <div className="bg-backgroundColor flex flex-row justify-center gap-6 items-center w-full h-screen flex-1 px-20">
      <div className="flex flex-col gap-6 w-7/12 mb-14">
        <div className="w-full flex flex-col gap-6 text-left">
          <HeaderText placeholder="Earn Crypto While You Study: Turn Procrastination into Profit!" />
          <SubHeaderText placeholder="Get rewarded with EDU Coins for hitting your study goals. Verified by AI." />
          <SubHeaderText placeholder="No gimmicks—just real rewards for real effort." />
        </div>
        <div className="">
          <GamifiedHook />
        </div>
        <div className="flex flex-row justify-start items-center gap-6">
          <SecondaryButton placeholder="Join the Waitlist" primary={true}>
            <MdOutlineArrowOutward className="text-xl" />
          </SecondaryButton>
          <SecondaryButton placeholder="Download the App" primary={false}>
            <BsDownload className="text-xl" />
          </SecondaryButton>
        </div>
      </div>
      <div className="w-5/12 h-screen mb-20">
        <LottieAnimation />
      </div>
    </div>
  );
}
