import Link from 'next/link';
import Logo from './Logo';

const routerLinks = [
  { href: '/', label: 'Home' },
  { href: '/events/something', label: 'Events' },
];

const Header = () => {
  return (
    <header className='flex justify-between items-center px-3 sm:px-6 md:px-9 lg:px-12 h-16 border-b-2 border-gray-800'>
      <Logo />
      <nav>
        <ul className='flex gap-x-4'>
          {routerLinks.map((link) => (
            <li
              key={link.href}
              className='text-white/50 hover:text-white transition-colors duration-200'
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
