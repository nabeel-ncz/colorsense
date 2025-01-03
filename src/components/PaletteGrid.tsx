import PaletteCard from './PaletteCard';
import { ColorPalette } from '../types';
import { useNavigate } from 'react-router-dom';

interface PaletteGridProps {
  title: string;
  description: string;
  palettes: ColorPalette[];
  path?: string;
}

const PaletteGrid = ({ title, description, palettes, path = 'brand-palettes' }: PaletteGridProps) => {
  const nav = useNavigate();
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {palettes.map((palette) => (
            <PaletteCard key={palette.id} palette={palette} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => { nav(path) }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full 
            text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
            dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 
            shadow-sm transition-all duration-150 ease-in-out"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaletteGrid;