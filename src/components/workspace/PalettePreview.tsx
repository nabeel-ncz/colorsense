import { motion } from 'framer-motion';
import { Copy, Download, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface PalettePreviewProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    base: string;
  };
}

const PalettePreview = ({ colors }: PalettePreviewProps) => {
  const [copied, setCopied] = useState(false);

  const cssVariables = `
:root {
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
  --color-neutral: ${colors.neutral};
  --color-base: ${colors.base};
}`.trim();

  const handleCopyCSS = async () => {
    await navigator.clipboard.writeText(cssVariables);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = () => {
    const blob = new Blob([cssVariables], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'palette.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div 
      className="dark:bg-white/5 bg-gray-50/90 backdrop-blur-md rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Preview</h3>
        <div className="flex gap-2">
          <button 
            onClick={handleCopyCSS}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-gray-700 dark:text-white"
          >
            {copied ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{copied ? 'Copied!' : 'Copy CSS'}</span>
          </button>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-gray-700 dark:text-white"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-5 gap-2 h-24">
          {Object.values(colors).map((color, i) => (
            <div 
              key={i}
              className="rounded-lg"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-4">
          <pre className="text-sm text-gray-600 dark:text-white/80 font-mono overflow-x-auto">
            {cssVariables}
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

export default PalettePreview;