"use client";
import React from "react";
import Image from "next/image";
import { servicesList } from "@/app/utils/data";
import Blob from "@/public/assets/blobs/services-blob.svg";
import useSectionInView from "@/app/utils/useSectionInView";

const Services = () => {
  const { ref } = useSectionInView("#services");

  return (
    <section id="services" ref={ref}>
      <div className="container relative bg-[right_-8.5rem_top_-14rem] bg-no-repeat py-20 md:bg-[url('/assets/services/bg-services-home.svg')] lg:pb-[11.688rem] lg:pt-[7.5rem] ">
        <Image
          src={Blob}
          alt="services-blob"
          className="absolute -left-1/2 -top-[8rem] max-h-[42.25rem] md:-left-[30rem]"
        />
        <ul className="min-w-auto relative grid grid-cols-[repeat(auto-fit,_minmax(16.5rem,_1fr))] gap-x-6 gap-y-7 overflow-hidden">
          <div className="col-span-full mb-4 flex flex-col justify-center gap-4 xl:col-start-3 xl:mb-0 xl:ml-10 xl:gap-6">
            <h2 className="max-w-sm text-3xl !leading-tight lg:text-5xl">
              Our{" "}
              <span className="bg-text-gradient-2 bg-clip-text text-transparent">
                Innovative{" "}
              </span>
              <span className="bg-text-gradient-1 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="lg:text-xl">
              Lorem ipsum dolor sit amet consectetur. Vestibulum id turpis ipsum
              eget risus. Ut aenean blandit fringilla in morbi adipiscing duis
              rhoncus tincidunt.
            </p>
          </div>
          {servicesList?.map((service, index) => (
            <li
              key={service?.id}
              className={`group w-full cursor-pointer overflow-hidden rounded-2xl border bg-dark-silver/20  px-8 py-[1.563rem] backdrop-blur-sm ${index === 0 && "xl:col-start-1 xl:row-start-1"} ${index === 1 && "xl:col-start-2 xl:row-start-1"}`}
            >
              <a href={`/service-detail/${service?.id}`}>
                <figure className="h-[13.75rem] pt-8 duration-200 ease-linear group-hover:pt-0">
                  <Image src={service?.icon} alt={`service-${service?.name}`} />
                  <figcaption className="mt-5">
                    <h4 className="max-w-[7rem] text-2xl">{service?.name}</h4>
                    <p className="mt-2 text-sm opacity-0 duration-200 ease-linear group-hover:opacity-100">
                      {service?.intro}
                    </p>
                  </figcaption>
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
