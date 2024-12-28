import { LucideProps, Lock, Box, HandHeart } from "lucide-react";




//types

export type serviceType = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  titre: string;
  description: string;
};

// data

export const services: serviceType[] = [
  {
    icon: Lock,
    titre: "Secure Payment",
    description: "All our payments our SSL secured",
  },
  {
    icon: Box,
    titre: "Delivered With Care",
    description: "Super fast shipping to your door",
  },
  {
    icon: HandHeart,
    titre: "Excellent Service",
    description: "Live chat and phone support",
  },
];
