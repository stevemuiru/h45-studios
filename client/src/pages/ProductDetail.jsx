import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="p-12 text-center">
        <p className="text-ink">Product not found.</p>
        <Link to="/atelier" className="text-rust underline text-sm">Back to Collections</Link>
      </div>
    );
  }

  const phoneNumber = "254793926339";
  const message = `Hi! I'm interested in the ${product.name} ($${product.price}).`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="px-6 md:px-12 py-16 bg-bone">
      <div className="max-w-6xl mx-auto">
        <Link to="/atelier" className="text-rust text-xs mb-8 inline-block hover:underline">
          &larr; Back to Collections
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <img src={product.image} alt={product.name} className="w-full aspect-[4/5] object-cover" />

          <div>
            <h1 className="font-serif text-3xl text-ink">{product.name}</h1>
            <p className="text-rust text-lg mt-2">${product.price}</p>

            <div className="flex gap-2 mt-4">
              <span className="text-xs uppercase tracking-wide border border-border-c px-3 py-1 text-ink/60">{product.material}</span>
              <span className="text-xs uppercase tracking-wide border border-border-c px-3 py-1 text-ink/60">{product.type}</span>
            </div>

            <div className="flex gap-6 border-b border-border-c mt-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`text-sm pb-3 border-b-2 ${activeTab === 'description' ? 'border-rust text-ink' : 'border-transparent text-ink/40'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('biography')}
                className={`text-sm pb-3 border-b-2 ${activeTab === 'biography' ? 'border-rust text-ink' : 'border-transparent text-ink/40'}`}
              >
                Garment Biography
              </button>
            </div>

            <div className="pt-6 text-sm text-ink/80">
              {activeTab === 'description' && <p>{product.description}</p>}
              {activeTab === 'biography' && (
                <div className="space-y-3">
                  <p><span className="text-ink/40 uppercase text-xs tracking-wide mr-2">Origin</span>{product.origin}</p>
                  <p><span className="text-ink/40 uppercase text-xs tracking-wide mr-2">Artisan</span>{product.artisan}</p>
                  <p><span className="text-ink/40 uppercase text-xs tracking-wide mr-2">Story</span>{product.story}</p>
                </div>
              )}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brass text-ink text-xs tracking-wide px-6 py-3 mt-8 hover:bg-brass-light transition-colors"
            >
              Buy on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;