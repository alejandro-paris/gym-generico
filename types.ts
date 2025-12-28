import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ClassSession {
  id: number;
  name: string;
  time: string;
  instructor: string;
  image: string;
  intensity: 'Baja' | 'Media' | 'Alta';
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Trainer {
  name: string;
  role: string;
  image: string;
}