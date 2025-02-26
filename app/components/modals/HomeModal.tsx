import { ModalProps } from "@/app/data/list";
import CloseButton from "../Buttons/CloseButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import Input from "../Forms/Input";
import HeaderText from "../Text/HeaderText";

export default function HomeModal({ setOpen }: ModalProps) {
  return (
    <div className="relative p-4 w-full max-w-md max-h-full">
      <div className="relative bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between p-4 md:p-5">
          <HeaderText placeholder="Sign in to our platform" />
          <CloseButton setOpen={setOpen} />
        </div>
        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#">
            <Input label="Name" inputTitle="Enter Your Name" type="name" />
            <Input
              label="Your email"
              inputTitle="Enter Your Email"
              type="email"
            />
            <Input label="Your Study Goal" inputTitle="StudyGoal" type="drop" />
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 "
                >
                  I agree to receive updates via email.
                </label>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-6">
              <PrimaryButton placeholder="Join Now →" primary />
            </div>
            <div className="text-sm font-medium text-center cursor text-gray-500 dark:text-gray-300">
              Not registered?{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
