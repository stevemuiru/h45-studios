import { useState } from 'react';
import logo from '../assets/H45-Logo-White-BG.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-bone px-6 md:px-12 py-4 flex items-center justify-between">
      <img src={logo} alt="H45 Studios" className="h-10 w-auto" />

      <nav className="hidden md:flex gap-10">
        <Link to="/" className="text-sm tracking-wide text-bone/70 hover:text-bone transition-colors">Home</Link>
        <Link to="/atelier" className="text-sm tracking-wide text-bone/70 hover:text-bone transition-colors">Atelier</Link>
        <Link to="/salon" className="text-sm tracking-wide text-bone/70 hover:text-bone transition-colors">Salon</Link>
        <Link to="/contact" className="text-sm tracking-wide text-bone/70 hover:text-bone transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="border border-brass text-xs tracking-wide px-4 py-2 hover:bg-brass/10 transition-colors">
          Cart (0)
        </button>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-ink flex flex-col md:hidden border-t border-bone/10">
          <Link to="/" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-sm text-bone/80 hover:text-bone">Home</Link>
          <Link to="/atelier" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-sm text-bone/80 hover:text-bone">Atelier</Link>
          <Link to="/salon" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-sm text-bone/80 hover:text-bone">Salon</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-sm text-bone/80 hover:text-bone">Contact</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;