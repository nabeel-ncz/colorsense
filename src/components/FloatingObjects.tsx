import { Circle, Triangle, Square } from 'lucide-react';

const shapes = [
  { Component: Circle, delay: '0s', duration: '15s', size: 24 },
  { Component: Triangle, delay: '2s', duration: '18s', size: 32 },
  { Component: Square, delay: '4s', duration: '20s', size: 28 },
];

const FloatingObjects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map(({ Component, delay, duration, size }, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10 dark:opacity-5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Component size={size} />
        </div>
      ))}
    </div>
  );
};

export default FloatingObjects;