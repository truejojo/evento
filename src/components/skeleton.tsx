import { cn } from '@/lib';

type SkeletonProps = {
  className: string;
};

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <>
      <div className={(cn('rounded-md bg-white/5'), className)} />
    </>
  );
};

export default Skeleton;
