import { EventoEvent } from '@prisma/client';

export type EventsPageProps = {
  params: {
    city: string;
  };
};

export type EventsPageExtraProps = {
  params: {
    city: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type EventCardProps = {
  event: EventoEvent;
};

export type EventsListProps = {
  city: string;
  page: number;
};
