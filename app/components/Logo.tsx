import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse ">
      <Image
        src="/logo.svg"
        height={32.619998931884766}
        width={29.762178421020508}
        alt="logo"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap ">
        Landing Wind
      </span>
    </div>
  );
}
