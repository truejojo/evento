import { URL } from '@/constants';
import { EventProps } from '@/types';

type EventPageProps = {
  params: {
    slug: string;
  };
};

const EventPage = async ({ params }: EventPageProps) => {
  const { slug } = await params;

  console.log(slug);
  const response = await fetch(`${URL}/events/${slug}`);

  const event: EventProps = await response.json();
  console.log(event);

  return (
    <article>
      <h1>{event.name}</h1>
    </article>
  );
};

export default EventPage;
