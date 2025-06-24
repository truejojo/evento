import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href='/'>Home</Link>
      <Link href='/events/something'>All Events</Link>
    </header>
  );
};

export default Header;
