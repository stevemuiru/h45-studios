import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then((data) => {
        setProducts(data.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-bone">

      
      <section className="bg-ink text-bone px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
            Nothing discarded, everything reborn.
          </h1>
          <p className="text-bone/70 text-sm md:text-base max-w-lg mt-6">
            H45 Studios — Branding &amp; Graphic Design / Arts &amp; Entertainment.
            H45 offers a distinctive approach to luxury fashion, centered on the art
            of upcycling. Our signature pieces include high-end bags, cutting-edge
            streetwear, and our charming range of crochet items.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/atelier" className="bg-brass text-ink text-xs tracking-wide px-6 py-3 hover:bg-brass-light transition-colors">
              Shop The Atelier
            </Link>
          </div>
        </div>
      </section>

      
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto bg-white border border-border-c border-t-4 border-t-brass p-10 md:p-14">
          <p className="text-rust text-xs tracking-widest uppercase mb-2">The Atelier</p>
          <h2 className="font-serif text-3xl text-ink mb-4">Upcycled Luxury Fashion</h2>
          <p className="text-ink/70 text-sm max-w-xl mb-6">
            One-of-one garments rebuilt from reclaimed textiles and vintage deadstock — nothing produced twice.
          </p>
          <Link to="/atelier" className="inline-block bg-brass text-ink text-xs tracking-wide px-6 py-3 hover:bg-brass-light transition-colors">
            Browse the Collection
          </Link>
        </div>
      </section>

      
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-rust text-xs tracking-widest uppercase mb-2">Just Landed</p>
          <h2 className="font-serif text-3xl text-ink mb-10">Featured products</h2>

          {loading && <p className="text-ink/50 text-sm">Loading...</p>}
          {error && <p className="text-rust text-sm">Couldn't load products: {error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

export default Home;