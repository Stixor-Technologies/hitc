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
import Member1 from "@/public/assets/homepage/member-1.jpg";
import Member2 from "@/public/assets/homepage/member-2.png";
import CloudSolution from "@/public/assets/services/cloud-solutions.svg";
import SoftwareDevelopment from "@/public/assets/services/software-development.svg";
import DigitalMaketing from "@/public/assets/services/digital-marketing.svg";
import HomeSolution from "@/public/assets/services/home-solutions.svg";
import ManagedServices from "@/public/assets/services/managed-services.svg";
import UIUX from "@/public/assets/services/ui-ux.svg";

import CloudSolutionDetail from "@/public/assets/services/cloud-solutions.jpg";
import SoftwareDevelopmentDetail from "@/public/assets/services/software-development.jpg";
import ManagedServicesDetail from "@/public/assets/services/managed-services.jpg";
import SmartSolutionsDetail from "@/public/assets/services/smart-solutions.jpg";
import DigitalMarketingDetail from "@/public/assets/services/marketing.jpg";
import UIUXDetail from "@/public/assets/services/ui-ux.jpg";

import Aws from "@/public/assets/services/technologies/aws.svg";
import Azure from "@/public/assets/services/technologies/azure.svg";
import Kubernetes from "@/public/assets/services/technologies/kubernetes.svg";
import Docker from "@/public/assets/services/technologies/docker.svg";

import VsCode from "@/public/assets/services/technologies/vs-code.svg";
import Github from "@/public/assets/services/technologies/github.svg";
import Firebase from "@/public/assets/services/technologies/firebase.svg";
import React from "@/public/assets/services/technologies/react.svg";
import Angular from "@/public/assets/services/technologies/angular.svg";
import Vuew from "@/public/assets/services/technologies/vue.svg";
import Node from "@/public/assets/services/technologies/node.svg";

import M1 from "@/public/assets/services/technologies/m1.svg";
import ServiceNow from "@/public/assets/services/technologies/service-now.svg";
import DataDog from "@/public/assets/services/technologies/data-dog.svg";
import Nagios from "@/public/assets/services/technologies/nagios.svg";
import Puppet from "@/public/assets/services/technologies/puppet.svg";

import AwsIot from "@/public/assets/services/technologies/aws-iot.svg";
import GoogleIot from "@/public/assets/services/technologies/google-iot.svg";
import AzureIot from "@/public/assets/services/technologies/azure-iot.svg";
import IbmWatson from "@/public/assets/services/technologies/ibm-watson.svg";
import Thingworx from "@/public/assets/services/technologies/thingworx.svg";

import GoogleAnalystics from "@/public/assets/services/technologies/google-analystics.svg";
import Hubspot from "@/public/assets/services/technologies/hubspot.svg";
import Mailchimp from "@/public/assets/services/technologies/mailchimp.svg";
import Hootsuite from "@/public/assets/services/technologies/hootsuite.svg";

import Adobe from "@/public/assets/services/technologies/adobe.svg";
import Figma from "@/public/assets/services/technologies/figma.svg";
import Invision from "@/public/assets/services/technologies/invision.svg";
import AxureRp from "@/public/assets/services/technologies/axure-rp.svg";

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
      "Yusuf is an experienced leader with a strong background in strategic planning and project management. He has managed high-profile projects, including the Saudi Pavilion at Expo 2020, and has a proven track record in driving success across various industries. Now, as a founder, Yusuf leverages his expertise to lead and innovate in his new venture.",
  },
  {
    id: 2,
    name: "Omer Fahad Bin Ibrahim Alhabeeb",
    profileImage: Member2,
    designation: "Founder",
    description:
      "Omer is the embodiment of drive, cool-headedness, and ambition. With a shared vision, he brings an energetic and innovative approach to the team, pushing boundaries and setting the stage for success.",
  },
];

