const SkeletonCard = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className={`animate-pulse bg-white/5 h-12 w-12 rounded-full mb-4`} />
      <div className={`animate-pulse rounded-md bg-white/5 h-8 w-30 mb-6`} />

      <div className={`animate-pulse rounded-md bg-white/5 h-4 w-40 lg:w-80`} />
      <div className={`animate-pulse rounded-md bg-white/5 h-4 w-40 lg:w-80`} />
      <div className={`animate-pulse rounded-md bg-white/5 h-4 w-40 lg:w-80`} />
    </div>
  );
};

export default SkeletonCard;
