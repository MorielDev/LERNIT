import Image from "next/image";

export default function ToolsPotential() {
  const benefits1 = [
    "Continuous integration and deployment",
    "Development workflow",
    "Knowledge management",
  ];
  return (
    <div className='flex mx-[5rem]'>
      <div className="">
        <h2 className="text-[#111928] text-[2.25rem] font-extrabold">Work with tools you already use</h2>
        <p className="w-[38rem]">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>

        <hr />

        <ul className="text-[#6B7280] text-center space-y-[1.125rem]">
          {benefits1.map((benefit1, index) => (
            <li key={index} className="flex items-center gap-[0.625rem]">
              <Image
                src="/check-circle.svg"
                height={20}
                width={20}
                alt="check"
              />
              {benefit1}
            </li>
          ))}
        </ul>

        <p>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
      </div>

      <div className="">
        <Image width={598} height={435} src='/features-1 1.png' alt='he' />
      </div>
    </div>
  );
}
