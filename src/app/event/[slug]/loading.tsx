import Skeleton from '@/components/Skeleton';

const Loading = () => {
  return (
    <div className='grid justify-items-center gap-4 my-12'>
      <Skeleton className='h-6 w-[550px]' />
      <Skeleton className='h-6 w-[420px]' />
      <Skeleton className='h-6 w-[500px]' />
    </div>
  );
};

export default Loading;
