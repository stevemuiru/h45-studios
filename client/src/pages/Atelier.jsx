import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function Atelier() {
  const [material, setMaterial] = useState('');
  const [type, setType] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [search, setSearch] = useState('');

  const materials = [...new Set(products.map((p) => p.material))];
  const types = [...new Set(products.map((p) => p.type))];

  let filtered = products.filter((p) => {
    if (material && p.material !== material) return false;
    if (type && p.type !== type) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <div className="bg-bone px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-rust text-xs tracking-widest uppercase mb-2">Atelier</p>
        <h1 className="font-serif text-3xl text-ink mb-2">Collections</h1>
        <p className="text-ink/60 text-sm italic mb-8">
          Every piece exists once, or in a run of very few.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="border border-border-c bg-white text-sm px-3 py-2"
          >
            <option value="">All materials</option>
            {materials.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-border-c bg-white text-sm px-3 py-2"
          >
            <option value="">All types</option>
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-border-c bg-white text-sm px-3 py-2"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>

          <input
            type="text"
            placeholder="Search pieces..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-border-c bg-white text-sm px-3 py-2 flex-1 min-w-[160px]"
          />

          <span className="text-xs text-ink/50 self-center ml-auto">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </span>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-ink/50 py-16 text-sm">
            No pieces match those filters. Try widening your search.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Atelier;