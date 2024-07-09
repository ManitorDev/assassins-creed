"use client";
// Import necessary modules and styles
import styles from "@/styles/features/style.module.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the Features component
const Features = () => {
  // State to track visibility of feature descriptions
  const [isVisible, setIsVisible] = useState([true, false, false]);

  // Function to toggle visibility of feature descriptions
  const handleToggle = (index: number) => {
    setIsVisible((prevIsVisible) => {
      const newIsVisible = [...prevIsVisible];
      newIsVisible[index] = !prevIsVisible[index];
      return newIsVisible;
    });
  };

  // Refs for list and title elements
  const listRef = useRef<HTMLUListElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  // Use effect to animate list and title on scroll
  useEffect(() => {
    const list = listRef.current;
    const title = titleRef.current;

    // Animate list
    gsap.fromTo(
      list,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          scrub: 2,
          start: "top 80%",
          end: "top 50%",
          trigger: list,
        },
      }
    );

    // Animate title
    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: "-200px",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          scrub: 2,
          start: "top 80%",
          end: "top 50%",
          trigger: title,
        },
      }
    );
  }, []);

  // Render the component
  return (
    <div className={`${styles.container}`}>
      {/* Hidden element for layout purposes */}
      <div className="hidden md:block w-1/2"></div>
      <div className="w-1/2 h-full flex flex-col justify-center gap-6 items-center">
        <div>
          {/* Title element */}
          <span
            ref={titleRef}
            className="text-3xl md:text-4xl xl:text-6xl font-bold"
          >
            features
          </span>
        </div>
        <div>
          {/* List element */}
          <ul
            ref={listRef}
            className="w-2/3 mx-auto flex flex-col justify-around gap-5 border-l-2 p-10"
          >
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <li key={index} className={`${styles.listItem}`}>
                  {/* Feature item */}
                  <span
                    className="text-2xl min-w-full cursor-pointer md:text-3xl lg:text-4xl text-teal-600"
                    onClick={() => handleToggle(index)}
                  >
                    Feature {index + 1}
                  </span>
                  {/* Feature description */}
                  <small
                    className={isVisible[index] ? "" : "hidden"}
                    style={{ display: isVisible[index] ? "block" : "none" }}
                  >
                    you have 30 minutes to find a relic, signal for extraction,
                    and grab one of three spots on the rescue chopper.
                  </small>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
