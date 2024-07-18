"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Sidebar from "./menu/sidebar";
import Logo from "@/public/assets/logo.svg";
import { sectionLinks } from "@/app/utils/utils";
import { useMenuStore } from "@/app/store/menu-store";
import Link from "next/link";
import Hamburger from "./menu/hamburger";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const router = useRouter();
  const path = usePathname();

  const activeSection = useMenuStore((state) => state.activeSection);
  const header = useRef<HTMLElement | null>(null);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  const [navClassList, setNavClassList] = useState<string[]>([]);
  const [paddingClass, setPaddingClass] = useState<string>("py-[1.75rem]");

  const handleScroll = useCallback(() => {
    setData((last) => ({
      x: window.scrollX,
      y: window.scrollY,
      lastX: last.x,
      lastY: last.y,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const _classList = [];

    if (data.y > 60) {
      _classList.push("bg-black");
      setPaddingClass("py-[1rem]");
    } else {
      setPaddingClass("py-[1.75rem]");
    }

    setNavClassList(_classList);
  }, [data.y]);

  const scrollToSection = (targetSection: string) => {
    if (path !== "/") router.push("/");
    gsap.to(window, {
      duration: 1,
      delay: path !== "/" ? 0.5 : 0,
      scrollTo: { y: targetSection, offsetY: 93 },
      ease: "power2",
    });
  };

  return (
    <header
      ref={header}
      className={`fixed z-40 w-full duration-300 ${navClassList.join(" ")}`}
    >
      <div className="container">
        <div
          className={`flex items-center justify-between duration-300 ${paddingClass} `}
        >
          <div className="flex">
            <Link href={"/"}>
              <Image
                src={Logo}
                width={188}
                height={62}
                alt="header-logo"
                className="w-[6.938rem] max-w-[9.25rem] duration-300 sm:w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center gap-[2.063rem]">
            <ul className="hidden gap-[2.063rem] md:flex">
              {sectionLinks?.slice(0, -1)?.map((item) => (
                <li
                  key={item?.id}
                  className={`after:transition-width relative after:absolute after:-bottom-1 after:left-0 after:h-[0.041rem] after:w-0 after:bg-white after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full lg:text-xl ${
                    activeSection === item?.id && path === "/" && "after:w-full"
                  }`}
                >
                  <button
                    onClick={() => {
                      scrollToSection(item?.id);
                    }}
                  >
                    {item?.title}
                  </button>
                </li>
              ))}
            </ul>

            <Link
              href={"/contact-us"}
              className="relative hidden w-[10.875rem] text-white md:block"
            >
              <div className=" bg-gradient-4 absolute -inset-[1px] overflow-hidden rounded-lg md:rounded-[0.625rem]"></div>
              <div className="relative flex h-12 w-full items-center justify-center overflow-hidden rounded-lg bg-dark-gray duration-300 [text-shadow:_0rem_0rem_0.688rem_rgb(255_255_255_/57%)] hover:bg-opacity-90 md:rounded-[0.625rem] lg:text-xl  ">
                Contact Us
              </div>
            </Link>
          </div>

          <Hamburger />
        </div>
        <div className="h-[1px] bg-gradient-to-b from-ferozi from-0% to-pink to-100% opacity-60" />
      </div>

      <Sidebar />
    </header>
  );
};

export default Header;
