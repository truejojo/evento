import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const linkStyle =
  'flex items-center gap-2 text-sm px-5 py-2 bg-white/24 hover:bg-white/50 transition rounded-md';

type PaginationProps = {
  previousPath: string;
  nextPath: string;
};

const Pagination = ({ previousPath, nextPath }: PaginationProps) => {
  return (
    <div className='flex justify-between items-center w-full'>
      {previousPath !== '' ? (
        <Link className={linkStyle} href={previousPath}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link className={linkStyle} href={nextPath}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
