export interface ColorPalette {
  id: string;
  name: string;
  description: string;
  colors: string[];
  brand?: {
    name: string;
    description: string;
    logo?: string;
  };
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}