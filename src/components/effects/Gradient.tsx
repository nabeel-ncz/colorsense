import { cn } from '../../utils/cn';

interface GradientProps {
  variant?: 'radial' | 'linear';
  className?: string;
}

const Gradient = ({ variant = 'radial', className }: GradientProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none opacity-50',
        {
          'bg-gradient-radial from-indigo-500/20 via-purple-500/10 to-transparent': variant === 'radial',
          'bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent': variant === 'linear',
        },
        className
      )}
    />
  );
};

export default Gradient;