import Link from 'next/link';

export default function Home() {
  return (
    <main className='text-center flex flex-col gap-6'>
      <h1 className='text-6xl font-bold leading-none'>
        Find events around you
      </h1>
      <p className='text-3xl'>
        Browse more than{' '}
        <span className='italic underline text-accent'>10,000 events</span>{' '}
        around you
      </p>

      <form action='' className='mt-6'>
        <input
          type='text'
          name='location'
          placeholder='Search events in any city...'
          className='bg-gray-600 p-3 rounded-lg w-3/4 md:w-xl focus:bg-gray-700 focus:text-white ring-2 ring-gray-700 focus:ring-accent transition-colors duration-200 outline-none'
        />
      </form>

      <section className='text-sm flex justify-center gap-8 text-white/50'>
        <p>Popular:</p>
        <div className='flex gap-3'>
          <Link className='hover:text-white' href='/events/austin'>
            Austin
          </Link>
          <Link className='hover:text-white' href='/events/seattle'>
            Seattle
          </Link>
        </div>
      </section>
    </main>
  );
}
