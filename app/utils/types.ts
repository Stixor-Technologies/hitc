import { StaticImageData } from "next/image";

interface Testimony {
  id: number;
  name: string;
  testimony: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface ServiceItem {
  id: string;
  icon: string;
  name: string;
  intro: string;
}

interface TeamItem {
  id: number;
  name: string;
  profileImage: StaticImageData;
  designation: string;
  description: string;
}

interface ClientItem {
  id: number;
  name: string;
  description: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  detailImage: StaticImageData;
  services: {
    id: number;
    name: string;
    description: string;
  }[];
  technologies: StaticImageData[];
  faq: FaqItem[];
}

export type { Testimony, FaqItem, ServiceItem, TeamItem, ClientItem, Service };
