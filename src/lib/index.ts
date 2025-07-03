import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';
import prisma from './db';
import notFound from '@/app/not-found';

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

export const fetchEvent = async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
};

export const fetchEvents = async (city: string, page = 1) => {
  const pageSize = 6;
  const safePage = Math.max(1, page);

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
    orderBy: {
      date: 'asc',
    },
    skip: (safePage - 1) * pageSize,
    take: pageSize,
  });

  // let totalCount;
  // if (city === 'all') {
  //   totalCount = await prisma.eventoEvent.count();
  // } else {
  //   totalCount = await prisma.eventoEvent.count({
  //     where: {
  //       city: capitalize(city),
  //     },
  //   });
  // }
  const totalCount =
    city === 'all'
      ? await prisma.eventoEvent.count()
      : await prisma.eventoEvent.count({
          where: {
            city: capitalize(city),
          },
        });

  return { events, totalCount };
};
