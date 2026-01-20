import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with conditional classes
 * Combines clsx for conditional classes and tailwind-merge to resolve conflicts
 * @param inputs - Class names or conditional class objects
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}




/**
 * Extract initials from a string which mostly a person't name
 * @param name - function receive a name that must be a string
 * Example: "John Doe" -> "JD", "John" -> "JO"
 * @example getInitials("John Doe")
 */

export const getInitials = (name: string | null | undefined): string => {
 // Runtime Guard
 if (!name) return "";

 // remove extra spaces, tab, enter
 const parts = name.trim().split(/\s+/);

 // if somehow the input is just empty " " string it return immidiately 
 if(parts.length === 0) return ""; 
 
 if (parts.length === 1) {
  return parts[0].slice(0, 2).toUpperCase();
}

const firstInitial = parts[0][0];
const lastInitial = parts[parts.length - 1][0];

return (firstInitial + lastInitial).toUpperCase();
}