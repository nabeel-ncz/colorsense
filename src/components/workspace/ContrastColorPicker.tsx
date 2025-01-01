import { useState } from 'react';
import { Pipette } from 'lucide-react';
import { motion } from 'framer-motion';
import { HuePicker } from "react-color";

interface ContrastColorPickerProps {
    initialColor: string;
    onColorChange: (color: string) => void;
    label: string;
    isActive: boolean;
    onSelect: () => void;
}

const ContrastColorPicker = ({
    initialColor,
    onColorChange,
    label,
    isActive,
    onSelect
}: ContrastColorPickerProps) => {
    const [hex, setHex] = useState(initialColor);
    const [showPicker, setShowPicker] = useState(false);

    const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
            setHex(value);
            if (value.length === 7) {
                onColorChange(value);
            }
        }
    };

    const handleEyeDropper = async () => {
        if (!window.EyeDropper) {
            alert('Your browser doesn\'t support the EyeDropper API');
            return;
        }

        try {
            const eyeDropper = new window.EyeDropper();
            const result = await eyeDropper.open();
            setHex(result.sRGBHex);
            onColorChange(result.sRGBHex);
        } catch (e) {
            // User cancelled or error occurred
            console.error(e);
        }
    };

    return (
        <div className="relative">
            <label className="text-gray-500 dark:text-white/60 text-sm mb-2 block">{label}</label>
            <button
                className={`h-20 w-full rounded-lg border ${isActive ? 'border-blue-500' : 'border-gray-200 dark:border-white/10'
                    }`}
                style={{ backgroundColor: hex }}
                onClick={() => {
                    onSelect();
                    setShowPicker(!showPicker);
                }}
            />
            {isActive && showPicker && (
                <motion.div
                    className="absolute z-10 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-full"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={hex}
                                onChange={handleHexChange}
                                className="w-full dark:text-white text-gray-900 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                                placeholder="#000000"
                            />
                            <button
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                onClick={handleEyeDropper}
                            >
                                <Pipette className="w-5 h-5 text-gray-700 dark:text-white/80" />
                            </button>
                        </div>
                        <HuePicker
                            color={hex}
                            onChange={(color) => {
                                setHex(color.hex);
                                onColorChange(color.hex);
                            }}
                            width="100%"
                        />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ContrastColorPicker;