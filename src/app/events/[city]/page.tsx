import { Suspense } from 'react';
import type { Metadata } from 'next';
import EventsList from '@/components/EventsList';
import H1 from '@/components/H1';
import { EventsPageExtraProps, EventsPageProps } from '@/types';
import { capitalize } from '@/lib';
import Loading from './loading';

export const generateMetadata = async ({
  params,
}: EventsPageProps): Promise<Metadata> => {
  const { city } = await params;

  return {
    title: city === 'all' ? 'All events' : `Events in ${capitalize(city)}`,
  };
};

const EventsPage = async ({ params, searchParams }: EventsPageExtraProps) => {
  const { city } = await params;
  const { page } = (await searchParams) || 1;

  const safePage = page === undefined ? 1 : +page;

  return (
    <main className='flex flex-col items-center gap-20 min-h-[110vh] py-20'>
      {city === 'all' ? (
        <H1>All Events</H1>
      ) : (
        <H1>
          Events in <span className='capitalize'>{city}</span>
        </H1>
      )}

      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={+safePage} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
