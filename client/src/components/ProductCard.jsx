import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

function ProductCard({ product }) {
  return (
    <Link to={`/atelier/${product.id}`} className="group block bg-white border border-border-c">
      <div className="relative overflow-hidden aspect-[4/5] bg-border-c/40">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-center px-4">
            <p className="text-ink/40 text-xs uppercase tracking-widest">
              Image coming soon
            </p>
          </div>
        )}

        <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-center p-4">
          <h4 className="font-serif text-bone text-base">{product.name}</h4>
          <p className="text-brass text-sm mt-1">{formatPrice(product.price)}</p>
          <p className="text-xs uppercase tracking-wide text-bone/70 mt-1">
            {product.material} · {product.type}
          </p>
          <span className="text-xs text-bone/60 mt-3 underline">View piece</span>
        </div>
      </div>

      <div className="p-4">
        <h4 className="font-serif text-base text-ink">{product.name}</h4>
        <p className="text-rust text-sm mt-1">{formatPrice(product.price)}</p>
        <p className="text-xs uppercase tracking-wide text-ink/40 mt-1">
          {product.material} · {product.type}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;