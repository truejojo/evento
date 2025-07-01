import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';
import { EVENTO_MAIN_URL } from '@/constants';
import { EventProps } from '@/types';

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
  const response = await fetch(`${EVENTO_MAIN_URL}/events/${slug}`);
  const event: EventProps = await response.json();

  return event;
};

/**
 * Problem bei dieser EventList ist, dass sie nicht wiederverwenbar ist. Um das data-fetchng zu vermeiden, ist es sinnvoll eine weitere Komponente(Wrapper) zu erstellen, welche die EventsList als Child Component hat.
 */
export const fetchEvents = async (city: string) => {
  const response = await fetch(`${EVENTO_MAIN_URL}/events?city=${city}`, {
    next: {
      revalidate: 180,
    },
  });
  const events: EventProps[] = await response.json();

  return events;
};