const testimonialsData: Testimony[] = [
  {
    id: 1,
    name: "Sarah",
    testimony:
      "HITC transformed our online presence. Their website design and marketing brought amazing results!",
  },

  {
    id: 2,
    name: "John",
    testimony:
      "We needed custom software, and HTIC delivered beyond our expectations. The mobile app they created improved our operations and user experience significantly.",
  },

  {
    id: 3,
    name: "Emily",
    testimony:
      "HITC's cloud solutions made our IT more efficient and secure. We can now focus on our core business, knowing that our technology is in expert hands.",
  },

  {
    id: 4,
    name: "Zayyan",
    testimony:
      "The team at HTIC is incredible. Their managed services provide us with 24/7 support and maintenance, ensuring our systems run smoothly.",
  },
];

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How do I get started with HITC?",
    answer:
      "To get started, simply book a consultation through our website. We'll discuss your requirements, provide recommendations, and outline a plan to achieve your business goals.",
  },
  {
    id: 2,
    question: "What makes HITC's approach unique?",
    answer:
      "At HITC, we combine cutting-edge technology with a deep understanding of your business needs. Our tailored solutions and collaborative approach ensure that we deliver results that align with your specific goals and drive measurable success.",
  },
  {
    id: 3,
    question: "What can I expect during the initial consultation?",
    answer:
      "During the initial consultation, we'll discuss your business goals, evaluate your current systems, and identify areas for improvement. We'll also provide insights into our services and outline a strategy to achieve your desired outcomes.",
  },
  {
    id: 4,
    question: "What is the cost of your services?",
    answer:
      "Costs vary depending on the scope and complexity of the project. We provide customized quotes based on your specific requirements after our initial consultation.",
  },
  {
    id: 5,
    question: "Can I integrate your solutions with my existing systems?",
    answer:
      "Yes, our solutions are designed to integrate seamlessly with your existing systems. We work to ensure that our technology complements and enhances your current infrastructure.",
  },
];

const servicesList: ServiceItem[] = [
  {
    id: "cloud-solution",
    icon: CloudSolution,
    name: "Cloud Solution",
    intro:
      "Utilize seamless cloud integration, robust security measures and optimized IT spending.",
  },
  {
    id: "software-development",
    icon: SoftwareDevelopment,
    name: "Software Development",
    intro:
      "High-performance custom solutions, intuitive mobile apps, and robust enterprise systems.",
  },
  {
    id: "managed-services",
    icon: ManagedServices,
    name: "Managed Services",
    intro:
      "Streamline your operations with comprehensive IT support, 24/7 monitoring, and proactive maintenance.",
  },
  {
    id: "home-solution",
    icon: HomeSolution,
    name: "Smart Solutions",
    intro:
      "Elevate your business advanced analytics, automation, and AI come together to transform your data into strategic advantages",
  },
  {
    id: "digital-marketing",
    icon: DigitalMaketing,
    name: "Digital Marketing",
    intro:
      "Boost your brand's online presence with SEO, social media, and targeted ads to enhance your digital footprint.",
  },
  {
    id: "ui-ux",
    icon: UIUX,
    name: "UI/UX Design",
    intro:
      "Enhance your user experience with intuitive design, sleek functionality, and captivating and user-friendly interfaces.",
  },
];

