import hcBag from "../assets/hc-bag.jpeg";
import hcJacket from "../assets/hc-jacket.jpeg";
import hcJacket1 from "../assets/hc-jacket1.jpeg";
import hcTotebag from "../assets/hc-totebag.jpeg";

function Home() {
  return (
    <div className="bg-bone">

      {/* Hero */}
      <section className="bg-ink text-bone px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">
            Nothing discarded, everything reborn.
          </h1>
          <p className="text-bone/70 text-sm md:text-base max-w-lg mt-6">
            H45 Studios — Branding &amp; Graphic Design / Arts &amp; Entertainment.
            HC offers a distinctive approach to luxury fashion, centered on the art
            of upcycling. Our signature pieces include high-end bags, cutting-edge
            streetwear, and our charming range of crochet items.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-brass text-ink text-xs tracking-wide px-6 py-3 hover:bg-brass-light transition-colors">
              Shop The Atelier
            </button>
            <button className="border border-brass text-xs tracking-wide px-6 py-3 hover:bg-brass/10 transition-colors">
              Explore The Salon
            </button>
          </div>
        </div>
      </section>

      {/* Pillars */}
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

      {/* Featured products */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-rust text-xs tracking-widest uppercase mb-2">Just Landed</p>
          <h2 className="font-serif text-3xl text-ink mb-10">Featured products</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <img src={hcBag} alt="H45 Studios upcycled bag" className="w-full aspect-[4/5] object-cover" />
            <img src={hcJacket} alt="H45 Studios upcycled jacket" className="w-full aspect-[4/5] object-cover" />
            <img src={hcJacket1} alt="H45 Studios upcycled jacket, alternate style" className="w-full aspect-[4/5] object-cover" />
            <img src={hcTotebag} alt="H45 Studios upcycled tote bag" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* Journal preview */}
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