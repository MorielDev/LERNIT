import Image from "next/image";

export default function CustomerLogo() {
  const logos = [
    '/Google.png',
    '/Microsoft.png',
    '/Spotify.png',
    '/Mailchimp.png',
    '/Airbnb.png',
    '/uber.png'
  ];

  return (
    <div className="flex justify-center my-8">
      <div className="flex flex-wrap gap-8 max-w-4xl justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-24 h-16">
            <Image
              width={100}
              height={60}
              src={logo}
              alt="logo"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}