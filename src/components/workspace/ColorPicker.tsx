import { useState } from 'react';
import { Pipette, Sliders } from 'lucide-react';
import { motion } from 'framer-motion';
import ColorInput from './color-picker/ColorInput';
import RGBInputs from './color-picker/RGBInputs';
import ColorPreview from './color-picker/ColorPreview';
import { hexToRgb, rgbToHex } from '../../utils/color';

const ColorPicker = () => {
  const [hex, setHex] = useState('#3B82F6');
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });

  const handleRgbChange = (channel: 'r' | 'g' | 'b', value: number) => {
    setRgb(prev => ({ ...prev, [channel]: value }));
    setHex(rgbToHex(channel === 'r' ? value : rgb.r, 
                    channel === 'g' ? value : rgb.g, 
                    channel === 'b' ? value : rgb.b));
  };

  const handleHexChange = (value: string) => {
    setHex(value);
    const rgbValue = hexToRgb(value);
    if (rgbValue) {
      setRgb(rgbValue);
    }
  };

  return (
    <div className="dark:bg-white/5 bg-gray-50/90 backdrop-blur-md rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Color Picker</h3>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">
            <Pipette className="w-5 h-5 text-gray-700 dark:text-white/80" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">
            <Sliders className="w-5 h-5 text-gray-700 dark:text-white/80" />
          </button>
        </div>
      </div>
      <motion.div 
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="space-y-4">
          <ColorInput
            label="Hex"
            value={hex}
            onChange={handleHexChange}
            placeholder="#000000"
          />
          <RGBInputs
            r={rgb.r}
            g={rgb.g}
            b={rgb.b}
            onChange={handleRgbChange}
          />
        </div>
        <ColorPreview color={hex} />
      </motion.div>
    </div>
  );
};

export default ColorPicker;