import { EventsListProps } from '@/types';
import EventCard from './EventCard';
import { fetchEvents } from '@/lib';
import Pagination from '@/components/Pagination';

/**
 * Problem bei dieser EventList ist, dass sie nicht wiederverwenbar ist. Um das data-fetchng zu vermeiden, ist es sinnvoll eine weitere Komponente(Wrapper) zu erstellen, welche die EventsList als Child Component hat.
 */
const EventsList = async ({ city, page }: EventsListProps) => {
  const { events, totalCount } = await fetchEvents(city, page);
  const totalPages = Math.ceil(totalCount / 6);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : '';
  const nextPath = page < totalPages ? `/events/${city}?page=${page + 1}` : '';

  return (
    <section className='flex flex-wrap gap-12 justify-center'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <Pagination previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
};

export default EventsList;
