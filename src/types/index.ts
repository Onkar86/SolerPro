export interface Appliance {
  id: string;
  name: string;
  quantity: number;
  wattage: number;
  hoursPerDay: number;
}

export interface DealerInfo {
  id: string;
  name: string;
  address: string;
  district: string;
  phone: string;
  email: string;
  services: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GovtScheme {
  id: string;
  title: string;
  description: string;
  link: string;
  state: string;
}