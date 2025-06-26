import EventsList from '@/components/EventsList';
import H1 from '@/components/H1';
import { EventsPageProps, EventProps } from '@/types';

const URL = 'https://bytegrad.com/course-assets/projects/evento/api';

const EventsPage = async ({ params }: EventsPageProps) => {
  const { city } = await params;

  const response = await fetch(`${URL}/events?city=${city}`);
  const events: EventProps[] = await response.json();

  return (
    <main className='flex flex-col items-center min-h-[110vh] pt-20'>
      {city === 'all' ? (
        <H1>All Events</H1>
      ) : (
        <H1>
          Events in <span className='capitalize'>{city}</span>
        </H1>
      )}
      <EventsList events={events} />
    </main>
  );
};

export default EventsPage;
