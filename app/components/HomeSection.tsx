import Image from "next/image";
import Button from "./Button";

export default function HomeSection() {
  return (
    <div className="flex justify-between items-center mx-[5rem] my-[4rem] ">
      <div className="max-w-fit flex flex-col gap-[2.5rem]">
        <h1 className="text-[3.75rem]/[4rem] font-black">
          Building digital
          <br /> products & brands.
        </h1>
        <p className="text-[#6B7280]">
          Here at flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div className="space-x-4">
          <Button primary={true}>Get Started</Button>
          <Button primary={false}>Pricing & FAQ</Button>
        </div>
      </div>

      <div className="w-[448px] ">
        <Image
          src="/Right Content.svg"
          height={450}
          width={532}
          alt="Right Content"
        />
      </div>
    </div>
  );
}
