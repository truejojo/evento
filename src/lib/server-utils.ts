'server-only';

import prisma from './db';
import { EventoEvent } from '@prisma/client';
import { unstable_cache } from 'next/cache';
import { capitalize } from '.';

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
