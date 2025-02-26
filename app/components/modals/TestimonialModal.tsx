// import { ModalProps } from "@/app/data/list";
import Carousel from "../ui/Carousel";

export default function TestimonialModal(){
  return (
    <div className="relative p-4 w-full max-w-md max-h-full">
      <div style={{ height: "600px", position: "relative" }}>
        <Carousel
          baseWidth={300}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </div>
  );
}
