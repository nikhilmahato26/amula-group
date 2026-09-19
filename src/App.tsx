import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { JobConsultancy } from './pages/JobConsultancy';
import { Jobs } from './pages/Jobs';
import { About } from './pages/About';
import { Branches } from './pages/Branches';
import { Travel } from './pages/Travel';
import { CarRental } from './pages/CarRental';
import { Contact } from './pages/Contact';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-dark-900 font-sans selection:bg-gold-500 selection:text-black">
      <ScrollToTop />
      
      {/* Slim Top Bar */}
      <TopBar />

      {/* Sticky Responsive Navbar */}
      <Navbar />

      {/* Main Content Pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-consultancy" element={<JobConsultancy />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/car-rental" element={<CarRental />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Dynamic Floating Actions & Sticky Mobile Bar */}
      <FloatingActions />

      {/* Luxury Dark Footer with Gold Accents */}
      <Footer />
    </div>
  );
};

export default App;
