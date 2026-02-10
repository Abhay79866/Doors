
export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  project: string;
  image: string;
  initials: string;
  rating: number;
}
