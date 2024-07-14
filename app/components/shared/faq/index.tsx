"use client";
import React, { useState, useRef, FC } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { FaqItem } from "@/app/utils/types";
import FaqArrow from "@/public/assets/faq-arrow.svg";

interface FaqProps {
  faqs: FaqItem[];
}

const FaqCard = ({
  id,
  faqItem,
  isActive,
  toggleActive,
}: {
  id: number;
  faqItem: FaqItem;
  isActive: boolean;
  toggleActive: (id: number) => void;
}) => {
  const answerRef = useRef<HTMLDivElement | null>(null);
  const tallbarPlus = useRef<HTMLSpanElement | null>(null);
  const flatbarPlus = useRef<HTMLSpanElement | null>(null);

  const { contextSafe } = useGSAP();

  const questionClicked = contextSafe(() => {
    const tl = gsap.timeline();

    const activeFaq = document.querySelector(".active");
    const tallBar = document.querySelector(".icon-animate");
    if (activeFaq) {
      gsap.to(activeFaq, {
        height: "0",
        marginTop: "0px",
        duration: 0.4,
      });
      activeFaq?.classList.remove("active");

      tl.to(tallBar, {
        scale: 1,
        duration: 0.2,
      });

      tl.to(tallBar, {
        rotate: 90,
        duration: 0.2,
      });
    }

    if (!isActive) {
      gsap.to(answerRef.current, {
        height: "auto",
        marginTop: "20px",
        duration: 0.4,
      });
      answerRef.current?.classList.add("active");
      tallbarPlus.current?.classList.add("icon-animate");

      tl.to(tallbarPlus.current, {
        rotate: 180,
        duration: 0.2,
      });

      tl.to(flatbarPlus.current, {
        scale: 0,
        duration: 0.2,
      });

      tl.to(tallbarPlus.current, {
        scale: 0,
        duration: 0.2,
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        marginTop: "0px",
        marginBottom: "0px",
        duration: 0.4,
      });
      answerRef.current?.classList.remove("active");

      tl.to(flatbarPlus.current, {
        scale: 1,
        duration: 0.2,
      });

      tl.to(tallbarPlus.current, {
        scale: 1,
        duration: 0.2,
      });

      tl.to(tallbarPlus.current, {
        rotate: 90,
        duration: 0.2,
      });
    }

    toggleActive(id);
  });

  return (
    <>
      <div className="py-6">
        <div
          className="group relative flex cursor-pointer items-center justify-between gap-8"
          onClick={questionClicked}
        >
          <span className="w-[90%]">{faqItem?.question}</span>

          <div className="relative flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-blue">
            <Image
              src={FaqArrow}
              width={10}
              height={5}
              alt="expand-answer-icon"
              className={`${isActive ? "rotate-180" : "rotate-0"} duration-300 ease-in-out`}
            />
          </div>
        </div>

        <div ref={answerRef} className="h-0 w-[90%] overflow-hidden">
          <p className=" text-sm">{faqItem?.answer}</p>
        </div>
      </div>

      <hr className="h-[1px] max-w-[8.5rem] bg-white" />
    </>
  );
};

const Faq: FC<FaqProps> = ({ faqs }) => {
  const [activeFaq, setActiveFaq] = useState<number>(-1);

  const toggleActive = (id: number) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === id ? -1 : id));
  };
  return (
    <section className="bg-black">
      <div className="container flex flex-col justify-between gap-8 py-20 md:flex-row md:gap-20 lg:pb-[7.625rem] lg:pt-[6.75rem] xl:gap-8">
        <div className="max-w-[33rem]">
          <h2 className="text-3xl lg:text-5xl">
            Your Roadmap to{" "}
            <span className="bg-text-gradient-1 bg-clip-text leading-relaxed text-transparent">
              HITC Clarity
            </span>
          </h2>
          <p className="mt-4 max-w-sm md:mt-6 lg:text-sm">
            Frequently asked questions ordered by popularity. Remember that if
            the visitor has not committed to the call to action, they may still
            have questions (doubts) that can be answered.
          </p>
        </div>

        <div className="w-full max-w-[46.25rem]">
          {faqs?.map((faqItem, index) => (
            <FaqCard
              id={index}
              faqItem={faqItem}
              isActive={activeFaq === index}
              toggleActive={toggleActive}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
