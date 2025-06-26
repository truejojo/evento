import { EventsListProps } from '@/types';
import EventCard from './EventCard';

const EventsList = ({ events }: EventsListProps) => {
  return (
    <section className='flex flex-wrap gap-12 justify-center py-20'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
