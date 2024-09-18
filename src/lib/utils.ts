import Resizer from "react-image-file-resizer";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIssuesLink() {
  return process.env.ISSUES_LINK as string;
}

export function getA7medInstagram() {
  return `https://instagram.com/qhmedhazem`;
}

export function getMohamedInstagram() {
  return `https://www.instagram.com/mohaamed.wasfy/`;
}

export function captilazeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const resizeAvatar = (file: File): Promise<string> =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri as string);
      },
      "base64"
    );
  });
