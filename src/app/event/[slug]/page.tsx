import { URL } from '@/constants';
import { EventProps } from '@/types';
import Image from 'next/image';

type EventPageProps = {
  params: {
    slug: string;
  };
};

const EventPage = async ({ params }: EventPageProps) => {
  const { slug } = await params;

  const response = await fetch(`${URL}/events/${slug}`);
  const event: EventProps = await response.json();

  return (
    <main>
      <section className='relative h-[361px] overflow-hidden'>
        <Image
          src={event.imageUrl}
          className='object-cover blur-3xl'
          alt={`Event background image: ${event.name}`}
          fill
          quality={50}
          sizes='(maxwidth: 1280px) 100vw, 1280px'
          priority
        />
      </section>
    </main>
    // <article className='relative'>
    //   <div
    //     className='absolute top-0 left-0 right-0 h-[300px] bg-white/30 backdrop-blur-sm flex'
    //     style={{ backgroundImage: `url(${event.imageUrl})` }}
    //   >
    //     <div className=''>
    //       <Image
    //         src={event.imageUrl}
    //         alt={event.name}
    //         width={300}
    //         height={220}
    //       />
    //     </div>
    //     <div>
    //       <p>{event.date.toLocaleString()}</p>
    //       <h1>{event.name}</h1>
    //       <p>Organized by {event.organizerName}</p>
    //       <button type='button'>Get Tickets</button>
    //     </div>
    //   </div>
    //   <div className='absolute top-[300px] left-0 right-0'>
    //     <h2>About this event</h2>
    //     <p>{event.description}</p>
    //     <h2>Location</h2>
    //     <p>{event.location}</p>
    //   </div>
    // </article>
  );
};

export default EventPage;
