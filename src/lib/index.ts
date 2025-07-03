import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/** War für temporäre Zwecke, um die fetch-Funktionen zu testen und die Loading-Komponenten. */
export const sleep = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const capitalize = (str: string) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
