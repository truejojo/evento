import EventsList from '@/components/EventsList';
import H1 from '@/components/H1';
import { EventsPageProps } from '@/types';
import { Suspense } from 'react';
import Loading from './loading';

const EventsPage = async ({ params }: EventsPageProps) => {
  const { city } = await params;

  return (
    <main className='flex flex-col items-center gap-20 min-h-[110vh] py-20'>
      {city === 'all' ? (
        <H1>All Events</H1>
      ) : (
        <H1>
          Events in <span className='capitalize'>{city}</span>
        </H1>
      )}

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
