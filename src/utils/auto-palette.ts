// Types for color relationships and color modes
type ColorRelationship = {
    primary: string;
    secondary: string[];
    accent: string[];
    neutral: string[];
    base: string[];
};

type ColorMode = 'light' | 'dark';
type ColorHarmony = 'complementary' | 'analogous' | 'triadic' | 'split-complementary' | 'tetradic' | 'monochromatic';

// Enhanced pre-defined color palette dataset
const colorPaletteData: ColorRelationship[] = [
    // Modern Tech palette
    {
        primary: "#007AFF",
        secondary: ["#34C759", "#FF2D55", "#5856D6", "#FF9500"],
        accent: ["#00C7BE", "#AF52DE", "#FF3B30", "#FFD60A"],
        neutral: ["#F2F2F7", "#E5E5EA", "#C7C7CC", "#8E8E93", "#48484A"],
        base: ["#FFFFFF", "#F8F9FA", "#E9ECEF", "#DEE2E6", "#212529"]
    },
    // Nature-inspired palette
    {
        primary: "#2E7D32",
        secondary: ["#795548", "#1565C0", "#827717", "#00695C"],
        accent: ["#FDD835", "#FB8C00", "#C62828", "#6A1B9A"],
        neutral: ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#9CCC65", "#558B2F"],
        base: ["#FFFFFF", "#F9FBE7", "#F0F4C3", "#E6EE9C", "#1B5E20"]
    },
    // Sunset palette
    {
        primary: "#FF6B6B",
        secondary: ["#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"],
        accent: ["#FFD93D", "#FF8C42", "#FF5733", "#C70039"],
        neutral: ["#FFF5F5", "#FFE3E3", "#FFC9C9", "#FFA8A8", "#FF8787"],
        base: ["#FFFFFF", "#FFF9DB", "#FFF3BF", "#FFEC99", "#2D3436"]
    }
];

// Enhanced color harmony functions
const getTriadic = (hex: string): string[] => {
    const hsl = hexToHSL(hex);
    return [
        hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l)
    ];
};

const getSplitComplementary = (hex: string): string[] => {
    const hsl = hexToHSL(hex);
    return [
        hslToHex((hsl.h + 150) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 210) % 360, hsl.s, hsl.l)
    ];
};

const getTetradic = (hex: string): string[] => {
    const hsl = hexToHSL(hex);
    return [
        hslToHex((hsl.h + 90) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 270) % 360, hsl.s, hsl.l)
    ];
};

const getMonochromatic = (hex: string): string[] => {
    const hsl = hexToHSL(hex);
    return [
        hslToHex(hsl.h, Math.max(0, hsl.s - 0.3), hsl.l),
        hslToHex(hsl.h, Math.min(1, hsl.s + 0.3), hsl.l),
        hslToHex(hsl.h, hsl.s, Math.max(0, hsl.l - 0.3)),
        hslToHex(hsl.h, hsl.s, Math.min(1, hsl.l + 0.3))
    ];
};

// Function to generate color harmony based on selected type
const generateHarmony = (color: string, type: ColorHarmony): string[] => {
    switch (type) {
        case 'complementary':
            return [getComplementary(color)];
        case 'analogous':
            return getAnalogous(color);
        case 'triadic':
            return getTriadic(color);
        case 'split-complementary':
            return getSplitComplementary(color);
        case 'tetradic':
            return getTetradic(color);
        case 'monochromatic':
            return getMonochromatic(color);
        default:
            return [];
    }
};

// Dark mode variant generator
const generateDarkModeVariant = (palette: ColorRelationship): ColorRelationship => {
    return {
        primary: adjustBrightness(palette.primary, -0.3),
        secondary: palette.secondary.map(color => adjustBrightness(color, -0.3)),
        accent: palette.accent.map(color => adjustBrightness(color, -0.2)),
        neutral: [
            "#1A1A1A",
            "#2D2D2D",
            "#404040",
            "#666666",
            "#808080"
        ],
        base: [
            "#000000",
            "#121212",
            "#1E1E1E",
            "#2D2D2D",
            "#FFFFFF"
        ]
    };
};

