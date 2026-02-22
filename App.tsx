import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { ServicesPage } from './pages/Services';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { UGCPage } from './pages/UGC';
import { SplashScreen } from './components/ui/SplashScreen';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
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
        <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
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
