import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';
import prisma from './db';
import { EventoEvent } from '@prisma/client';
import { unstable_cache } from 'next/cache';

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

export const fetchEvent = unstable_cache(
  async (slug: string): Promise<EventoEvent> => {
    const event = await prisma.eventoEvent.findUnique({
      where: {
        slug,
      },
    });

    if (!event) {
      throw new Error('Event not found');
    }

    return event as EventoEvent;
  },
);

export const fetchEvents = unstable_cache(async (city: string, page = 1) => {
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

  const totalCount =
    city === 'all'
      ? await prisma.eventoEvent.count()
      : await prisma.eventoEvent.count({
          where: {
            city: capitalize(city),
          },
        });

  return { events, totalCount };
});
