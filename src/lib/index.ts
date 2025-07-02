import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';
// import { EVENTO_MAIN_URL } from '@/constants';
import { EventoEvent } from '@prisma/client';
import prisma from './db';

// const prisma = new PrismaClient();

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
  // const response = await fetch(`${EVENTO_MAIN_URL}/events/${slug}`);
  // const event: EventoEvent = await response.json();

  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  return event as EventoEvent;
};

export const fetchEvents = async (city: string) => {
  // const response = await fetch(`${EVENTO_MAIN_URL}/events?city=${city}`, {
  //   next: {
  //     revalidate: 180,
  //   },
  // });
  // const events: EventoEvent[] = await response.json();

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
    orderBy: {
      date: 'asc',
    },
  });

  return events as EventoEvent[];
};
