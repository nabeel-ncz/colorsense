import { useEffect, useState } from 'react';
import { Palette, Pipette, Sliders } from 'lucide-react';
import { motion } from 'framer-motion';
import ColorInput from './color-picker/ColorInput';
import RGBInputs from './color-picker/RGBInputs';
import ColorPreview from './color-picker/ColorPreview';
import { hexToRgb, rgbToHex } from '../../utils/color';
import { HuePicker, AlphaPicker } from "react-color";

const ColorPicker: React.FC<{ setPrimaryColor: React.Dispatch<React.SetStateAction<string>> }> = ({ setPrimaryColor }) => {
  const [hex, setHex] = useState('#3B82F6');
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [alpha, setAlpha] = useState(1);
  const [pickerMode, setPickerMode] = useState<'default' | 'eyedropper'>('default');
  const [showSliders, setShowSliders] = useState(false);

  useEffect(() => {
    setPrimaryColor(hex);
  }, [hex]);

  const handleRgbChange = (channel: 'r' | 'g' | 'b', value: number) => {
    setRgb(prev => ({ ...prev, [channel]: value }));
    setHex(rgbToHex(channel === 'r' ? value : rgb.r,
      channel === 'g' ? value : rgb.g,
      channel === 'b' ? value : rgb.b));
  };

  const handleHexChange = (value: string, newAlpha?: number) => {
    setHex(value);
    const rgbValue = hexToRgb(value);
    if (rgbValue) {
      setRgb(rgbValue);
      if (newAlpha !== undefined) {
        setAlpha(newAlpha);
      }
    }
  };

  const handleEyeDropper = async () => {
    if (!window.EyeDropper) {
      alert('Your browser doesn\'t support the EyeDropper API');
      return;
    }

    try {
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      handleHexChange(result.sRGBHex);
      setPickerMode('default');
    } catch (e) {
      setPickerMode('default');
    }
  };

  const getRgbaString = () => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

  const getHexWithAlpha = () => {
    const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
    return alpha === 1 ? hex : `${hex}${alphaHex}`;
  };

  return (
    <div className="dark:bg-white/5 bg-gray-50/90 backdrop-blur-md rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Color Picker</h3>
        <div className="flex gap-2">
          <button
            className={`p-2 rounded-lg transition-colors ${pickerMode === 'eyedropper'
              ? 'bg-gray-200 dark:bg-white/20'
              : 'hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
            onClick={() => {
              setPickerMode('eyedropper');
              handleEyeDropper();
            }}
          >
            <Pipette className="w-5 h-5 text-gray-700 dark:text-white/80" />
          </button>
          <button
            className={`p-2 rounded-lg transition-colors ${showSliders
              ? 'bg-gray-200 dark:bg-white/20'
              : 'hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
            onClick={() => setShowSliders(!showSliders)}
          >
            {showSliders ? (
              <Palette className="w-5 h-5 text-gray-700 dark:text-white/80" />
            ) : (
              <Sliders className="w-5 h-5 text-gray-700 dark:text-white/80" />
            )}
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
            value={getHexWithAlpha()}
            onChange={handleHexChange}
            placeholder="#000000FF"
            alpha={alpha}
          />
          {showSliders ? (
            <RGBInputs
              r={rgb.r}
              g={rgb.g}
              b={rgb.b}
              onChange={handleRgbChange}
            />
          ) : (
            <div className="w-full flex flex-col gap-2">
              <HuePicker
                color={hex}
                onChange={(color) => handleHexChange(color.hex)}
                height='30px'
                width='100%'
              />
              <AlphaPicker
                color={{ ...rgb, a: alpha }}
                onChange={(color) => {
                  setAlpha(color.rgb.a ?? 1);
                  handleHexChange(color.hex, color.rgb.a);
                }}
                height='30px'
                width='100%'
              />
            </div>
          )}
        </div>
        <ColorPreview color={getRgbaString()} />
      </motion.div>
    </div>
  );
};

export default ColorPicker;