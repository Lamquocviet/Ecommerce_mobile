type SkeletonLoaderProps = {
  className?: string;
};

export const SkeletonLoader = ({ className = '' }: SkeletonLoaderProps) => {
  return <div className={`animate-pulse rounded-4xl bg-white/5 ${className}`} />;
};
