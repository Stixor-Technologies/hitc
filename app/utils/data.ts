import { Testimony, FaqItem } from "./types";

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

export { clientsData, testimonialsData, faqData };
