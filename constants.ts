import { Dumbbell, Clock, Users, Zap, HeartPulse, Trophy } from "lucide-react";
import { NavItem, Feature, ClassSession, PricingPlan, Trainer } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "Clases", href: "#classes" },
  { label: "Planes", href: "#pricing" },
  { label: "Entrenadores", href: "#trainers" },
  { label: "Contacto", href: "#contact" },
];

export const FEATURES: Feature[] = [
  {
    title: "Equipamiento Premium",
    description: "Máquinas de última generación Technogym y zona de pesos libres olímpicos.",
    icon: Dumbbell,
  },
  {
    title: "Acceso 24/7",
    description: "Entrena a tu ritmo. Abrimos todos los días del año, a cualquier hora.",
    icon: Clock,
  },
  {
    title: "Comunidad",
    description: "Un ambiente motivador donde superarás tus límites junto a otros.",
    icon: Users,
  },
  {
    title: "Entrenamiento HIIT",
    description: "Zonas especializadas para alta intensidad y cross-training.",
    icon: Zap,
  },
];

export const CLASSES: ClassSession[] = [
  {
    id: 1,
    name: "Power Yoga",
    time: "07:00 AM",
    instructor: "Elena R.",
    image: "https://picsum.photos/600/400?random=10",
    intensity: "Media"
  },
  {
    id: 2,
    name: "CrossFit WOD",
    time: "18:00 PM",
    instructor: "Marcos T.",
    image: "https://picsum.photos/600/400?random=11",
    intensity: "Alta"
  },
  {
    id: 3,
    name: "Spinning Pro",
    time: "19:30 PM",
    instructor: "Sarah J.",
    image: "https://picsum.photos/600/400?random=12",
    intensity: "Alta"
  },
  {
    id: 4,
    name: "Boxeo Técnico",
    time: "20:00 PM",
    instructor: "David L.",
    image: "https://picsum.photos/600/400?random=13",
    intensity: "Alta"
  }
];

export const PLANS: PricingPlan[] = [
  {
    name: "Básico",
    price: "29.99€",
    features: [
      "Acceso al gimnasio 06:00 - 23:00",
      "Uso de taquillas",
      "1 Sesión de introducción",
      "Acceso app móvil"
    ]
  },
  {
    name: "Pro",
    price: "49.99€",
    recommended: true,
    features: [
      "Acceso 24/7 ilimitado",
      "Todas las clases grupales",
      "Acceso zona spa & sauna",
      "Bebidas isotónicas gratis",
      "1 Invitado al mes"
    ]
  },
  {
    name: "Elite",
    price: "89.99€",
    features: [
      "Todo lo incluido en Pro",
      "Entrenador personal (2x mes)",
      "Plan nutricional personalizado",
      "Toallas y servicio de lavandería",
      "Acceso prioritario a eventos"
    ]
  }
];

export const TRAINERS: Trainer[] = [
  {
    name: "Alex Johnson",
    role: "Head Coach & CrossFit",
    image: "https://picsum.photos/400/500?random=20"
  },
  {
    name: "Maria González",
    role: "Yoga & Movilidad",
    image: "https://picsum.photos/400/500?random=21"
  },
  {
    name: "Carlos Nuñez",
    role: "Musculación & Hipertrofia",
    image: "https://picsum.photos/400/500?random=22"
  }
];