import { Check, Copy } from 'lucide-react';
import { ColorPalette } from '../../types';
import { useState } from 'react';
import Card from '../ui/Card';

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
    <Card className="overflow-hidden group">
      <div className="p-4 space-y-4">
        {palette.brand && (
          <div className="flex items-center space-x-3">
            {palette.brand.logo && (
              <img
                src={palette.brand.logo}
                alt={`${palette.brand.name} logo`}
                className="w-8 h-8 rounded-full"
              />
            )}
            <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
              {palette.brand.name}
            </h3>
          </div>
        )}
        <div className="grid grid-cols-5 gap-2">
          {palette.colors.map((color) => (
            <button
              key={color}
              onClick={() => copyToClipboard(color)}
              className="relative group/color aspect-square rounded-lg overflow-hidden transition-transform hover:scale-105"
              style={{ backgroundColor: color }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/color:opacity-100 bg-black/20 transition-opacity">
                {copiedColor === color ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Copy className="w-5 h-5 text-white" />
                )}
              </div>
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-400">{palette.description}</p>
      </div>
    </Card>
  );
};

export default PaletteCard;