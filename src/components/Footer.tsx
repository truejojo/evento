import Link from 'next/link';

const routerLinks = [
  { href: '/terms-conditions', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const Footer = () => {
  return (
    <footer className='mt-auto flex justify-between items-center border-t-2 border-gray-800 h-16 px-3 sm:px-6 md:px-9 lg:px-12'>
      <span className='text-white/50 text-sm'>
        &copy; 2050 ByteGrad. All rights reserved.
      </span>
      <div>
        {routerLinks.map((link) => (
          <span key={link.href} className='mx-2'>
            <Link
              href={link.href}
              className='text-white/50 hover:text-white text-sm transition-colors duration-200'
            >
              {link.label}
            </Link>
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
