interface ColorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ColorInput = ({ label, value, onChange, placeholder }: ColorInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white/60">{label}</label>
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white"
        placeholder={placeholder}
      />
    </div>
  );
}

export default ColorInput;