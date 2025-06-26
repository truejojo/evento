'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const routerLinks = [
  { href: '/', label: 'Home' },
  { href: '/events/all', label: 'All Events' },
];

const Header = () => {
  const activeRoute = usePathname();

  return (
    <header className='flex justify-between items-center px-3 sm:px-6 md:px-9 lg:px-12 h-16 border-b-2 border-gray-800'>
      <Logo />
      <nav>
        <ul className='flex gap-x-4 relative h-16 items-center'>
          {routerLinks.map((link) => (
            <li
              key={link.href}
              className={clsx(
                'hover:text-white transition-colors duration-200 relative h-full flex items-center',
                {
                  'text-white': activeRoute === link.href,
                  'text-white/50': activeRoute !== link.href,
                },
              )}
            >
              <Link href={link.href}>{link.label}</Link>

              {activeRoute === link.href && (
                <motion.div
                  layoutId='link'
                  className='bg-green-300 h-1 w-full rounded-2xl absolute bottom-0'
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
