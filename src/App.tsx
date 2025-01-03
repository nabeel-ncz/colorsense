import { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PaletteWorkspace from './components/workspace/PaletteWorkspace';
import PaletteGrid from './components/PaletteGrid';
import FloatingObjects from './components/FloatingObjects';
import GradientBackground from './components/GradientBackground';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async'
import Footer from './components/Footer';
import Loading from './pages/Loading';
const NotFound = lazy(() => import('./pages/NotFound'));
const BrandPalettes = lazy(() => import('./pages/BrandPalettes'));
const CuratedCollections = lazy(() => import('./pages/CuratedCollections'));
import { brandPalettes, presetPalettes, extendedBrandPalettes, extendedPresetPalettes } from './data/palettes';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-transparent transition-colors">
            <GradientBackground />
            <FloatingObjects />
            <Navbar />
            <main className="relative">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <PaletteWorkspace />
                    <PaletteGrid
                      title="Premium Brand Palettes"
                      description="Discover the color schemes behind the world's most recognized brands."
                      palettes={brandPalettes}
                      path="brand-palettes"
                    />
                    <PaletteGrid
                      title="Curated Collections"
                      description="Hand-picked color combinations for your next creative project."
                      palettes={presetPalettes}
                      path="curated-collections"
                    />
                  </>
                } />
                <Route
                  path="/brand-palettes"
                  element={
                    <Suspense fallback={<Loading />}>
                      <BrandPalettes
                        title="Premium Brand Palettes"
                        description="Discover the color schemes behind the world's most recognized brands."
                        palettes={extendedBrandPalettes}
                      />
                    </Suspense>
                  }
                />
                <Route
                  path="/curated-collections"
                  element={
                    <Suspense fallback={<Loading />}>
                      <CuratedCollections
                        title="Curated Collections"
                        description="Hand-picked color combinations for your next creative project."
                        palettes={extendedPresetPalettes}
                      />
                    </Suspense>
                  }
                />
                <Route path="*" element={
                  <Suspense fallback={<Loading />}>
                    <NotFound />
                  </Suspense>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;