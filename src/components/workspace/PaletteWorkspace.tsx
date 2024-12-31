import { motion } from 'framer-motion';
import ColorPicker from './ColorPicker';
import ContrastChecker from './ContrastChecker';
import PalettePreview from './PalettePreview';

const PaletteWorkspace = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6">
          <ColorPicker />
          <ContrastChecker />
        </div>
        <PalettePreview />
      </motion.div>
    </div>
  );
};

export default PaletteWorkspace;