"use client";
import React, { useEffect, useState } from "react";
import LinkButton from "@/app/components/shared/link-button/link-button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";
import { Service } from "@/app/utils/types";
import Image from "next/image";
import { servicesData } from "@/app/utils/data";
import Faq from "@/app/components/shared/faq";
import ContactForm from "@/app/components/shared/contact-form";
import Spinner from "@/app/components/shared/spinner/spinner";
import { useScrollToSection } from "@/app/utils/scroll";
interface ServiceDetailParams {
  params: {
    id: string;
  };
}

const ServiceDetail = ({ params: { id } }: ServiceDetailParams) => {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    setLoading(true);
    const service = servicesData?.find((service) => service?.id === id);
    setLoading(false);
    if (service) setService(service);
  }, []);

  return (
    <>
      {loading ? (
        <div className="container flex h-screen items-center justify-center">
          <Spinner />
        </div>
      ) : !loading && service ? (
        <>
          <section className="bg-cover bg-no-repeat pb-28 pt-[12.375rem] md:bg-[url('/assets/services/service-detail-bg.svg')] lg:pb-[12.5rem] lg:pt-[13.875rem]">
            <div className="container">
              <div className="flex flex-col items-center gap-5 text-center lg:gap-8">
                <h2 className="text-4xl !leading-none lg:text-[4rem] ">
                                   {service?.name}
                </h2>
                <p className="lg:text-xl">
                 {service?.description}
                </p>
                <LinkButton
                  as={"button"}
                  text="Book a Consultation"
                  variant="md"
                  styles={"hover:translate-x-0"}
                  onClick={() => {
                    scrollToSection("#contact");
                  }}
                />
              </div>
            </div>
          </section>

          <section className="container">
            {/* Technologies */}
            <div>
              <div className="flex flex-col justify-between gap-2 text-center sm:flex-row sm:gap-0">
                <h4 className=" text-5xl">Technologies</h4>
                <p className="sm:max-w-[17.875rem] sm:text-right">
                  Our experts utilize the latest frameworks and technologies
                </p>
              </div>

              <div className="mt-14 cursor-pointer">
                <ul className="overflow-visible ">
                  <Swiper
                    slidesPerView={"auto"}
                    freeMode={true}
                    modules={[FreeMode]}
                    spaceBetween={25}
                    className="techologies-swiper !overflow-visible"
                  >
                    {service?.technologies?.map((technology, index) => {
                      return (
                        <SwiperSlide key={index} className={`max-w-[7rem]`}>
                          <li>
                            <Image
                              src={technology}
                              width={`${(id === "software-development" || id === "managed-services") && index === service?.technologies?.length - 1 ? 120 : 70}`}
                              alt="technology"
                              className=""
                            />
                          </li>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </ul>
              </div>
            </div>

            {/* Offers */}
            <div className="mt-28 flex flex-col justify-between  gap-14 lg:my-[6.688rem] lg:flex-row">
              <Image
                src={service?.detailImage}
                alt="offerss"
                className=" self-center rounded-2xl lg:max-w-[29.375rem] xl:max-w-[39.375rem] 2xl:max-w-[44rem]"
              />
              <ul className="grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] flex-col gap-6 self-start lg:flex lg:max-w-[37.125rem] lg:gap-4">
                {service?.services?.map((offer, index) => (
                  <li
                    key={index}
                    className="flex-1 rounded-2xl border-[0.5px] bg-dark-silver/20 px-5 py-6 lg:px-4 lg:py-4 xl:px-8 xl:py-6"
                  >
                    <h4 className="font-bold !leading-none lg:text-xl">
                      {offer?.name}
                    </h4>

                    <p className="mt-2 text-sm !leading-tight lg:mt-4">
                      {offer?.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* faq's */}
          {service?.faq && <Faq faqs={service?.faq} />}

          {/* contact form */}
          <section
            id="contact"
            className="bg-swirls bg-cover bg-no-repeat py-20 lg:py-[7.063rem]"
          >
            <ContactForm />
          </section>
        </>
      ) : (
        <div className="container flex h-[90vh] items-center justify-center">
          <h4 className="text-3xl">No Data Found</h4>
        </div>
      )}
    </>
  );
};

export default ServiceDetail;
