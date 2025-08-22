import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getNavbarStyles = (variant: string) => {
  switch (variant) {
    case "current":
      return "bg-[#0D3E50] text-white";
    case "gold":
      return "bg-[#F5E6B8] text-[#0D3E50]";
    case "split":
      return "bg-white text-[#0D3E50] border-b border-gray-200";
    case "minimal":
      return "bg-white text-[#0D3E50] border-b border-gray-200";
    case "luxury":
      return "bg-[#0D3E50] text-white";
    case "gradient":
      return "bg-gradient-to-r from-[#0D3E50] via-[#1A5A6B] to-[#0D3E50] text-white relative overflow-hidden";
    default:
      return "bg-[#0D3E50] text-white";
  }
};

export const getButtonStyles = (variant: string) => {
  switch (variant) {
    case "current":
      return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
    case "gold":
      return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
    case "split":
      return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
    case "minimal":
      return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
    case "luxury":
      return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
    case "gradient":
      return "bg-gradient-to-r from-[#D4A33A] to-[#F5D76E] hover:from-[#B8921F] hover:to-[#D4A33A] text-white shadow-lg";
    default:
      return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
  }
};
