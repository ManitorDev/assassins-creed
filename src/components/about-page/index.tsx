"use client";
// Import necessary dependencies
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Define the Props type for the AboutCard component
type Props = {};

// Define the AboutCard component
export const AboutCard = ({}: Props) => {
  // Create refs for the title and image elements
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Use the useEffect hook to animate the title and image elements
  useEffect(() => {
    // Get the title and image elements from the refs
    const titleEl = titleRef.current;
    const imageEl = imageRef.current;

    // Animate the title element
    gsap.fromTo(
      titleEl,
      { opacity: 0, y: 200 }, // initial state
      {
        opacity: 1,
        y: 0, // final state
        scrollTrigger: {
          scrub: 2, // scrubbing effect
          trigger: titleEl, // trigger element
          start: "top 70%", // start of the animation
          end: "top 50%", // end of the animation
        },
      }
    );

    // Animate the image element
    gsap.fromTo(
      imageEl,
      { opacity: 0, y: 200 }, // initial state
      {
        opacity: 1,
        y: 0, // final state
        scrollTrigger: {
          scrub: 2, // scrubbing effect
          trigger: imageEl, // trigger element
          start: "top 70%", // start of the animation
          end: "top 50%", // end of the animation
        },
      }
    );
  }, []);

  // Return the JSX for the AboutCard component
  return (
    <div className="grid h-screen bg-about gap-10 grid-cols-1 md:grid-cols-2">
      {/* Left column */}
      <div
        ref={titleRef}
        className="col-span-1 flex flex-col justify-center items-start gap-4 p-10 md:p-4 md:w-2/3 mx-auto"
      >
        <div className="">
          <small>why is acv?</small>
        </div>
        <div className="border-b-2 border-white">
          <span className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
            assassin creed valhalla
          </span>
        </div>
        <div className="md:ml-20">
          <span className="font-extralight text-sm">
            {/* Long text about Assassin's Creed Valhalla */}
            When focusing on the main objectives, Assassin's Creed Valhalla is
            about 592 Hours in length. If you're a gamer that strives to see all
            aspects of the game, you are likely to spend around 136 Hours to
            obtain 100% completion. <br /> <br /> once you start getting
            comfortable with the world and the changes needed to play
            stealthily.
          </span>
        </div>
      </div>

      {/* Right column */}
      <div className="col-span-1 flex justify-center items-center">
        <Image
          ref={imageRef}
          src="/images/Photos.png"
          alt="card image"
          width={600}
          height={700}
        />
      </div>
    </div>
  );
};
