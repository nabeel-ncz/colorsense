interface RGBInputsProps {
  r: number;
  g: number;
  b: number;
  onChange: (channel: 'r' | 'g' | 'b', value: number) => void;
}

const RGBInputs = ({ r, g, b, onChange }: RGBInputsProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-500 dark:text-white/60">RGB</label>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'R', value: r },
          { label: 'G', value: g },
          { label: 'B', value: b }
        ].map(({ label, value }) => (
          <input
            key={label}
            type="number"
            min="0"
            max="255"
            value={value}
            onChange={(e) => onChange(label.toLowerCase() as 'r' | 'g' | 'b', parseInt(e.target.value) || 0)}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2 text-gray-900 dark:text-white"
            placeholder={label}
          />
        ))}
      </div>
    </div>
  );
}

export default RGBInputs;