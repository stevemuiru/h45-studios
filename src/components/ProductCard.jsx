import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/atelier/${product.id}`} className="group block bg-white border border-border-c">
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full aspect-[4/5] object-cover" />

        <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-center p-4">
          <h4 className="font-serif text-bone text-base">{product.name}</h4>
          <p className="text-brass text-sm mt-1">${product.price}</p>
          <p className="text-xs uppercase tracking-wide text-bone/70 mt-1">
            {product.material} · {product.type}
          </p>
          <span className="text-xs text-bone/60 mt-3 underline">View piece</span>
        </div>
      </div>

      <div className="p-4">
        <h4 className="font-serif text-base text-ink">{product.name}</h4>
        <p className="text-rust text-sm mt-1">${product.price}</p>
        <p className="text-xs uppercase tracking-wide text-ink/40 mt-1">
          {product.material} · {product.type}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;