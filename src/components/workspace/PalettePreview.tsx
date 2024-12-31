import { motion } from 'framer-motion';
import { Copy, Download } from 'lucide-react';

const PalettePreview = () => {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-md rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Preview</h3>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white">
            <Copy className="w-4 h-4" />
            <span>Copy CSS</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-5 gap-2 h-24">
          {Array(5).fill(null).map((_, i) => (
            <div 
              key={i}
              className="rounded-lg bg-gradient-to-br from-white/20 to-white/10"
            />
          ))}
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <pre className="text-sm text-white/80 font-mono">
            {`:root {
  --color-primary: #3B82F6;
  --color-secondary: #6366F1;
  --color-accent: #8B5CF6;
  --color-neutral: #6B7280;
  --color-base: #1F2937;
}`}
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

export default PalettePreview;