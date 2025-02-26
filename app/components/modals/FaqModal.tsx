import { ModalProps } from "@/app/data/list";
import CloseButton from "../Buttons/CloseButton";
import HeaderText from "../Text/HeaderText";
import SubHeaderText from "../Text/SubHeaderText";
import Input from "../Forms/Input";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function FaqModal({ setOpen }: ModalProps) {
  return (
    <div className="relative p-4 w-full max-w-md max-h-full">
      <div className="relative p-4 bg-white rounded-lg shadow-sm ">
        <div className="flex items-center justify-between p-4 md:p-5 ">
          <HeaderText placeholder="We're Here to Help!" />
          <CloseButton setOpen={setOpen} />
        </div>
        <div className="mt-2 ">
          <SubHeaderText placeholder="🧐 Have a question? Our team will get back to you within 24 hours." />
        </div>
        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#">
            <Input label="Name" inputTitle="Enter Your Name" type="name" />
            <Input
              label="Your email"
              inputTitle="Enter Your Email"
              type="email"
            />
            <Input label="Question" inputTitle="What is your question" type="textarea" />
            <div className="flex justify-between">
            </div>
            <div className="flex flex-row justify-center items-center gap-6">
              <PrimaryButton placeholder="Submit Inquiry →" primary />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
