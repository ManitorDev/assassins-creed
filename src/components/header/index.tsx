"use client";
// Import necessary dependencies
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

// Define the Header component
const Header = () => {
  // State variables to track menu and language dropdown visibility
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  // Refs for menu button, mobile nav, and language dropdown
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Handle menu button click
  const handleMenuBtnClick = () => {
    setShowMenuMobile((prev) => !prev);
    mobileNavRef.current?.classList.toggle("hidden");
  };

  // Handle language dropdown click
  const handleLangDropdownClick = () => {
    setShowLangDropdown((prev) => !prev);
  };

  // Handle language selection
  const handleLangSelect = (lang: string) => {
    console.log(`Language selected: ${lang}`);
    // Add logic to update the language here
  };

  // Return the Header component
  return (
    <nav className="px-6 py-2 flex absolute top-0 w-full justify-around md:flex-row flex-col gap-4 items-center">
      <div className="flex justify-between items-center w-11/12">
        <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        <div className="md:hidden">
          <button ref={menuBtnRef} onClick={handleMenuBtnClick}>
            <CiMenuFries size={22} />
          </button>
        </div>
      </div>
      <DesktopNav />
      <MobileNav mobileNavRef={mobileNavRef} showMenuMobile={showMenuMobile} />
      <LangDropdown
        langDropdownRef={langDropdownRef}
        showLangDropdown={showLangDropdown}
        handleLangSelect={handleLangSelect}
        handleLangDropdownClick={handleLangDropdownClick}
      />{" "}
    </nav>
  );
};

// Define the DesktopNav component
const DesktopNav = () => (
  <div className="hidden md:block w-full">
    <ul className="list-none flex justify-around items-center gap-3 uppercase font-bold">
      <li>
        <Link href="/">main</Link>
      </li>
      <li>
        <Link href="/">about</Link>
      </li>
      <li>
        <Link href="/">game features</Link>
      </li>
      <li>
        <Link href="/">subscribe</Link>
      </li>
    </ul>
  </div>
);

// Define the MobileNav component
const MobileNav = ({
  showMenuMobile,
  mobileNavRef,
}: {
  showMenuMobile: boolean;
  mobileNavRef: React.RefObject<HTMLDivElement>;
}) => (
  <div
    ref={mobileNavRef}
    className={`md:hidden gap-3 uppercase font-bold w-full ${
      showMenuMobile ? "" : "hidden"
    }`}
  >
    <ul className="list-none md:hidden p-5 flex flex-col justify-around items-start gap-3 uppercase font-bold">
      <li>
        <Link className="border-l-4 border-purple-500 px-7" href="/">
          main
        </Link>
      </li>
      <li>
        <Link className="px-7" href="/">
          about
        </Link>
      </li>
      <li>
        <Link className="px-7" href="/">
          game features
        </Link>
      </li>
      <li>
        <Link className="px-7" href="/">
          subscribe
        </Link>
      </li>
    </ul>
  </div>
);

// Define the LangDropdown component
const LangDropdown = ({
  showLangDropdown,
  handleLangSelect,
  handleLangDropdownClick,
  langDropdownRef,
}: {
  showLangDropdown: boolean;
  handleLangSelect: (lang: string) => void;
  handleLangDropdownClick: () => void;
  langDropdownRef: React.RefObject<HTMLDivElement>;
}) => (
  <div className="relative hidden md:block">
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded"
      onClick={handleLangDropdownClick}
    >
      Language
    </button>
    {showLangDropdown && (
      <div
        ref={langDropdownRef}
        className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md"
      >
        <ul className="list-none">
          <li>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => handleLangSelect("fa")}
            >
              فارسی
            </button>
          </li>
          {/* Add more languages here */}
        </ul>
      </div>
    )}
  </div>
);

export default Header;
