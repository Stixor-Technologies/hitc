import React from "react";
import Image from "next/image";
import { clientsData } from "@/app/utils/data";
import Marquee from "react-fast-marquee";
import Blob from "@/public/assets/blobs/client-blob.svg";

const Clients = () => {
  return (
    <section className="relative">
      <Image
        src={Blob}
        width={376}
        alt="client-blob"
        className="absolute -right-0 -top-[10.625rem] max-h-[43.75rem]"
      />

      <div className="container">
        <h2 className="text-3xl lg:text-5xl">Our Clients</h2>
        <p className="mt-3 w-full max-w-[55.938rem] lg:mt-6 lg:text-xl">
          At HITC, we empower a dynamic mix of clients, from emerging startups
          to industry leaders, with bespoke digital solutions that fuel their
          success. Their success stories are a testament to our commitment to
          excellence and collaboration. We value these partnerships and are
          dedicated to driving results that exceed expectations, ensuring that
          every client achieves their unique business goals.
        </p>
      </div>
      <Marquee speed={120} autoFill loop={0} pauseOnHover>
        <ul className="min-w-auto relative mt-10 flex flex-1 overflow-hidden lg:mt-[4.625rem]">
          {clientsData?.map((data) => (
            <li
              key={data?.id}
              className="mx-2 max-w-[20.375rem] flex-1 rounded-2xl border bg-dark-silver/20 px-[1.125rem] py-[1.563rem]"
            >
              <h4 className="text-2xl font-semibold lg:text-[1.75rem]">
                {data?.name}
              </h4>

              <p className="mt-3 !leading-tight lg:text-lg">
                {data?.description}
              </p>
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
};

export default Clients;
