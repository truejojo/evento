import H1 from '@/components/H1';
import { EVENTO_MAIN_URL } from '@/constants';
import { sleep } from '@/lib';
import { EventProps } from '@/types';
import Image from 'next/image';

type EventPageProps = {
  params: {
    slug: string;
  };
};

const EventPage = async ({ params }: EventPageProps) => {
  const { slug } = await params;

  sleep(2000);
  const response = await fetch(`${EVENTO_MAIN_URL}/events/${slug}`);
  const event: EventProps = await response.json();

  const date = new Date(event.date);

  return (
    <main className='relative'>
      <section className='relative h-[400px] lg:h-[361px] overflow-hidden flex items-center justify-center'>
        <Image
          src={event.imageUrl}
          className='object-fit blur-3xl'
          alt={`Event background image: ${event.name}`}
          fill
          quality={50}
          sizes='(maxwidth: 1280px) 100vw, 1280px'
          priority
        />
        <div className='z-1 relative flex flex-col lg:flex-row gap-4 lg:gap-16 rounded-md'>
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={220}
            className='rounded-md'
          />
          <div className='flex flex-col gap-2 justify-center items-center lg:items-start'>
            <p className='text-white/75'>{date.toLocaleDateString()}</p>
            <H1>{event.name}</H1>
            <p className='text-white/50'>Organized by {event.organizerName}</p>
            <button
              className='bg-white/15 p-1 rounded-md hover:cursor-pointer hover:bg-white/25 transition-colors lg:mt-auto w-full'
              type='button'
            >
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className='top-[400px] lg:top-[361px] left-0 right-0 text-center pt-20 pb-20 pl-20 pr-20 lg:pl-60 lg:pr-60 flex flex-col gap-20'>
        <section>
          <h2 className='bold text-3xl mb-3'>About this event</h2>
          <p className='leading-8'>{event.description}</p>
        </section>
        <section>
          <h2 className='bold text-3xl mb-3'>Location</h2>
          <p className='leading-8'>{event.location}</p>
        </section>
      </div>
    </main>
  );
};

export default EventPage;
