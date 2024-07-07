"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const Header = () => {
  const menuBtn = useRef<HTMLButtonElement>(null);
  const MobileNav = useRef<HTMLDivElement>(null);
  const langDropdown = useRef<HTMLDivElement>(null);

  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  const [showLangDropdown, setShowLangDropdown] = useState<boolean>(false);

  const handleMenuBtnClick = () => {
    setShowMenuMobile(!showMenuMobile);
    const el = MobileNav.current as HTMLDivElement;
    if (el.classList.contains("hidden")) el.classList.remove("hidden");
    else el.classList.add("hidden");
  };

  const handleLangDropdownClick = () => {
    setShowLangDropdown(!showLangDropdown);
  };

  const handleLangSelect = (lang: string) => {
    // Add logic to update the language here
    console.log(`Language selected: ${lang}`);
  };

  return (
    <nav className="px-6 py-2 flex absolute top-0 w-full justify-around md:flex-row flex-col gap-4 items-center">
      <div className="flex justify-between items-center w-11/12">
        <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        <div className="md:hidden">
          <button className="" ref={menuBtn} onClick={handleMenuBtnClick}>
            <CiMenuFries size={22} />
          </button>
        </div>
      </div>
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

      <div className="hidden md:flex justify-center items-center gap-4 w-full">
        <div className="relative hidden md:block">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={handleLangDropdownClick}
          >
            Language
          </button>
          {showLangDropdown && (
            <div
              ref={langDropdown}
              className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md"
            >
              <ul className="list-none">
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleLangSelect("en")}
                  >
                    English
                  </button>
                </li>
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
        <button>
          <Image
            src="/images/xbox icon.svg"
            alt="XBOX"
            width={22}
            height={22}
          />
        </button>
        <button>
          <Image
            src="/images/steam icon.svg"
            alt="SREAM"
            width={22}
            height={22}
          />
        </button>
      </div>

      {/* Start mobile navigation */}
      <div
        ref={MobileNav}
        // style={{ display: "none" }}
        className="md:hidden gap-3 uppercase font-bold w-full"
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
      {/* End mobile navigation */}
    </nav>
  );
};

export default Header;
