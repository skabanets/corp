import Hero from "@/components/hero";
import homeImg from "public/home.webp";

const HomePage = () => {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
};

export default HomePage;
