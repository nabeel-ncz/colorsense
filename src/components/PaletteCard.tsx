import { Check, Copy } from 'lucide-react';
import { ColorPalette } from '../types';
import { useState } from 'react';

interface PaletteCardProps {
  palette: ColorPalette;
}

const PaletteCard = ({ palette }: PaletteCardProps) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="p-4">
        {palette.brand && (
          <div className="flex items-center mb-4">
            {palette.brand.logo && (
              <img
                src={palette.brand.logo}
                alt={`${palette.brand.name} logo`}
                className="w-8 h-8 rounded-full mr-3"
              />
            )}
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {palette.brand.name}
            </h3>
          </div>
        )}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {palette.colors.map((color) => (
            <button
              key={color}
              onClick={() => copyToClipboard(color)}
              className="relative group aspect-square rounded-lg overflow-hidden"
              style={{ backgroundColor: color }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity">
                {copiedColor === color ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Copy className="w-5 h-5 text-white" />
                )}
              </div>
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {palette.description}
        </p>
      </div>
    </div>
  );
};

export default PaletteCard;