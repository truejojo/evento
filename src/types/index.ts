export type EventsPageProps = {
  params: {
    city: string;
  };
};

export type EventProps = {
  id: number;
  name: string;
  slug: string;
  city: string;
  location: string;
  date: Date;
  organizerName: string;
  imageUrl: string;
  description: string;
};

export type EventCardProps = {
  event: EventProps;
};

export type EventsListProps = {
  events: EventProps[];
};
