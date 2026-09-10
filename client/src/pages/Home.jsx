import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-bone">

      
      
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
          <p className="text-rust text-xs tracking-widest uppercase mb-2">Two Crafts, One House</p>
          <h2 className="font-serif text-3xl text-ink mb-10">Where to begin</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-border-c border-t-4 border-t-brass p-8">
              <h3 className="text-rust text-xs tracking-widest uppercase">Atelier</h3>
              <h4 className="font-serif text-xl text-ink mt-2 mb-3">Upcycled Luxury Fashion</h4>
              <p className="text-sm text-ink/70">
                One-of-one garments rebuilt from reclaimed textiles and vintage deadstock.
              </p>
            </div>

            <div className="bg-white border border-border-c border-t-4 border-t-brass p-8">
              <h3 className="text-rust text-xs tracking-widest uppercase">Salon</h3>
              <h4 className="font-serif text-xl text-ink mt-2 mb-3">Arts &amp; Entertainment</h4>
              <p className="text-sm text-ink/70">
                Editorial, exhibitions, and events that give the whole house cultural gravity.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-rust text-xs tracking-widest uppercase mb-2">Just Landed</p>
          <h2 className="font-serif text-3xl text-ink mb-10">Featured products</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-rust text-xs tracking-widest uppercase mb-2">From the Salon</p>
          <h2 className="font-serif text-3xl text-ink mb-10">Latest journal</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-border-c p-6">
              <p className="text-xs uppercase tracking-wide text-ink/40 mb-2">Process</p>
              <h4 className="font-serif text-lg text-ink mb-2">The life cycle of a reclaimed jacket</h4>
              <p className="text-sm text-ink/70">
                Following one garment from donation bin to finished Atelier piece.
              </p>
            </div>

            <div className="bg-white border border-border-c p-6">
              <p className="text-xs uppercase tracking-wide text-ink/40 mb-2">Perspective</p>
              <h4 className="font-serif text-lg text-ink mb-2">Why waste is a design material</h4>
              <p className="text-sm text-ink/70">
                Treating discarded textiles as a material category, not a moral stance.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;