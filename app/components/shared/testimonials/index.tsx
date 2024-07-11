"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";
import { Testimony } from "@/app/utils/types";

interface TestimonialsProps {
  testimonials: Testimony[];
}
const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="bg-chinese-black relative z-10 pb-[4.25rem] pt-[3.438rem]">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl">Testimonials</h2>
      </div>
      <div className="container mt-7 px-0 lg:mt-10">
        <div className="relative mt-3 h-[320px] w-full cursor-pointer overflow-visible md:mt-10 ">
          <div className="absolute left-0 list-none overflow-visible !px-4 sm:!px-8 lg:!px-[2.625rem]">
            <Swiper
              slidesPerView={"auto"}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              className="!overflow-visible "
            >
              {testimonials?.map((testimony) => {
                return (
                  <SwiperSlide
                    key={testimony?.id}
                    className={`relative max-w-[422px] `}
                  >
                    <ul className="relative flex flex-1">
                      <li className="bg-smoke-black text-light-silver flex-1 rounded-2xl px-[2rem] py-[1.563rem]">
                        <div className="flex items-center gap-5">
                          <div className="relative size-11 overflow-hidden rounded-full">
                            <Image
                              src={testimony?.imageUrl}
                              fill
                              alt={`testimony-${testimony?.name}`}
                              className="absolute object-cover"
                            />
                          </div>
                          <div className="text-stixor-secondary text-left">
                            <h4 className="text-white">{testimony?.name}</h4>
                            <h5 className="mt-1 text-xs">
                              {testimony?.designation}
                            </h5>
                          </div>
                        </div>

                        <p className="mt-7 lg:text-lg">
                          {testimony?.testimony}
                        </p>
                      </li>
                    </ul>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
