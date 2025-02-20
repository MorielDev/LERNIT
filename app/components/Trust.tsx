import { FaGlobe, FaServer } from "react-icons/fa";
import { FaCartShopping, FaUser } from "react-icons/fa6";

export default function Trust() {
  const stats = [
    {
      icon: <FaServer height={48} width={48} color="#7E3AF2" />,
      title: "99.99,% uptime",
      description: "for Flowbite, with zero maintenance downtime",
    },
    {
      icon: <FaUser height={48} width={48} color="#7E3AF2" />,
      title: "600M+ Users",
      description: "trusted by over 600 milion users around the world",
    },
    {
      icon: <FaCartShopping height={48} width={48} color="#7E3AF2" />,
      title: "Millions",
      description: "of transactions per day",
    },
    {
      icon: <FaGlobe height={48} width={48} color="#7E3AF2" />,
      title: "100+ Countries",
      description: "have used Flowbite to create functional websites",
    },
  ];
  return (
    <div className="my-24 mx-20">
      <div className="flex gap-24">
        <div className="">
          <h4 className="text-[#7E3AF2]">Trusted WorldWide</h4>
          <h2 className="text-[#111928] text-[2.25rem] font-extrabold">
            Trusted by over 600 million users <br /> and 10,000 teams
          </h2>
          <p className="text-[#6B7280]">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <hr className="my-8" />
          <p className="text-[#7E3AF2]">Explore Legality Guide </p>
          <p className="text-[#7E3AF2]">Visit the Trust Center</p>
        </div>

        <div className="grid grid-cols-2">
          {stats.map((stat, index) => (
            <div key={index}>
              {stat.icon}
              <h3 className="text-[#111928] font-bold text-[1.5rem]">
                {stat.title}
              </h3>
              <p className="text-[#6B7280]">{stat.description}</p>
            </div>
          ))}

          {/* <div className="">
                <h3 className="text-[#111928] text-[1.5rem]">99.99% uptime</h3>
                <p className="text-[#6B7280]">for Flowbite, with zero maintenance downtime</p>
            </div> */}
        </div>
      </div>
    </div>
  );
}
