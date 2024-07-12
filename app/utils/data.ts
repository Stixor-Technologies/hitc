import { Testimony, FaqItem } from "./types";
import CloudSolution from "@/public/assets/services/cloud-solutions.svg";
import SoftwareDevelopment from "@/public/assets/services/software-development.svg";
import DigitalMaketing from "@/public/assets/services/digital-marketing.svg";
import HomeSolution from "@/public/assets/services/home-solutions.svg";
import ManagedServices from "@/public/assets/services/managed-services.svg";
import UIUX from "@/public/assets/services/ui-ux.svg";

const clientsData = [
  {
    id: 1,
    name: "SMEs",
    description:
      "Our comprehensive suite of services is designed to help SMEs leverage technology to achieve their business objectives.",
  },

  {
    id: 2,
    name: "Large Enterprises",
    description:
      "We specialize in delivering comprehensive IT solutions tailored to the complex requirements of large enterprises.",
  },

  {
    id: 3,
    name: "Educational Institutions",
    description:
      "We work hand-in-hand with schools, colleges, and universities to enhance their technology infrastructure and facilitate e-learning initiatives.",
  },

  {
    id: 4,
    name: "Government Organizations",
    description:
      "We offer secure and efficient IT solutions that meet specific compliance and regulatory requirements to enhance public services.",
  },

  {
    id: 5,
    name: "E-commerce Businesses",
    description:
      "We help businesses leverage technology to enhance customer experiences, optimize supply chain management, and drive online sales.",
  },
];

const testimonialsData: Testimony[] = [
  {
    id: 1,
    imageUrl: "/assets/testimonials/phill-mantis.png",
    name: "Zoe Mantis",
    designation: "Founder, Alpha Group",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },

  {
    id: 2,
    imageUrl: "/assets/testimonials/don-joe.png",
    name: "Don Joe",
    designation: "Founder, Alpha Group",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },

  {
    id: 3,
    imageUrl: "/assets/testimonials/zoe-mantis.png",
    name: "Zoe Mantis",
    designation: "Founder, Alpha Group",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },

  {
    id: 4,
    imageUrl: "/assets/testimonials/phill-mantis.png",
    name: "Zoe Mantis",
    designation: "Founder, Alpha Group",
    testimony:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
];

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How flexible are HITC membership plans?",
    answer:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
  },
  {
    id: 2,
    question: "How flexible are HITC membership plans?",
    answer:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
  },
  {
    id: 3,
    question: "How flexible are HITC membership plans?",
    answer:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
  },
  {
    id: 4,
    question: "How flexible are HITC membership plans?",
    answer:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
  },
  {
    id: 5,
    question: "How flexible are HITC membership plans?",
    answer:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
  },
];

const servicesData = [
  {
    id: "cloud-solution",
    icon: CloudSolution,
    name: "Cloud Solution",
    intro:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not",
  },
  {
    id: "software-development",
    icon: SoftwareDevelopment,
    name: "Software Development",
    intro:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not",
  },
  {
    id: "managed-services",
    icon: ManagedServices,
    name: "Managed Services",
    intro:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not",
  },
  {
    id: "home-solution",
    icon: HomeSolution,
    name: "Smart Solutions",
    intro:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not",
  },
  {
    id: "digital-marketing",
    icon: DigitalMaketing,
    name: "Digital Marketing",
    intro:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not",
  },
  {
    id: "ui-ux",
    icon: UIUX,
    name: "UI/UX Design",
    intro:
      "Frequently asked questions ordered by popularity. Remember that if the visitor has not",
  },
];

export { clientsData, testimonialsData, faqData, servicesData };
