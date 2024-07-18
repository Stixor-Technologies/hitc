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
import Offers from "@/public/assets/services/offers.png";
import { servicesData } from "@/app/utils/data";
import Testimonials from "@/app/components/shared/testimonials";
import Faq from "@/app/components/shared/faq";
import ContactForm from "@/app/components/shared/contact-form";
import Spinner from "@/app/components/shared/spinner/spinner";
interface ServiceDetailParams {
  params: {
    id: string;
  };
}

const ServiceDetail = ({ params: { id } }: ServiceDetailParams) => {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const service = servicesData?.find((service) => service?.id === id);
    setLoading(false);
    if (service) setService(service);
  }, []);

  console.log("service", service);

  return (
    <>
      {loading ? (
        <div className="container flex h-screen items-center justify-center">
          <Spinner />
        </div>
      ) : !loading && service ? (
        <>
          <section className="bg-cover bg-no-repeat py-[198px] md:bg-[url('/assets/services/service-detail-bg.svg')] lg:pb-[200px] lg:pt-[222px]">
            <div className="container">
              <div className="flex flex-col items-center gap-5 text-center lg:gap-8">
                <h2 className="text-4xl !leading-none lg:text-[64px] ">
                  Software Development{" "}
                </h2>
                <p className="lg:text-xl">
                  Our experienced development team specializes in creating
                  customized software solutions that drive efficiency,
                  innovation, and growth. From web and mobile applications to
                  enterprise software and bespoke solutions, we have the
                  expertise to deliver scalable, user-friendly, and
                  high-performance software that aligns with your organizational
                  goals.
                </p>
                <LinkButton
                  as={"button"}
                  text="Book a Consultation"
                  variant="md"
                  styles={"hover:translate-x-0"}
                />
              </div>
            </div>
          </section>

          <section className="container">
            {/* Technologies */}
            <div>
              <div className="flex flex-col justify-between gap-2 text-center sm:flex-row sm:gap-0">
                <h4 className=" text-5xl">Technologies</h4>
                <p className="sm:max-w-[286px] sm:text-right">
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
                    className="!overflow-visible"
                  >
                    {service?.technologies?.map((technology, index) => {
                      return (
                        <SwiperSlide key={index} className={`max-w-[7rem]`}>
                          <li>
                            <Image src={technology} alt="technology" />
                          </li>
                          {/* <li key={index}>
                        <span>{`Technology ${technology}`}</span>
                      </li> */}
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </ul>
              </div>
            </div>

            {/* Offers */}
            <div className="my-[107px] flex  flex-col justify-between gap-14 lg:flex-row">
              <Image
                src={Offers}
                width={614}
                alt="offerss"
                className=" self-center lg:max-w-[470px] xl:max-w-[614px]"
              />
              <ul className="grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] flex-col gap-6 lg:flex lg:max-w-[594px] lg:gap-4">
                {[1, 2, 3, 4]?.map((offer, index) => (
                  <li
                    key={index}
                    className="flex-1 rounded-2xl border-[0.5px] bg-dark-silver/20 px-5 py-6 lg:px-4 lg:py-4 xl:px-8 xl:py-6"
                  >
                    <h4 className="font-bold !leading-none lg:text-xl">
                      Custom Software Development
                    </h4>

                    <p className="mt-2 text-sm !leading-tight lg:mt-4">
                      Our custom web development solutions accelerate workflows,
                      boost revenues, and optimize business operations from
                      concept-to-code and development-to-deployment.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Testimonials */}
          {service?.testimonials && (
            <Testimonials testimonials={service?.testimonials} />
          )}

          {/* faq's */}
          {service?.faq && <Faq faqs={service?.faq} />}

          {/* contact form */}
          <section className="bg-swirls bg-cover bg-no-repeat py-20 lg:py-[7.063rem]">
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
