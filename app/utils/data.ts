import { Testimony } from "./types";

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

const TestimonialsData: Testimony[] = [
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

export { clientsData, TestimonialsData };
