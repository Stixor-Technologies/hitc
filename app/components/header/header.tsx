"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Sidebar from "./menu/sidebar";
import Logo from "@/public/assets/logo.svg";
import { sectionLinks } from "@/app/utils/utils";
import { useMenuStore } from "@/app/store/menu-store";
import Link from "next/link";
import Hamburger from "./menu/hamburger";

const Header = () => {
  const activeSection = useMenuStore((state) => state.activeSection);

  const header = useRef<HTMLElement | null>(null);

  return (
    <header ref={header} className={`fixed z-40 w-full`}>
      <div className="container ">
        <div className="flex items-center justify-between py-[1.75rem]">
          <div className="flex">
            <Link href={"/"}>
              <Image
                src={Logo}
                width={188}
                height={62}
                alt="header-logo"
                className="w-[6.938rem] max-w-[9.25rem] sm:w-auto"
              />
            </Link>
          </div>

          <ul className="hidden gap-[2.063rem] md:flex">
            {sectionLinks?.slice(0, -1)?.map((item) => (
              <li
                key={item?.id}
                className={`after:transition-width relative text-white after:absolute after:-bottom-1 after:left-0 after:h-[0.041rem] after:w-0 after:bg-white after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full lg:text-xl ${
                  activeSection === item?.id && "after:w-full"
                }`}
              >
                <button onClick={() => {}}>{item?.title}</button>
              </li>
            ))}
          </ul>

          <Hamburger />
        </div>
        <div className="h-[1px] bg-gradient-to-b from-ferozi from-0% to-pink to-100% opacity-60" />
      </div>

      <Sidebar />
    </header>
  );
};

export default Header;
