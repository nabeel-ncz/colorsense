import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PaletteWorkspace from './components/workspace/PaletteWorkspace';
import PaletteGrid from './components/PaletteGrid';
import FloatingObjects from './components/FloatingObjects';
import GradientBackground from './components/GradientBackground';
import { brandPalettes, presetPalettes } from './data/palettes';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
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
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;