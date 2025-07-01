import SkeletonCard from '@/components/SkeletonCard';

const Loading = () => {
  return (
    <div className='animate-pulse flex gap-6 lg:gap-12 flex-wrap justify-center px-10 lg:px-50 my-12'>
      {[...Array(6)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default Loading;