const servicesData: Service[] = [
  {
    id: "cloud-solution",
    name: "Cloud Solution",
    description:
      "Delivering cutting-edge Cloud Solutions that elevate your business to new heights. Our work ensures unmatched scalability, robust security, and cost-effective efficiency tailored to your needs. With seamless cloud integration and optimization, we keep you agile and ahead of the curve, while you focus on driving growth",
    detailImage: CloudSolutionDetail,
    services: [
      {
        id: 1,
        name: "Cloud Security",
        description:
          "Our cloud services include advanced security measures to protect your data and infrastructure. We implement robust protocols and monitoring to safeguard against threats and ensure your information remains secure.",
      },
      {
        id: 2,
        name: "Cloud Optimization",
        description:
          "We continually optimize your cloud environment to enhance performance and efficiency. Our team monitors and adjusts your cloud resources to ensure they meet your evolving needs and provide maximum value.",
      },
      {
        id: 3,
        name: "Optimized IT spending",
        description:
          "We offer cost-effective cloud solutions that optimize your IT spending. By leveraging cloud technology, we help you reduce overhead costs and improve resource management while maintaining high performance.",
      },
    ],
    technologies: [Aws, Azure, Kubernetes, Docker],

    faq: [
      {
        id: 1,
        question: "What Cloud Solutions do you offer?",
        answer:
          "Our Cloud Solutions  include a range of services, including data storage, and application management that offer maximum   scalability, flexibility, and cost-efficiency for managing your IT needs.",
      },
      {
        id: 2,
        question: "How can Cloud Solutions benefit my business?",
        answer:
          "Cloud Solutions provide numerous benefits, including scalability to handle growth, enhanced security to protect your data, cost-efficiency by reducing on-premises infrastructure needs with existing systems.",
      },
      {
        id: 3,
        question: "What types of cloud solutions do you offer?",
        answer:
          "We offer a range of cloud solutions including scalable infrastructure, robust security measures, cost-effective management, seamless integration, cloud optimization, and disaster recovery services.",
      },
      {
        id: 4,
        question: "What is the cost of cloud services?",
        answer:
          "The cost of cloud services varies based on your specific needs and the solutions you choose. We provide customized quotes based on your requirements and offer flexible pricing options to fit your budget.",
      },
      {
        id: 5,
        question: "What support is available for cloud services?",
        answer:
          "We offer comprehensive support for our cloud services, including 24/7 technical assistance, regular maintenance, and troubleshooting. Our team is available to address any issues and ensure your cloud solutions operate smoothly.",
      },
    ],
  },
  {
    id: "software-development",
    name: "Software Development",
    description:
      "Crafting high-performance software tailored to your unique needs, we deliver everything from intuitive mobile apps to robust enterprise systems. Experience a seamless development process and transform your vision into powerful digital solutions.",
    detailImage: SoftwareDevelopmentDetail,
    services: [
      {
        id: 1,
        name: "Custom Software Solutions",
        description:
          "We design and develop bespoke software tailored to your specific business needs. Our custom solutions enhance efficiency and effectiveness, addressing your unique challenges and driving success.",
      },
      {
        id: 2,
        name: "Mobile App Development",
        description:
          "We create high-performance mobile applications for iOS and Android, focusing on intuitive design and seamless functionality. Our apps are built to engage users and stand out in a competitive market.",
      },
      {
        id: 3,
        name: "OWeb Application Development",
        description:
          "We build dynamic and responsive web applications that deliver exceptional user experiences. Our web solutions are designed to meet your business goals and adapt to evolving market demands.",
      },
    ],
    technologies: [VsCode, Github, Firebase, React, Angular, Vuew, Node],

    faq: [
      {
        id: 1,
        question: "What types of software development services do you offer?",
        answer:
          "We offer a range of software development services, including custom software solutions, mobile app development, enterprise system design, web application development, software integration, and UI/UX design.",
      },
      {
        id: 2,
        question: "How do I get started with a software development project?",
        answer:
          "To start a software development project, simply reach out to us through our website or contact us directly. We will schedule a consultation to discuss your needs, outline your project requirements, and provide a plan for moving forward.",
      },
      {
        id: 3,
        question:
          "What is the typical timeline for a software development project?",
        answer:
          "Project timelines vary depending on the complexity and scope of the work. We will provide a detailed timeline during the initial consultation and keep you updated throughout the development process to ensure timely delivery.",
      },
      {
        id: 4,
        question: "What is the cost of developing custom software?",
        answer:
          "The cost of developing custom software varies based on the complexity, features, and scope of the project. We provide a detailed and customized quote after our initial consultation, ensuring transparency and alignment with your budget.",
      },
      {
        id: 5,
        question:
          "How do you ensure my data and intellectual property are protected?",
        answer:
          "We take data protection and intellectual property seriously. Our development processes include secure coding practices, data encryption, and strict confidentiality agreements to protect your information and intellectual property.",
      },
    ],
  },

  {
    id: "managed-services",
    name: "Managed Services",
    description:
      "Our Managed Services keep your IT running effortlessly. We offer 24/7 monitoring, proactive maintenance, and robust security—all tailored to your needs. From network management to cloud services, we handle the tech so you can focus on what you do best. Experience hassle-free IT with our expert care.",
    detailImage: ManagedServicesDetail,
    services: [
      {
        id: 1,
        name: "24/7 Monitoring",
        description:
          "We provide continuous, around-the-clock oversight of your IT systems, ensuring that any issues are swiftly detected and addressed. This proactive approach helps maintain optimal performance and minimizes downtime.",
      },
      {
        id: 2,
        name: "Robust Security",
        description:
          "We implement advanced security protocols and measures to safeguard your data and IT infrastructure from various threats. Our robust security solutions are designed to create a secure environment.",
      },
      {
        id: 3,
        name: "Network Management",
        description:
          "Our network management services focus on optimizing the performance and reliability of your network. We handle everything from monitoring and troubleshooting to performance enhancements.",
      },
    ],
    technologies: [M1, ServiceNow, DataDog, Nagios, Puppet],

    faq: [
      {
        id: 1,
        question: "What are Managed Services?",
        answer:
          "Managed Services involve outsourcing the management of your IT infrastructure and operations to a third-party provider. This includes services such as monitoring, maintenance, and support to ensure your IT systems run smoothly and efficiently.",
      },
      {
        id: 2,
        question: "What types of Managed Services do you offer?",
        answer:
          "We offer a comprehensive range of Managed Services, including 24/7 monitoring, proactive maintenance, robust security, network management, cloud services, and disaster recovery solutions.",
      },
      {
        id: 3,
        question: "Can you help with network management?",
        answer:
          "Yes, we provide comprehensive network management services, including monitoring, troubleshooting, and performance optimization. Our team ensures your network operates reliably and efficiently, supporting your business needs effectively.",
      },
      {
        id: 4,
        question: "What is the cost of Managed Services?",
        answer:
          "The cost of Managed Services varies based on the scope of services and the size of your IT infrastructure. We provide customized quotes based on your specific needs and offer flexible pricing options to fit your budget.",
      },
      {
        id: 5,
        question: "How do you handle support and troubleshooting?",
        answer:
          "We offer dedicated support and troubleshooting services to address any IT issues you may encounter. Our team provides timely assistance and resolves problems efficiently, ensuring minimal impact on your business operations.",
      },
    ],
  },

  {
    id: "home-solution",
    name: "Smart Solutions",
    description:
      "We leverage advanced analytics, automation, and AI to transform your data into actionable insights. Optimize operations and stay ahead of the curve with technology that fuels innovation and agility.",
    detailImage: SmartSolutionsDetail,
    services: [
      {
        id: 1,
        name: "Artificial Intelligence",
        description:
          "We integrate artificial intelligence into your operations to enhance decision-making and efficiency. Our AI solutions offer intelligent insights and predictive capabilities, giving you a competitive edge in your industry.",
      },
      {
        id: 2,
        name: "Data Integration",
        description:
          "We ensure seamless integration of your data sources to create a unified view of your business. Our data integration services provide you with comprehensive and accurate information for better decision-making.",
      },
      {
        id: 3,
        name: "Process Automation",
        description:
          "We streamline your processes with cutting-edge automation technologies. By optimizing repetitive tasks, we increase efficiency, reduce errors, and free up your resources for more valuable activities.",
      },
    ],
    technologies: [AwsIot, GoogleIot, AzureIot, IbmWatson, Thingworx],

    faq: [
      {
        id: 1,
        question: "What are Smart Solutions?",
        answer:
          "Smart Solutions leverage advanced technologies such as analytics, automation, and artificial intelligence to optimize your operations and provide actionable insights. These solutions enhance decision-making, efficiency, and overall business performance.",
      },
      {
        id: 2,
        question: "How does automation improve business processes?",
        answer:
          "Automation improves business processes by handling repetitive tasks efficiently and accurately. It reduces manual effort, minimizes errors, and speeds up workflows, allowing your team to focus on more strategic activities.",
      },
      {
        id: 3,
        question:
          "What is artificial intelligence (AI), and how can it be used in my business?",
        answer:
          "Artificial intelligence (AI) involves using machine learning and data processing to mimic human intelligence. In business, AI can be used for predictive analytics, enhancing customer experiences, and automating complex processes to drive innovation and efficiency.",
      },
      {
        id: 4,
        question:
          "How do you ensure the accuracy and reliability of Smart Solutions?",
        answer:
          "We carry out rigorous testing, and continuous monitoring and implement best practices. Our team performs regular updates to maintain the effectiveness of our Smart Solutions.",
      },
      {
        id: 5,
        question: "What is the cost of implementing Smart Solutions?",
        answer:
          "The cost of implementing Smart Solutions varies depending on the complexity and scope of the services. We provide customized quotes based on your specific needs and offer flexible pricing options to fit your budget.",
      },
    ],
  },

  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description:
      "By integrating SEO, SMM, and PPC Strategy, we supercharge your digital footprint and spark genuine engagement. With data-driven strategies and captivating content, we propel your digital presence to new heights.",
    detailImage: DigitalMarketingDetail,
    services: [
      {
        id: 1,
        name: "Search Engine Optimization (SEO)",
        description:
          "We optimize your website to improve its visibility on search engines. Our SEO strategies enhance your site's ranking, driving organic traffic and increasing your online presence.",
      },
      {
        id: 2,
        name: "Social Media Marketing(SMM)",
        description:
          "We craft and execute tailored social media campaigns to engage your audience across platforms. By creating compelling content and leveraging social media trends, we help build your brand and foster meaningful connections.",
      },
      {
        id: 3,
        name: "Targeted Pay-per-Click(PPC)",
        description:
          "Our targeted advertising services focus on reaching your ideal customers through precise ad placements. We use data-driven insights to design effective ad campaigns that drive conversions and maximize your return on investment.",
      },
      {
        id: 4,
        name: "Content Marketing",
        description:
          "We develop engaging and relevant content that captures your audience's attention. From blog posts and articles to infographics and videos, our content marketing strategies are designed to inform, entertain, and convert.",
      },
    ],
    technologies: [GoogleAnalystics, Hubspot, Mailchimp, Hootsuite],

    faq: [
      {
        id: 1,
        question: "What is Digital Marketing?",
        answer:
          "Digital Marketing encompasses online strategies to promote your brand, products, or services through channels such as search engines, social media, email, and websites. It aims to reach and engage your target audience effectively.",
      },
      {
        id: 2,
        question: "How does SEO improve my website's visibility?",
        answer:
          "SEO (Search Engine Optimization) improves your website's visibility by optimizing it to rank higher on search engine results pages. This involves keyword research, on-page optimization, and building quality backlinks to drive organic traffic to your site.",
      },
      {
        id: 3,
        question: "How can PPC help in marketing efforts?",
        answer:
          "Targeted Advertising allows you to reach specific audiences based on demographics, interests, and behaviors. This ensures your ads are seen by the right people, improving the effectiveness of your campaigns and maximizing your return on investment.",
      },
      {
        id: 4,
        question: "What is Content Marketing, and why is it important?",
        answer:
          "Content Marketing focuses on creating and distributing valuable, relevant content to attract and engage your target audience. It builds trust, provides solutions to your audience's problems, and positions your brand as an authority in your industry.",
      },
      {
        id: 5,
        question: "How do I get started with Digital Marketing?",
        answer:
          "To get started, contact us through our website or directly. We will schedule a consultation to discuss your objectives, assess your current marketing efforts, and develop a strategic plan to achieve your digital marketing goals.",
      },
    ],
  },

  {
    id: "ui-ux",
    name: "UI/UX Design",
    description:
      "We design intuitive and visually stunning UI/UX solutions that captivate and engage your audience. Our approach blends sleek, user-centric design with seamless functionality to create memorable experiences. ",
    detailImage: UIUXDetail,
    services: [
      {
        id: 1,
        name: "User Interface (UI) Design",
        description:
          "We create visually appealing and intuitive interfaces that enhance user interaction. Our UI designs focus on aesthetic appeal and ease of use, ensuring a seamless and enjoyable user experience.",
      },
      {
        id: 2,
        name: "User Experience (UX) Design",
        description:
          "We design user experiences that are both engaging and effective. Our UX strategies involve understanding user needs and behaviors to create user-centric solutions that provide clarity and satisfaction.",
      },
      {
        id: 3,
        name: "Visual Design",
        description:
          "We craft visually stunning designs that align with your brand identity. Our visual design services ensure that your digital products are both attractive and aligned with your overall brand aesthetics.",
      },
      {
        id: 4,
        name: "Wireframing and Prototyping",
        description:
          "We develop wireframes and prototypes to visualize and test design concepts. This process helps us refine functionality and usability before moving into full-scale development.",
      },
    ],
    technologies: [Adobe, Figma, Invision, AxureRp],

    faq: [
      {
        id: 1,
        question: "What is UI/UX design?",
        answer:
          "UI/UX design focuses on creating user-friendly and visually appealing digital products. UI (User Interface) design deals with the layout, visual elements, and interactive aspects of a product, while UX (User Experience) design ensures the product is intuitive and meets user needs effectively",
      },
      {
        id: 2,
        question: "Why is UI/UX design important for my business?",
        answer:
          "UI/UX design is crucial because it directly impacts how users interact with your product. A well-designed UI/UX improves user satisfaction, increases engagement, and can lead to higher conversion rates, ultimately enhancing the overall success of your digital product.",
      },
      {
        id: 3,
        question: "How do you approach UI/UX design projects?",
        answer:
          "We start with understanding your business goals and user needs through research and analysis. Our process includes creating wireframes and prototypes, conducting usability testing, and refining designs based on feedback to ensure a user-centered and effective solution.",
      },
      {
        id: 4,
        question:
          "How do you ensure that the UI/UX design aligns with my brand?",
        answer:
          "We ensure that the UI/UX design aligns with your brand by incorporating your brand's visual identity, values, and messaging into the design. This includes using consistent colors, fonts, and imagery that reflect your brand and resonate with your target audience.",
      },
      {
        id: 5,
        question: "How long does the UI/UX design process take?",
        answer:
          "The duration of the UI/UX design process depends on the complexity and scope of the project. We provide a detailed timeline during the initial consultation and keep you informed throughout the design process to ensure timely delivery.",
      },
    ],
  },
];

export {
  aboutData,
  clientsData,
  teamData,
  testimonialsData,
  faqData,
  servicesList,
  servicesData,
};