// Function to generate accessibility-focused variants
const generateAccessibleVariants = (color: string): {
    normal: string;
    highContrast: string;
    lowContrast: string;
} => {
    const hsl = hexToHSL(color);
    return {
        normal: color,
        highContrast: hslToHex(hsl.h, hsl.s, Math.max(0.2, Math.min(0.8, hsl.l + 0.3))),
        lowContrast: hslToHex(hsl.h, Math.max(0.3, hsl.s - 0.2), hsl.l)
    };
};

// Enhanced palette generator with more options
const generateEnhancedPalette = (
    primaryColor: string,
    options: {
        harmonyType?: ColorHarmony;
        mode?: ColorMode;
        includeAccessible?: boolean;
    } = {}
): {
    light: ColorRelationship;
    dark?: ColorRelationship;
    accessible?: {
        primary: ReturnType<typeof generateAccessibleVariants>;
        secondary: ReturnType<typeof generateAccessibleVariants>[];
    };
} => {
    const harmony = generateHarmony(primaryColor, options.harmonyType || 'complementary');

    const lightPalette: ColorRelationship = {
        primary: primaryColor,
        secondary: harmony,
        accent: harmony.map(color => adjustBrightness(color, 0.2)),
        neutral: ["#F5F5F5", "#E0E0E0", "#CCCCCC", "#999999", "#666666"],
        base: ["#FFFFFF", "#F8F9FA", "#E9ECEF", "#DEE2E6", "#212529"]
    };

    const result: ReturnType<typeof generateEnhancedPalette> = { light: lightPalette };

    if (options.mode === 'dark' || options.mode === undefined) {
        result.dark = generateDarkModeVariant(lightPalette);
    }

    if (options.includeAccessible) {
        result.accessible = {
            primary: generateAccessibleVariants(primaryColor),
            secondary: harmony.map(color => generateAccessibleVariants(color))
        };
    }

    return result;
};

// Function to adjust color brightness
const adjustBrightness = (hex: string, percent: number): string => {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Adjust brightness
    const brightness = Math.round(percent * 255);
    const newR = Math.min(255, Math.max(0, r + brightness));
    const newG = Math.min(255, Math.max(0, g + brightness));
    const newB = Math.min(255, Math.max(0, b + brightness));

    // Convert back to hex
    const toHex = (n: number): string => {
        const hex = n.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
};

// Function to generate complementary color
const getComplementary = (hex: string): string => {
    // Remove # if present
    hex = hex.replace("#", "");

    // Convert to RGB
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    // Get complementary values
    const compR = 255 - r;
    const compG = 255 - g;
    const compB = 255 - b;

    // Convert back to hex
    return `#${compR.toString(16).padStart(2, "0")}${compG.toString(16).padStart(2, "0")}${compB.toString(16).padStart(2, "0")}`;
};

// Function to generate analogous colors
const getAnalogous = (hex: string): string[] => {
    // Convert hex to HSL
    const hsl = hexToHSL(hex);

    // Generate analogous colors (30 degrees apart)
    return [
        hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 60) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h - 60 + 360) % 360, hsl.s, hsl.l)
    ];
};

// Helper function: Convert hex to HSL
const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
    // Remove # if present
    hex = hex.replace("#", "");

    // Convert hex to RGB
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h *= 60;
    }

    return { h, s, l };
};

// Helper function: Convert HSL to hex
const hslToHex = (h: number, s: number, l: number): string => {
    const hue2rgb = (p: number, q: number, t: number): number => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, (h / 360 + 1 / 3));
        g = hue2rgb(p, q, h / 360);
        b = hue2rgb(p, q, (h / 360 - 1 / 3));
    }

    const toHex = (x: number): string => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export {
    colorPaletteData,
    generateEnhancedPalette,
    generateHarmony,
    generateDarkModeVariant,
    generateAccessibleVariants,
    type ColorRelationship,
    type ColorMode,
    type ColorHarmony
};