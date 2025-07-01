import { EventProps, EventsListProps } from '@/types';
import EventCard from './EventCard';
import { EVENTO_MAIN_URL } from '@/constants';

/**
 * Problem bei dieser EventList ist, dass sie nicht wiederverwenbar ist. Um das data-fetchng zu vermeiden, ist es sinnvoll eine weitere Komponente(Wrapper) zu erstellen, welche die EventsList als Child Component hat.
 */
const EventsList = async ({ city }: EventsListProps) => {
  const response = await fetch(`${EVENTO_MAIN_URL}/events?city=${city}`, {
    next: {
      revalidate: 180,
    },
  });
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
