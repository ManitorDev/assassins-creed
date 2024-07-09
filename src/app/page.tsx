import SectionHero from "@/components/sectionHero";
import Image from "next/image";
import { metadata } from "./layout";
import { AboutCard } from "@/components/about-page";
import Features from "@/components/features";

export default function Home() {
  metadata.title = "Assassins Creeds | Home Page";

  return (
    <main className="">
      <SectionHero />
      <AboutCard />
      <Features />
    </main>
  );
}
