import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white/5 backdrop-blur-sm rounded-xl border border-white/10',
          'transition-all duration-300',
          { 'hover:scale-[1.02] hover:bg-white/10': hover },
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export default Card;