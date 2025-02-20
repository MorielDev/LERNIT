import Image from "next/image";

export default function Content2() {
  return (
    <div className="bg-[#F9FAFB] h-[22.6875rem] space-y-[1.5rem] flex flex-col items-center justify-center">
      <h2 className="text-[#111928] font-extrabold text-[2.25rem]">Start your free trial today</h2>

      <p className="text-[#111928] w-[48rem]">&quot;Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.&quot;</p>

      <div className="flex">
        <Image src='/Avatar.png'
        width={24}
        height={24}
        alt='avatar'
        />
        <p className="ml-[0.875rem]">Micheal Gough <span className="ml-[0.75rem]">/</span> <span className="ml-[0.75rem] text-[#6B7280]">CEO at Google</span></p>
      </div>
    </div>
  );
}