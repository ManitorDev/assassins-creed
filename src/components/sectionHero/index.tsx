// Import styles from the style module
import styles from "@/styles/section-hero/style.module.css";
// Import the Image component from Next.js
import Image from "next/image";
import { ReactNode } from "react";

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

// Extracted components for better readability

// Hero title component
const HeroTitle = ({ children }: { children: ReactNode }) => (
  <div>
    <span
      className={`xl:text-6xl lg:text-5xl md:text-4xl text-3xl ${styles.heroTitle}`}
    >
      {children}
    </span>
  </div>
);

// Hero subtitle component
const HeroSubtitle = ({ children }: { children: ReactNode }) => (
  <div>
    <span
      className={`xl:text-lg lg:text-base md:text-sm text-xs ${styles.heroSubtitle}`}
    >
      {children}
    </span>
  </div>
);

// Purchase button component
const PurchaseButton = ({ children }: { children: ReactNode }) => (
  <button
    className={`section-hero-price-btn xl:text-lg lg:text-base md:text-sm text-xs ${styles.purchaseButton}`}
  >
    {children}
  </button>
);

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
