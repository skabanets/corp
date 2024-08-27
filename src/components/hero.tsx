import Image from "next/image";
import type { StaticImageData } from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}
const Hero = (props: HeroProps) => {
  const { imgData, imgAlt, title } = props;

  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image src={imgData} alt={imgAlt} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
