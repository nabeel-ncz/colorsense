import PaletteCard from '../components/PaletteCard';
import { ColorPalette } from '../types';

interface BrandPalettesProps {
    title: string;
    description: string;
    palettes: ColorPalette[];
}

const BrandPalettes = ({ title, description, palettes }: BrandPalettesProps) => {
    return (
        <section className="pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {palettes.map((palette) => (
                        <PaletteCard key={palette.id} palette={palette} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandPalettes;