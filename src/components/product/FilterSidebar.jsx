export default function FilterSidebar({ filters, setFilters }) {
    const categories = ["all", "electronics", "fashion", "home"];
    
    return (
      <div className="w-full lg:w-64 border p-4 rounded-lg bg-white/10 dark:bg-gray-800/20">
        <h2 className="font-bold mb-4">Filters</h2>
  
        {/* Category */}
        <div className="mb-4">
          <h3 className="font-semibold">Category</h3>
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2 mt-1">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={filters.category === cat}
                onChange={() =>
                  setFilters({ ...filters, category: cat })
                }
              />
              <label className="capitalize">{cat}</label>
            </div>
          ))}
        </div>
  
        {/* Price Range */}
        <div className="mb-4">
          <h3 className="font-semibold">Price Range</h3>
          <input
            type="range"
            min={0}
            max={100000}
            step={1000}
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: [0, +e.target.value] })
            }
            className="w-full"
          />
          <div className="text-sm mt-1">
            ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
          </div>
        </div>
  
        {/* Rating */}
        <div>
          <h3 className="font-semibold">Rating</h3>
          <select
            value={filters.rating}
            onChange={(e) =>
              setFilters({ ...filters, rating: +e.target.value })
            }
            className="w-full mt-1 border rounded px-2 py-1"
          >
            <option value={0}>All Ratings</option>
            <option value={1}>1 ⭐ & above</option>
            <option value={2}>2 ⭐ & above</option>
            <option value={3}>3 ⭐ & above</option>
            <option value={4}>4 ⭐ & above</option>
            <option value={5}>5 ⭐</option>
          </select>
        </div>
      </div>
    );
  }
  