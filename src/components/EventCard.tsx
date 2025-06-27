import { EventCardProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link href={`/event/${event.slug}`}>
      <article className='flex flex-col bg-gray-800 rounded-xl relative transition hover:scale-105 active:scale-[1.02]'>
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={384}
          height={256}
          className='rounded-t-xl'
        />
        <div className='flex flex-col justify-center items-center p-8'>
          <h2 className='text-2xl bold'>{event.name}</h2>
          <p className='text-white/50'>{event.organizerName}</p>
          <p className='text-white/70 pt-6'>{event.location}</p>
        </div>
        <div className='absolute top-[12px] left-[12px] w-[45px] h-[45px]'>
          <p className='text-xl font-bold'>
            {new Date(event.date).toLocaleDateString('de-DE', {
              day: '2-digit',
            })}
          </p>
          <p className='text sx uppercase text-green-300'>
            {new Date(event.date).toLocaleDateString('de-DE', {
              month: 'short',
            })}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default EventCard;
