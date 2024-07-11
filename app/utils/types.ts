interface Testimony {
  id: number;
  imageUrl: string;
  name: string;
  designation: string;
  testimony: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export type { Testimony, FaqItem };
