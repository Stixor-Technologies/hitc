"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clientImages } from "@/app/utils/data";
import Graph from "@/public/assets/homepage/graph.svg";
import Rating from "@/public/assets/homepage/rating.png";
import Fiction from "@/public/assets/homepage/fiction.png";
import Table from "@/public/assets/homepage/table.png";
import Arrow from "@/public/assets/homepage/arrow-icon.svg";
import Instagram from "@/public/assets/homepage/instagram.svg";
import Linkedin from "@/public/assets/homepage/linkedin.svg";
import Facebook from "@/public/assets/homepage/facebook.svg";
import LinkButton from "../../shared/link-button/link-button";
import useSectionInView from "@/app/utils/useSectionInView";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const HeroHome = () => {
  const { ref } = useSectionInView("#home");

  const { contextSafe } = useGSAP();
  const scrollToSection = contextSafe((targetSection: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: targetSection, offsetY: 93 },
      ease: "power2",
    });
  });

  return (
    <section className="pb-20 pt-[189px]" id="home" ref={ref}>
      <div className="container flex flex-col justify-between gap-14 md:flex-row md:gap-10 xl:gap-[109px]">
        <div className="mt-4 md:max-w-[340px] lg:mt-8 lg:max-w-[450px] xl:max-w-[519px]">
          <h2 className="text-4xl !leading-tight lg:text-5xl xl:text-[64px]">
            Building{" "}
            <span className="bg-text-gradient-2 bg-clip-text text-transparent">
              Digital
            </span>{" "}
            <span className="bg-text-gradient-1 bg-clip-text text-transparent">
              Products
            </span>
            , Brand and Experience
          </h2>
          <p className="mt-4 lg:mt-14 lg:text-xl">
            Whether you require innovative website design, customized software
            development, or strategic digital marketing, our mission is to
            empower you through a collaborative approach grounded in
            transparency, ownership, and quality. Partner with us to elevate
            your digital presence and achieve your business goals.
          </p>

          <div className="mt-7 flex items-center gap-5 ">
            <LinkButton
              as={"button"}
              text="Book a Consultation"
              variant="md"
              styles={"hover:translate-x-0"}
              onClick={() => {
                scrollToSection("#contact");
              }}
            />

            <div className="flex items-center gap-3">
              <Link href={"/"}>
                <Image
                  src={Instagram}
                  alt="social-instagram"
                  className=" duration-300 hover:-translate-y-0.5"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={Linkedin}
                  alt="social-linkedin"
                  className=" duration-300 hover:-translate-y-0.5"
                />
              </Link>

              <Link href={"/"}>
                <Image
                  src={Facebook}
                  alt="social-facebook"
                  className=" duration-300 hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className=" inline-grid  w-full max-w-[643px] grid-cols-[minmax(130.461px,291px)_minmax(27.35px,61.0781px)_minmax(130.461px,291px)] grid-rows-[22vw,auto] sm:grid-rows-[minmax(11vw,158px)_minmax(19.2vw,276px)_minmax(11vw,158px)] md:sm:grid-rows-[minmax(11vw,158px)_auto_minmax(11vw,118px)] mxl:sm:grid-rows-[minmax(11vw,158px)_auto]">
          <Image
            src={Fiction}
            alt="homepage-fiction"
            className="col-span-2 col-start-1 row-start-1"
          />

          <div className=" col-start-3 ml-10 hidden size-24 items-center justify-center self-center rounded-full border-4 border-white bg-gradient-to-t from-pink to-ferozi sm:flex md:size-20 lg:size-24 xl:size-[123px]">
            <Image src={Graph} alt="graph" className="w-12 md:w-10 xl:w-auto" />
          </div>

          <Image
            src={Table}
            alt="homepage-table"
            className="col-span-full col-start-2 row-start-2"
          />
          <div className="col-span-full row-start-4 mt-4 hidden min-w-[259px] self-start rounded-2xl bg-white p-3 sm:col-span-1 sm:row-start-3 sm:block sm:max-w-[259px]  md:col-span-full md:row-start-3 md:mt-3 md:max-w-full md:self-start lg:rounded-3xl lg:px-4 lg:py-[18px] mxl:col-span-1 mxl:row-start-2 mxl:max-w-[259px] mxl:self-end">
            <h4 className="font-semibold text-black">Our happy Clients</h4>
            <Image src={Rating} width={84} alt="rating" />
            <div className="flex items-center justify-between gap-2.5 sm:justify-start">
              <div className="flex">
                {clientImages?.map((data, index) => (
                  <div
                    key={index}
                    className={`relative size-10 overflow-hidden rounded-full ${index !== 0 && "-ml-3"}`}
                  >
                    <Image
                      src={data}
                      fill
                      alt={`client-image-${index}`}
                      className="absolute object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-2.5">
                <Image src={Arrow} width={21} alt="arrow" />
                <span className=" text-sm text-black"> View all</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 min-w-[259px] rounded-2xl bg-white p-3 sm:hidden sm:max-w-[259px]  md:mt-0 md:max-w-full lg:rounded-3xl lg:px-4 lg:py-[18px] mxl:max-w-[259px]">
          <h4 className="font-semibold text-black">Our happy Clients</h4>
          <Image src={Rating} width={84} alt="rating" />
          <div className="flex items-center justify-between gap-2.5 sm:justify-start">
            <div className="flex">
              {clientImages?.map((data, index) => (
                <div
                  key={index}
                  className={`relative size-10 overflow-hidden rounded-full ${index !== 0 && "-ml-3"}`}
                >
                  <Image
                    src={data}
                    fill
                    alt={`client-image-${index}`}
                    className="absolute object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-2.5">
              <Image src={Arrow} width={21} alt="arrow" />
              <span className=" text-sm text-black"> View all</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
