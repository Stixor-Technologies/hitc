import Image from "next/image";
import Link from "next/link";
import Testimonials from "./components/shared/testimonials";
import Clients from "./components/shared/clients";
import Team from "./components/team";
import { testimonialsData, faqData } from "./utils/data";
import Faq from "./components/shared/faq";
import Services from "./components/services";
import Blob from "@/public/assets/blobs/services-blob.svg";
import { clientImages } from "./utils/data";
import Graph from "@/public/assets/homepage/graph.svg";
import Rating from "@/public/assets/homepage/rating.png";
import Fiction from "@/public/assets/homepage/fiction.png";
import Table from "@/public/assets/homepage/table.png";
import Arrow from "@/public/assets/homepage/arrow-icon.svg";
import Instagram from "@/public/assets/homepage/instagram.svg";
import Linkedin from "@/public/assets/homepage/linkedin.svg";
import Facebook from "@/public/assets/homepage/facebook.svg";

import LinkButton from "./components/shared/link-button/link-button";

export default function Home() {
  return (
    <>
      {/* <section className="pt-[189px]"> */}
      <section className="pt-[189px]">
        <div className="container flex flex-col justify-center gap-14 md:flex-row md:gap-10 xl:gap-[109px]">
          <div className="mt-4 md:max-w-[340px] lg:mt-8 lg:max-w-[450px] xl:max-w-[519px]">
            <h2 className="text-4xl leading-tight lg:text-5xl xl:text-[64px]">
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

          <div className="grid w-full max-w-[643px] grid-cols-[45.3%_9.5%_45.3%] grid-rows-[16.1%_28.1%_16.1%] self-center">
            <Image
              src={Fiction}
              alt="homepage-fiction"
              className="col-span-2 col-start-1 row-start-1"
            />

            <div className=" col-start-3 ml-10 hidden size-24 items-center justify-center self-center rounded-full border-4 border-white bg-gradient-to-t from-pink to-ferozi sm:flex md:size-20 lg:size-24 xl:size-[123px]">
              <Image
                src={Graph}
                alt="graph"
                className="w-12 md:w-10 xl:w-auto"
              />
            </div>

            <Image
              src={Table}
              alt="homepage-table"
              className="col-span-full col-start-2 row-start-2"
            />
            <div className="mxl:col-span-1 mxl:row-start-3 mxl:max-w-[259px] mxl:self-end col-span-full row-start-4 mt-4 min-w-[259px] self-start rounded-2xl bg-white p-3 sm:col-span-1 sm:row-start-3 sm:max-w-[259px] sm:self-end md:col-span-full md:row-start-4 md:mt-0 md:max-w-full md:self-start lg:rounded-3xl lg:px-4 lg:py-[18px]">
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
        </div>
      </section>

      {/* <Services />
        <Clients />
        <Team />
        <Testimonials testimonials={testimonialsData} />
        <Faq faqs={faqData} /> */}
      {/* </section> */}
    </>
  );
}
