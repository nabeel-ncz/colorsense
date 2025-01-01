import { motion } from 'framer-motion';
import { Copy, Download, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ColorHarmony, ColorMode, generateEnhancedPalette } from '../../utils/auto-palette';

interface PalettePreviewProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    base: string;
  };
  primaryColor: string;
  onPaletteChange: (colors: PalettePreviewProps['colors']) => void;
}

const PalettePreview = ({ colors, primaryColor, onPaletteChange }: PalettePreviewProps) => {
  const [copied, setCopied] = useState(false);
  const [harmonyType, setHarmonyType] = useState<ColorHarmony>('complementary');
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const [includeAccessible, setIncludeAccessible] = useState(false);

  useEffect(() => {
    regeneratePalette(colorMode, harmonyType, includeAccessible);
  }, [primaryColor]);

  const regeneratePalette = (
    colorMode: ColorMode,
    harmonyType: ColorHarmony,
    includeAccessible: boolean
  ) => {
    const newPalette = generateEnhancedPalette(primaryColor, {
      harmonyType,
      mode: colorMode,
      includeAccessible,
    });
    const paletteToUse = colorMode === 'light' ? newPalette.light : newPalette.dark!;
    onPaletteChange({
      primary: paletteToUse.primary,
      secondary: paletteToUse.secondary[0] || colors.secondary,
      accent: paletteToUse.accent[0] || colors.accent,
      neutral: paletteToUse.neutral[0] || colors.neutral,
      base: paletteToUse.base[0] || colors.base,
    });
  };

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
      <div className="mb-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Harmony Type
            </label>
            <select
              value={harmonyType}
              onChange={(e) => {
                setHarmonyType(e.target.value as ColorHarmony);
                regeneratePalette(colorMode, e.target.value as ColorHarmony, includeAccessible);
              }}
              className="w-full text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
            >
              <option value="complementary">Complementary</option>
              <option value="analogous">Analogous</option>
              <option value="triadic">Triadic</option>
              <option value="split-complementary">Split Complementary</option>
              <option value="tetradic">Tetradic</option>
              <option value="monochromatic">Monochromatic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Color Mode
            </label>
            <select
              value={colorMode}
              onChange={(e) => {
                setColorMode(e.target.value as ColorMode);
                regeneratePalette(e.target.value as ColorMode, harmonyType, includeAccessible);
              }}
              className="w-full text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="accessible"
            checked={includeAccessible}
            onChange={(e) => {
              setIncludeAccessible(e.target.checked);
              regeneratePalette(colorMode, harmonyType, e.target.checked);
            }}
            className="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary"
          />
          <label htmlFor="accessible" className="ml-2 text-sm text-gray-700 dark:text-gray-200">
            Include Accessible Variants
          </label>
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