import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="bg-bone px-6 md:px-12 py-32 text-center">
      <p className="text-rust text-xs tracking-widest uppercase mb-4">404</p>
      <h1 className="font-serif text-3xl text-ink mb-4">This page doesn't exist.</h1>
      <p className="text-ink/60 text-sm mb-8">
        The page you're looking for may have been moved or never existed.
      </p>
      <Link
        to="/"
        className="inline-block bg-brass text-ink text-xs tracking-wide px-6 py-3 hover:bg-brass-light transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;