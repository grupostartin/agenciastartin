import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Cases } from './pages/Cases';
import { Contact } from './pages/Contact';
import { ServicesPage } from './pages/Services';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { UGCPage } from './pages/UGC';
import { SplashScreen } from './components/ui/SplashScreen';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Scroll to top & GA tracker wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    // Explicitly track page views for Single Page App (SPAs) 
    // especially because we are using HashRouter
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-74FB073MCV', {
        page_path: pathname,
      });
      console.log(`GA: Page viewed - ${pathname}`);
    }
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    // @ts-expect-error next-themes types are not yet fully compatible with React 19 children
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Router>
        <SplashScreen />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/ugc" element={<UGCPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
