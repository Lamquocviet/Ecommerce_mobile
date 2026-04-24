import { SlidersHorizontal } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-64 space-y-8 rounded-3xl border border-white/10 bg-card p-5 text-white">
      
      {/* CATEGORIES */}
      <div>
        <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40">
          CATEGORIES
        </h3>

        <div className="space-y-2">
          <button className="flex w-full items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-white"></span>
            All Products
          </button>

          <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-white/10">
            Apparel
          </button>

          <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-white/10">
            Footwear
          </button>

          <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-white/10">
            Accessories
          </button>
        </div>
      </div>

      {/* PRICE RANGE */}
      <div>
        <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40">
          PRICE RANGE
        </h3>

        <div className="space-y-3">
          <input
            type="range"
            className="w-full accent-green-500"
          />

          <div className="flex justify-between text-xs text-white/40">
            <span>$0</span>
            <span className="text-green-400">$400</span>
            <span>$1000</span>
          </div>
        </div>
      </div>

      {/* TOP BRANDS */}
      <div>
        <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40">
          TOP BRANDS
        </h3>

        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-500" />
            Obsidian Noir
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-500" />
            Vortex Technical
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-500" />
            Aether Flux
          </label>
        </div>
      </div>

      {/* RATING */}
      <div>
        <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40">
          RATING
        </h3>

        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" className="accent-green-500" />
            <span className="text-green-400">★★★★★</span>
            <span>& Up</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="rating" className="accent-green-500" />
            <span className="text-green-400">★★★★☆</span>
            <span>& Up</span>
          </label>
        </div>
      </div>

    </aside>
  );
};