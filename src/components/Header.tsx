import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <Logo />
      <Link href='/'>Home</Link>
      <Link href='/events/something'>All Events</Link>
    </header>
  );
};

export default Header;
