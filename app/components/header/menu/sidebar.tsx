"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMenuStore } from "@/app/store/menu-store";
import { sectionLinks } from "@/app/utils/utils";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();

  const sideBarMenu = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const activeSection = useMenuStore((state) => state.activeSection);

  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (
        sideBarMenu.current &&
        !sideBarMenu.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen],
  );

  useEffect(() => {
    window.addEventListener("resize", () => setIsMenuOpen(false));

    return () => {
      window.removeEventListener("resize", () => setIsMenuOpen(false));
    };
  }, []);

  // Trigger animations for menu open state
  useEffect(() => {
    if (isMenuOpen) {
      if (sideBarMenu.current) {
        gsap.to(sideBarMenu.current, {
          x: -sideBarMenu?.current?.clientWidth,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.5,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    } else {
      if (sideBarMenu.current) {
        gsap.to(sideBarMenu.current, {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  const scrollToSection = (targetSection: string) => {
    if (path !== "/") router.push("/");

    gsap.to(window, {
      duration: 1,
      delay: path !== "/" ? 0.5 : 0,
      scrollTo: { y: targetSection, offsetY: 78 },
      ease: "power2",
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        ref={sideBarMenu}
        className="fixed right-0 top-0 z-40 -mr-[100vw] h-screen w-screen
          bg-black will-change-auto min-aspect:-mr-[40vw] min-aspect:w-[40vw]"
      >
        <div className="bg-indigo-blue absolute -z-10 h-full w-full" />

        <div
          className=" mx-auto h-full w-full flex-col justify-center p-4 
          pb-4 pt-[2.313rem] min-aspect:mx-0 min-aspect:w-full min-aspect:justify-center min-aspect:pt-[6vw]"
        >
          <ul className="mt-[12.6vw] space-y-[7vw] px-8 text-[7vw] md:text-left min-aspect:space-y-[3vw] min-aspect:text-[3vw]">
            {sectionLinks?.slice(0, -1)?.map((item, index) => (
              <li
                className={`after:transition-width relative w-max text-white after:absolute after:-bottom-1 after:left-0 after:h-[0.041rem] after:w-0 after:bg-white after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full ${
                  activeSection === item?.id && path === "/" && "after:w-full"
                }`}
                key={index}
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
            <Link
              href={"/contact-us"}
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`after:transition-width relative mt-[7vw] inline-block w-max text-white after:absolute after:-bottom-1 after:left-0 after:h-[0.041rem] after:w-0 after:bg-white after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full min-aspect:mt-[3vw] ${
                path === "/contact-us" && "after:w-full"
              }`}
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>

      <div
        ref={overlayRef}
        className={`${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        } fixed top-0 z-30 h-screen w-screen bg-black opacity-0`}
      ></div>
    </>
  );
};

export default Sidebar;
