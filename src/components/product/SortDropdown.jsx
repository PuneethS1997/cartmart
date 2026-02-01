export default function SortDropdown({ filters, setFilters }) {
    return (
      <select
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        className="border px-3 py-1 rounded"
      >
        <option value="popularity">Popularity</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
      </select>
    );
  }
  