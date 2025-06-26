'use client';

import { FormEvent, useState } from 'react';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
