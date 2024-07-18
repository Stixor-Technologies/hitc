"use client";
import React from "react";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { sectionLinks, socialLink, connectionLinks } from "@/app/utils/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const router = useRouter();
  const path = usePathname();
  const { contextSafe } = useGSAP();

  const scrollToSection = contextSafe((targetSection: string) => {
    if (path !== "/") router.push("/");
    gsap.to(window, {
      duration: 1,
      delay: 0.5,
      scrollTo: { y: targetSection, offsetY: 93 },
      ease: "power2",
    });
  });
  return (
    <footer className="bg-black">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 pt-16 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col justify-between gap-10 lg:order-1 lg:max-w-md xl:max-w-[36.875rem] xl:gap-0 xs:flex-row">
            <div className="flex-1">
              <h4 className="text-nowrap text-xs uppercase">Explore More</h4>
              <ul className="mt-6 flex flex-col">
                {sectionLinks?.slice(0, -1)?.map((link, index) => (
                  <li
                    key={index}
                    className="after:transition-width relative mb-5 inline-block w-max text-sm after:absolute after:-bottom-1 after:left-0 after:h-[0.081rem] after:w-0 after:bg-white after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full"
                  >
                    <button
                      onClick={() => {
                        scrollToSection(link?.id);
                      }}
                    >
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
              <Link
                href={"/contact-us"}
                className="after:transition-width relative mb-5 block w-max text-sm after:absolute after:-bottom-1 after:left-0 after:h-[0.081rem] after:w-0 after:bg-white after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex-1">
              <h4 className="text-nowrap text-xs uppercase">Stay Connected</h4>
              <div className="mt-6 flex flex-col">
                {connectionLinks?.map((link, index) => (
                  <Link
                    key={index}
                    href={link?.path}
                    className="after:transition-width relative mb-5 inline-block w-max text-sm after:absolute after:-bottom-1 after:left-0 after:h-[0.081rem] after:w-0 after:bg-white after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full"
                  >
                    {link?.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-nowrap text-xs uppercase">Follow us</h4>
              <div className="mt-6 flex flex-col">
                {socialLink?.map((link, index) => (
                  <Link
                    key={index}
                    target="blank"
                    href={link?.path}
                    className="after:transition-width relative mb-5 inline-block w-max text-sm after:absolute after:-bottom-1 after:left-0 after:h-[0.081rem] after:w-0 after:bg-white after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full"
                  >
                    {link?.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="font-sm max-w-[31.25rem]">
            <Image src={Logo} alt="hitc-logo" className="mb-8" />

            <div className="text-sm">
              <span>Book a consultation with us!</span>
              <div className="my-6 flex flex-col gap-6 xs:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full max-w-[22.375rem] rounded-full bg-light-black px-3 py-2.5 shadow-[0_1px_0px_#ffffff]"
                />
                <button className="rounded-full bg-white px-4 py-2.5 text-light-black duration-200 hover:bg-slate-200 ">
                  Subscribe
                </button>
              </div>

              <p>
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>

        <>
          <hr className="border-stroke my-6 h-0.5 w-full border-dark-gray" />

          <div className="flex flex-col items-center justify-between gap-2 pb-6 text-sm sm:flex-row">
            <p>
              Copyright {new Date().getFullYear()} &copy; HITC. All Rights
              Reserved.
            </p>

            <div className="flex gap-4">
              <Link href={"/"} className=" ">
                Terms & Conditions
              </Link>
              <Link href={"/"} className="">
                Privacy Policy
              </Link>
            </div>
          </div>
        </>
      </div>
    </footer>
  );
};

export default Footer;
