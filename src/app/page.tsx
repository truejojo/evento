import H1 from '@/components/H1';
import SearchForm from '@/components/SearchForm';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='text-center flex flex-col gap-6 '>
      <H1>Find events around you</H1>
      <p className='text-3xl'>
        Browse more than{' '}
        <span className='italic underline text-accent'>10,000 events</span>{' '}
        around you
      </p>

      <SearchForm />

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
