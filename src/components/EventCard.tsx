import { EventCardProps } from '@/types';
import Image from 'next/image';

const EventCard = ({ event }: EventCardProps) => {
  return (
    <article className='flex flex-col bg-gray-800 rounded-xl'>
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
    </article>
  );
};

export default EventCard;
