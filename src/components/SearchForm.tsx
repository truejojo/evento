'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    // encodeURIComponent() behandelt Sonderzeichen (z.B. "New York" → "new%20york")
    const normalizedCity = encodeURIComponent(searchText.trim().toLowerCase());
    router.push(`/events/${normalizedCity}`);

    setSearchText('');
  };

  return (
    <form action='' onSubmit={handleSubmit} className='mt-6'>
      <input
        type='text'
        name='location'
        placeholder='Search events in any city...'
        className='bg-gray-600 p-3 rounded-lg w-3/4 md:w-xl focus:bg-gray-700 focus:text-white ring-2 ring-gray-700 focus:ring-accent transition-colors duration-200 outline-none'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
