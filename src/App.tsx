import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PaletteWorkspace from './components/workspace/PaletteWorkspace';
import PaletteGrid from './components/PaletteGrid';
import FloatingObjects from './components/FloatingObjects';
import GradientBackground from './components/GradientBackground';
import { brandPalettes, presetPalettes } from './data/palettes';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async'
import Footer from './components/Footer';
import { NotFound } from './pages/NotFound';

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
                    />
                    <PaletteGrid
                      title="Curated Collections"
                      description="Hand-picked color combinations for your next creative project."
                      palettes={presetPalettes}
                    />
                  </>
                } />
                <Route
                  path="/brand-palettes"
                  element={
                    <PaletteGrid
                      title="Premium Brand Palettes"
                      description="Discover the color schemes behind the world's most recognized brands."
                      palettes={brandPalettes}
                    />
                  }
                />
                <Route
                  path="/curated-collections"
                  element={
                    <PaletteGrid
                      title="Curated Collections"
                      description="Hand-picked color combinations for your next creative project."
                      palettes={presetPalettes}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
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