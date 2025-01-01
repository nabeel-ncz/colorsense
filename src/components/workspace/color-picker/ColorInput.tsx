interface ColorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  alpha?: number;
}

const ColorInput = ({ label, value, onChange, placeholder, alpha = 1 }: ColorInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-500 dark:text-white/60">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2 text-gray-900 dark:text-white"
        placeholder={placeholder}
      />
      {alpha !== 1 && <span className="text-sm text-gray-500">{Math.round(alpha * 100)}%</span>}
    </div>
  );
}

export default ColorInput;