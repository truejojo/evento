import { EventsListProps } from '@/types';
import EventCard from './EventCard';
import { fetchEvents } from '@/lib';

const EventsList = async ({ city }: EventsListProps) => {
  const events = await fetchEvents(city);

  return (
    <section className='flex flex-wrap gap-12 justify-center'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
