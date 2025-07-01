import { EventProps, EventsListProps } from '@/types';
import EventCard from './EventCard';
import { sleep } from '@/lib';
import { EVENTO_MAIN_URL } from '@/constants';

const EventsList = async ({ city }: EventsListProps) => {
  sleep(2000);
  const response = await fetch(`${EVENTO_MAIN_URL}/events?city=${city}`);
  const events: EventProps[] = await response.json();

  return (
    <section className='flex flex-wrap gap-12 justify-center'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
