import Image from "next/image";
import Button from "./Button";

export default function Plan() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      desc: "Great for personal use and for your side projects.",
      benefits: [
        "Individual configuration",
        "No setup, monthly, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      name: "Company",
      price: "$99",
      desc: "Best for large scale uses and extended redistribution rights.",
      benefits: [
        "Individual configuration",
        "No setup, monthly, or hidden fees",
        "Team size: 10 developer",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
    },
    {
      name: "Enterprise",
      price: "$499",
      desc: "Best for large scale uses and extended redistribution rights.",
      benefits: [
        "Individual configuration",
        "No setup, monthly, or hidden fees",
        "Team size: 100+ developer",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ];
  return (
    <div className="my-24 mx-5 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-[#111928] text-[2.25rem] font-extrabold mb-4">
          Pay as you grow
        </h2>
        <p className="text-[#6B7280] text-center">
          Here at flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>

      <div className="flex gap-4 justify-center mt-8">
        {plans.map((plan, index) => (
          <div key={index} className=" border border-[#E5E7EB]max-w-[25rem]">
            <div className="m-8 flex space-y-4 flex-col items-center justify-center ">
              <h3 className="text-[#111928] text-[1.5rem] font-bold">
                {plan.name}
              </h3>
              <p className="text-[#6B7280] text-center text-[1.125rem]">
                {plan.desc}
              </p>
              <h4 className="text-[#111928] text-[3rem] font-bold">
                {plan.price}{" "}
                <span className="ml-[0.625rem] text-[#6B7280] text-[1.125rem]">
                  /month
                </span>
              </h4>
              <ul className="text-[#6B7280] text-center space-y-[1.125rem]">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-[0.625rem]">
                    <Image
                      src="/check.svg"
                      height={20}
                      width={20}
                      alt="check"
                      />
                      {benefit}
                  </li>
                ))}
              </ul>
              <Button primary={true}>Get Started</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
