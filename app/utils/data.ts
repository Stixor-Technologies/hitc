import {
  Testimony,
  FaqItem,
  ServiceItem,
  TeamItem,
  ClientItem,
  Service,
} from "./types";
import Mission from "@/public/assets/homepage/mission.svg";
import Vision from "@/public/assets/homepage/vision.svg";
import Member1 from "@/public/assets/homepage/member-1.png";
import Member2 from "@/public/assets/homepage/member-2.png";
import CloudSolution from "@/public/assets/services/cloud-solutions.svg";
import SoftwareDevelopment from "@/public/assets/services/software-development.svg";
import DigitalMaketing from "@/public/assets/services/digital-marketing.svg";
import HomeSolution from "@/public/assets/services/home-solutions.svg";
import ManagedServices from "@/public/assets/services/managed-services.svg";
import UIUX from "@/public/assets/services/ui-ux.svg";

const clientImages: string[] = [
  "/assets/homepage/client-1.png",
  "/assets/homepage/client-2.png",
  "/assets/homepage/client-3.png",
  "/assets/homepage/client-4.png",
];

const aboutData = [
  {
    id: 1,
    name: "Our Mission",
    descrption:
      "To empower our clients through an actively collaborative approach of transparency, ownership and quality.",
    icon: Mission,
  },

  {
    id: 2,
    name: "Our Vision",
    descrption:
      "To revolutionize businesses through innovative solutions, fostering growth and success in a dynamic digital landscape.",
    icon: Vision,
  },
];

const clientsData: ClientItem[] = [
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

const teamData: TeamItem[] = [
  {
    id: 1,
    name: "Yusuf Fahad Bin Ibrahim Alhabeeb",
    profileImage: Member1,
    designation: "Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur. At augue est tellus elementum. Sagittis laoreet non aliquam eleifend diam. Nullam sed fames in non aliquet ligula lobortis in quis. Et congue mi mi ornare ac laoreet. Velit turpis eu est pretium senectus id purus. Etiam sed integer urna eu. Mauris sed pellentesque potenti metus vulputate. Aliquam arcu ornare.",
  },
  {
    id: 2,
    name: "Yusuf Fahad Bin Ibrahim Alhabeeb",
    profileImage: Member2,
    designation: "Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur. At augue est tellus elementum. Sagittis laoreet non aliquam eleifend diam. Nullam sed fames in non aliquet ligula lobortis in quis. Et congue mi mi ornare ac laoreet. Velit turpis eu est pretium senectus id purus. Etiam sed integer urna eu. Mauris sed pellentesque potenti metus vulputate. Aliquam arcu ornare.",
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

const servicesList: ServiceItem[] = [
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

const servicesData: Service[] = [
  {
    id: "cloud-solution",
    name: "Cloud Solution",
    description:
      "Our experienced development team specializes in creating customized software solutions that drive efficiency, innovation, and growth. From web and mobile applications to enterprise software and bespoke solutions, we have the expertise to deliver scalable, user-friendly, and high-performance software that aligns with your organizational goals.",
    technologies: [
      CloudSolution,
      SoftwareDevelopment,
      CloudSolution,
      SoftwareDevelopment,
      CloudSolution,
      CloudSolution,
      SoftwareDevelopment,
      CloudSolution,
      SoftwareDevelopment,
      CloudSolution,
      CloudSolution,
      CloudSolution,
      SoftwareDevelopment,
      CloudSolution,
      SoftwareDevelopment,
      CloudSolution,
    ],
    testimonials: [
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
    ],
    faq: [
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
    ],
  },
];

export {
  aboutData,
  clientImages,
  clientsData,
  teamData,
  testimonialsData,
  faqData,
  servicesList,
  servicesData,
};
