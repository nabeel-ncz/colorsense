import { Circle, Triangle, Square } from 'lucide-react';

const shapes = [
  { Component: Circle, delay: '0s', duration: '15s', size: 24, opacity: '0.15' },
  { Component: Triangle, delay: '2s', duration: '18s', size: 32, opacity: '0.12' },
  { Component: Square, delay: '4s', duration: '20s', size: 28, opacity: '0.14' },
  { Component: Circle, delay: '3s', duration: '17s', size: 20, opacity: '0.1' },
  { Component: Triangle, delay: '5s', duration: '19s', size: 28, opacity: '0.08' },
  { Component: Square, delay: '1s', duration: '16s', size: 36, opacity: '0.12' },
  { Component: Circle, delay: '6s', duration: '21s', size: 40, opacity: '0.07' },
];

const FloatingObjects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map(({ Component, delay, duration, size, opacity }, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: delay,
            animationDuration: duration,
            opacity: opacity,
            filter: 'blur(0.5px)',
          }}
        >
          <Component 
            size={size} 
            className="dark:text-gray-600 text-gray-400"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingObjects;