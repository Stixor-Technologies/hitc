"use client";
import React from "react";
import Image from "next/image";
import About from "@/public/assets/homepage/about.png";
import { aboutData } from "@/app/utils/data";
import LinkButton from "../../shared/link-button/link-button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-swirls bg-cover bg-no-repeat py-20 lg:pb-[7.313rem] lg:pt-[8.125rem]"
    >
      <div className="container">
        <div className="mb-12 flex flex-col gap-6 md:flex-row lg:!gap-[3.75rem] xs:gap-8">
          <div
            className={`content mx-auto max-w-[36.188rem] md:mx-0 md:min-w-[24.375rem] lg:min-w-[32.5rem] xl:w-[34.625rem] xl:min-w-[34.625rem]`}
          >
            <div className="front min-w-[17.5rem] overflow-hidden rounded-2xl lg:!rounded-[2.063rem] xs:rounded-3xl">
              <Image src={About} width={554} alt="member-1" />
            </div>
            <div className="back flex items-center rounded-2xl bg-text-gradient-3 px-7 py-7 lg:!rounded-[2.063rem] lg:py-14 xs:rounded-3xl">
              <div className="inner">
                <h2 className="text-2xl font-extrabold !leading-tight sm:!text-5xl md:!text-3xl lg:!text-5xl xs:text-4xl">
                  Houghton International Technical College
                </h2>
              </div>
            </div>
          </div>

          <div className=" max-w-[36.188rem] self-center text-dark-gray">
            <h2 className=" text-3xl leading-none lg:text-5xl">Who we are?</h2>
            <p className="my-3.5 lg:my-6">
              At HITC, we&apos;re your one-stop destination - whether you
              require cutting-edge website design, bespoke software development,
              or strategic digital marketing solutions.
            </p>
            <LinkButton
              as={"button"}
              variant="sm"
              text="Contact Us"
              styles={"hover:translate-x-0"}
            />
          </div>
        </div>

        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          spaceBetween={26}
          modules={[FreeMode]}
          className="team-swiper mx-auto !overflow-visible"
        >
          {aboutData?.map((data) => (
            <SwiperSlide
              key={data?.id}
              className="min-w-[26.875rem] max-w-max lg:max-w-[38.875rem] 2xl:max-w-[42.125rem]"
            >
              <div className={`content h-[12.5rem] w-full lg:h-[16.313rem]`}>
                <div className="front flex h-full items-center rounded-[2.063rem] border border-[#D9D9D9] bg-white px-6 py-4 lg:px-9 lg:py-12">
                  <div className="inner flex items-center gap-[4.188rem] text-dark-gray">
                    <h2 className="text-3xl lg:text-5xl">{data?.name}</h2>
                    <Image
                      src={data?.icon}
                      alt="mission-icon"
                      className="max-w-[11.125rem]"
                    />
                  </div>
                </div>
                <div className="back flex items-center rounded-[2.063rem] bg-text-gradient-3 px-6 py-4 shadow-custom-white lg:px-9 lg:py-12">
                  <div className="inner">
                    <p className="lg:text-lg">{data?.descrption}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUs;
