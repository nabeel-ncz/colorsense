import { useState } from 'react';
import { motion } from 'framer-motion';
import ColorPicker from './ColorPicker';
import ContrastChecker from './ContrastChecker';
import PalettePreview from './PalettePreview';

interface IColors {
  primary: string
  secondary: string
  accent: string
  neutral: string
  base: string
}

const PaletteWorkspace = () => {
  const [primaryColor, setPrimaryColor] = useState<string>("#3B82F6");
  const [colors, setColors] = useState<IColors>({
    primary: '#3B82F6',
    secondary: '#6366F1',
    accent: '#8B5CF6',
    neutral: '#6B7280',
    base: '#1F2937'
  })
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:bg-gray-900">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6">
          <ColorPicker setPrimaryColor={setPrimaryColor} />
          <ContrastChecker />
        </div>
        <PalettePreview
          colors={colors}
          primaryColor={primaryColor}
          onPaletteChange={(newColors) => setColors(newColors)}
        />
      </motion.div>
    </div>
  );
};

export default PaletteWorkspace;