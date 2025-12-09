import Hero from "@/components/sections/Hero";
import Challenges from "@/components/sections/Challenges";
import Solution from "@/components/sections/Solution";
import Impact from "@/components/sections/Impact";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <Solution />
      <Impact />
      <GalleryPreview />
      <CTA />
    </>
  );
}
