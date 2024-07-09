"use client";
// Import styles from the style module
import styles from "@/styles/section-hero/style.module.css";
// Import the Image component from Next.js
import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Define the Props type (empty for now)
type Props = {};

// Define the SectionHero component
const SectionHero = ({}: Props) => {
  return (
    // Container div with styles
    <div
      className={`h-screen ${styles.section} relative flex justify-center flex-col items-center`}
    >
      {/* Hero title */}
      <HeroTitle>survive at all costs</HeroTitle>
      {/* Hero subtitle */}
      <HeroSubtitle>experience new assassin`s creed valhalla</HeroSubtitle>
      {/* Purchase button */}
      <PurchaseButton>
        <span>purchase now </span>
        {"|"}
        <span className={styles.price}>$14.99</span>
      </PurchaseButton>
      {/* Story link */}
      <StoryLink
        className={`absolute bottom-10 xl:left-[48%] cursor-pointer lg:left-[45%] md:left-[40%] left-[35%]`}
      >
        <span>the story</span>
        <Image src="/images/scroll down.svg" alt="" width={40} height={40} />
      </StoryLink>
    </div>
  );
};

const effectFunc = (ref: React.RefObject<HTMLElement>) =>
  // return useEffect function for gsap animation
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

// Extracted components for better readability

// Hero title component
const HeroTitle = ({ children }: { children: ReactNode }) => {
  // create refrence for gsap animation
  const titleRef = useRef<HTMLDivElement>(null);

  effectFunc(titleRef);
  return (
    <div ref={titleRef}>
      <span
        className={`xl:text-6xl lg:text-5xl md:text-4xl text-3xl ${styles.heroTitle}`}
      >
        {children}
      </span>
    </div>
  );
};

// Hero subtitle component
const HeroSubtitle = ({ children }: { children: ReactNode }) => {
  // create refrence for gsap animation
  const subtitleRef = useRef<HTMLDivElement>(null);

  effectFunc(subtitleRef);
  return (
    <div ref={subtitleRef}>
      <span
        className={`xl:text-lg lg:text-base md:text-sm text-xs ${styles.heroSubtitle}`}
      >
        {children}
      </span>
    </div>
  );
};

// Purchase button component
const PurchaseButton = ({ children }: { children: ReactNode }) => {
  // create refrence for gsap animation
  const btnRef = useRef<HTMLButtonElement>(null);

  effectFunc(btnRef);

  return (
    <button
      ref={btnRef}
      className={`section-hero-price-btn xl:text-lg lg:text-base md:text-sm text-xs ${styles.purchaseButton}`}
    >
      {children}
    </button>
  );
};

// Story link component
const StoryLink = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => (
  <div
    className={`flex flex-col justify-center items-center gap-1 ${className}`}
  >
    {children}
  </div>
);

export default SectionHero;
