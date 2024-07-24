import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CarouselSection from "./components/CarouselSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <CarouselSection />
    </div>
  );
}
