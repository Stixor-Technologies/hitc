import React from "react";
import LinkButton from "../components/shared/link-button/link-button";
import ContactForm from "../components/shared/contact-form";

const Contact = () => {
  return (
    <>
      <section className="bg-cover bg-no-repeat py-[198px] md:bg-[url('/assets/contact-bg.svg')] lg:pb-[305px] lg:pt-[221px]">
        <div className="container">
          <div className="flex flex-col items-center gap-5 text-center lg:gap-8">
            <h2 className="text-4xl !leading-none lg:text-[64px] ">
              Contact Us
            </h2>
            <p className="lg:text-xl">
              Get in touch with us to benefit from our dynamic expertise
            </p>
            <LinkButton as={"button"} text="Book a Consultation" variant="md" />
          </div>
        </div>
      </section>
      <section className="-mt-[118px] pb-10 lg:-mt-[126px] lg:pb-[105px]">
        <ContactForm isDark />
      </section>
    </>
  );
};

export default Contact;
