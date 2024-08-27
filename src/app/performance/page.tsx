import Hero from "@/components/hero";
import performanceImg from "public/performance.webp";

const PerformancePage = () => {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
};

export default PerformancePage;
