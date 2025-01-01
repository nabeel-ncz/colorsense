import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const ContrastChecker = () => {
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
            <label className="text-gray-500 dark:text-white/60 text-sm mb-2 block">Background Color</label>
            <div className="h-20 bg-white rounded-lg border border-gray-200 dark:border-white/10" />
          </div>
          <div className="flex-1">
            <label className="text-gray-500 dark:text-white/60 text-sm mb-2 block">Text Color</label>
            <div className="h-20 bg-black rounded-lg border border-gray-200 dark:border-white/10" />
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-white/80">Contrast Ratio</span>
            <span className="text-gray-900 dark:text-white font-semibold">21:1</span>
          </div>
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">Passes WCAG AAA</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContrastChecker;