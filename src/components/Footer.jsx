import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-ink text-bone px-6 md:px-12 pt-14 pb-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        <div>
          <h2 className="font-serif text-xl tracking-wide">H45 STUDIOS</h2>
          <p className="text-bone/60 text-sm mt-2 max-w-xs">
            Branding, arts &amp; entertainment, and luxury fashion built on the art of upcycling.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <Link to="/" className="text-sm text-bone/70 hover:text-bone transition-colors">Home</Link>
          <Link to="/atelier" className="text-sm text-bone/70 hover:text-bone transition-colors">Atelier</Link>
          <Link to="/salon" className="text-sm text-bone/70 hover:text-bone transition-colors">Salon</Link>
          <Link to="/contact" className="text-sm text-bone/70 hover:text-bone transition-colors">Contact</Link>
        </nav>

        <div className="flex gap-5 items-start">
          <a href="#" aria-label="Instagram" className="text-bone/70 hover:text-brass transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Facebook" className="text-bone/70 hover:text-brass transition-colors">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="X (Twitter)" className="text-bone/70 hover:text-brass transition-colors">
            <FaXTwitter size={20} />
          </a>
          <a href="#" aria-label="YouTube" className="text-bone/70 hover:text-brass transition-colors">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      <p className="text-center text-bone/50 text-xs mt-12 border-t border-bone/10 pt-6">
        Copyright © 2026 H45 Studios, Inc. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;