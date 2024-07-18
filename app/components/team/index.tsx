"use client";
import React from "react";
import Image from "next/image";
import { teamData } from "@/app/utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";
import TeamBlob from "@/public/assets/blobs/team-blob.svg";

const Team = () => {
  return (
    <section className="relative py-20 lg:pb-[99px] lg:pt-[124px]">
      <Image
        src={TeamBlob}
        alt="team-blob"
        className="absolute -left-[30rem] top-1/2 max-h-[52.25rem] -translate-y-1/2 "
      />
      <div className="container">
        <h2 className="text-center text-3xl lg:text-5xl">
          Our{" "}
          <span className=" bg-text-gradient-1 bg-clip-text text-transparent">
            Team
          </span>
        </h2>

        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          spaceBetween={80}
          modules={[FreeMode]}
          breakpoints={{
            "1024": {
              spaceBetween: 80,
            },

            "0": {
              spaceBetween: 40,
            },
          }}
          className="team-swiper mx-auto mt-10 max-w-2xl !overflow-visible lg:mt-[6.188rem] lg:max-w-[892px] "
        >
          {teamData?.map((teamMember, index) => (
            <SwiperSlide
              key={teamMember?.id}
              className="!w-[330px] !min-w-[330px] !max-w-[406px] lg:!w-[25.375rem] lg:!min-w-[25.375rem]"
            >
              <div
                className={`content rounded-[1.688rem] ${index === 1 && "md:mt-[264px]"}`}
              >
                <div className="front rounded-[1.688rem] shadow-custom-white">
                  <Image
                    src={teamMember?.profileImage}
                    width={406}
                    alt="member-1"
                  />
                </div>
                <div className="back rounded-[1.688rem] bg-text-gradient-3 px-7 pt-7 shadow-custom-white lg:pt-14">
                  <div className="inner">
                    <h2 className="text-2xl font-extrabold lg:text-[2rem] lg:leading-8">
                      {teamMember?.name}
                    </h2>
                    <h6 className="mt-2 text-xl lg:mt-4 lg:text-2xl lg:leading-4">
                      {teamMember?.designation}
                    </h6>
                    <hr className="my-3 h-[1px] bg-white lg:my-5" />
                    <p className="font-light !leading-tight lg:text-xl">
                      {teamMember?.description}
                    </p>
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

export default Team;
