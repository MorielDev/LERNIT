import { ModalProps } from "@/app/data/list";
import CloseButton from "../Buttons/CloseButton";
import HeaderText from "../Text/HeaderText";
import Download from "../ui/Download";

export default function DownloadModal({ setOpen }: ModalProps) {
  return (
    <div className="relative p-4 w-full max-w-md max-h-full">
      <div className="relative bg-white rounded-lg shadow-sm ">
        <div className="flex items-center justify-between p-4 md:p-5 ">
          <HeaderText placeholder="Download Lernit & Start Earning Today!" />
          <CloseButton setOpen={setOpen} />
        </div>
        <div className="flex flex-col justify-center items-center p-4 md:p-5 gap-4">
          <div className="w-full flex justify-center items-center">
            <Download />
            {/* <LottieAnimation
              animationData={animationDataIOS}
              loop={true}
              width={"50%"}
              height={"50%"}
            />
            <LottieAnimation
              animationData={animationDataAndroid}
              loop={true}
              width={"50%"}
              height={"50%"}
            /> */}
          </div>

        </div>
      </div>
    </div>
  );
}
