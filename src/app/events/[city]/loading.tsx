import Skeleton from '@/components/skeleton';

const Loading = () => {
  return (
    <div className='animate-pulse grid gap-4 justify-center my-12'>
      <Skeleton className='h-6 w-[550px]' />
      <Skeleton className='h-6 w-[420px]' />
      <Skeleton className='h-6 w-[500px]' />
    </div>
  );
};

export default Loading;
