import { ModalProps } from "@/app/data/list";

export default function MainModal({open, children}: ModalProps) {
  return (
    <div>
      {open && <div
        tabIndex={-1}
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0  max-h-full bg-darkGray/50"
      >
        {children}
      </div>}
    </div>
  );
}
