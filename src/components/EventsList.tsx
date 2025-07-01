import { EventsListProps } from '@/types';
import EventCard from './EventCard';
import { fetchEvents } from '@/lib';

/**
 * Problem bei dieser EventList ist, dass sie nicht wiederverwenbar ist. Um das data-fetchng zu vermeiden, ist es sinnvoll eine weitere Komponente(Wrapper) zu erstellen, welche die EventsList als Child Component hat.
 */
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
