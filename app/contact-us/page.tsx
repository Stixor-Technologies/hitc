"use client";
import React from "react";
import LinkButton from "../components/shared/link-button/link-button";
import ContactForm from "../components/shared/contact-form";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Contact = () => {
  const { contextSafe } = useGSAP();

  const scrollToSection = contextSafe((targetSection: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: targetSection, offsetY: 117 },
      ease: "power2",
    });
  });
  return (
    <>
      <section className="bg-cover bg-no-repeat py-[12.375rem] md:bg-[url('/assets/contact-bg.svg')] lg:pb-[19.063rem] lg:pt-[13.813rem]">
        <div className="container">
          <div className="flex flex-col items-center gap-5 text-center lg:gap-8">
            <h2 className="text-4xl !leading-none lg:text-[4rem] ">
              Contact Us
            </h2>
            <p className="lg:text-xl">
              Get in touch with us to benefit from our dynamic expertise
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
      <section
        id="contact"
        className="-mt-[7.375rem] pb-10 lg:-mt-[7.875rem] lg:pb-[6.563rem]"
      >
        <ContactForm isDark />
      </section>
    </>
  );
};

export default Contact;
