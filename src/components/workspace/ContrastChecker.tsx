import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { calculateContrastRatio, getWCAGLevel } from '../../utils/color';
import ContrastColorPicker from './ContrastColorPicker';

const ContrastChecker = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');
  const [activeColor, setActiveColor] = useState<'background' | 'text'>('background');

  const contrastRatio = calculateContrastRatio(backgroundColor, textColor);
  const wcagLevel = getWCAGLevel(contrastRatio);

  const getStatusColor = () => {
    if (wcagLevel === 'AAA') return 'text-green-600 dark:text-green-400';
    if (wcagLevel === 'AA') return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <motion.div
      className="dark:bg-white/5 bg-gray-50/90 backdrop-blur-md rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-4">Contrast Checker</h3>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <ContrastColorPicker
              label="Background Color"
              initialColor={backgroundColor}
              onColorChange={setBackgroundColor}
              isActive={activeColor === 'background'}
              onSelect={() => setActiveColor('background')}
            />
          </div>
          <div className="flex-1">
            <ContrastColorPicker
              label="Text Color"
              initialColor={textColor}
              onColorChange={setTextColor}
              isActive={activeColor === 'text'}
              onSelect={() => setActiveColor('text')}
            />
          </div>
        </div>
        <div className="rounded-lg p-6 text-center" style={{ backgroundColor, color: textColor }}>
          <h4 className="text-2xl font-bold mb-2">Sample Text</h4>
          <p>This is how your text will look like with the selected colors.</p>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-white/80">Contrast Ratio</span>
            <span className="text-gray-900 dark:text-white font-semibold">{contrastRatio.toFixed(2)}:1</span>
          </div>
          <div className={`flex items-center gap-2 ${getStatusColor()}`}>
            {wcagLevel === 'Fail' ? (
              <X className="w-4 h-4" />
            ) : (
              <Check className="w-4 h-4" />
            )}
            <span className="text-sm">
              {wcagLevel === 'Fail'
                ? 'Fails WCAG Requirements'
                : `Passes WCAG ${wcagLevel}`}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContrastChecker;
