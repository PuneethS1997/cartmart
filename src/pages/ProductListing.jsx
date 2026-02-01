import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

import ProductCard from "../components/product/ProductCard";
import FilterSidebar from "../components/product/FilterSidebar";
import SortDropdown from "../components/product/SortDropdown";

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true); // Loading flag

  const [view, setView] = useState("grid"); // grid | list
  const [filters, setFilters] = useState({
    priceRange: [0, 100000],
    category: "all",
    rating: 0,
    sort: "popularity",
  });

  // Fetch all products
  // Fetch all products
  //   useEffect(() => {
  //     getProducts()
  //       .then((products) => {
  //         setProducts(products);
  //         setFiltered(products);
  //       })
  //       .catch((err) => console.error(err));
  //   }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // start loading
        const products = await getProducts(); // API returns array
        console.log("Products from API:", products); // 👈 check this

        setProducts(products);
        setFiltered(products);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
        setFiltered([]);
      } finally {
        setLoading(false); // done loading
      }
    };

    fetchProducts();
  }, []);

  // Apply filters & sorting
  useEffect(() => {
    if (products.length === 0) return; // wait for API

    let temp = [...products];

    // Category filter
    if (filters.category !== "all") {
      temp = temp.filter((p) => p.category === filters.category);
    }

    // Price range filter
    temp = temp.filter(
      (p) =>
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Rating filter
    temp = temp.filter((p) => p.rating >= filters.rating);

    // Sorting
    if (filters.sort === "priceLowHigh") temp.sort((a, b) => a.price - b.price);
    else if (filters.sort === "priceHighLow")
      temp.sort((a, b) => b.price - a.price);
    else if (filters.sort === "popularity")
      temp.sort((a, b) => b.popularity - a.popularity);

    setFiltered(temp);
  }, [filters, products]);

  return (
    <div className="flex flex-col lg:flex-row px-6 py-10 gap-6">
      {/* Filter Sidebar */}
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <div className="flex-1">
        {/* View Toggle + Sort */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-1 rounded ${
                view === "grid"
                  ? "bg-[var(--accent)] text-white"
                  : "bg-gray-200"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1 rounded ${
                view === "list"
                  ? "bg-[var(--accent)] text-white"
                  : "bg-gray-200"
              }`}
            >
              List
            </button>
          </div>

          <SortDropdown filters={filters} setFilters={setFilters} />
        </div>

        {/* Product Grid/List */}
        {/* <div
          className={
            view === "grid"
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              : "flex flex-col gap-4"
          }
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} view={view} />
          ))}
        </div> */}
        <div
          className={
            view === "grid"
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              : "flex flex-col gap-4"
          }
        >
          {loading ? (
            // Skeleton loader
            Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 dark:bg-gray-700 h-60 rounded-2xl animate-pulse"
              ></div>
            ))
          ) : filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard key={product.id} product={product} view={view} />
            ))
          ) : (
            <div className="text-center py-10 text-gray-400">
              No products found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
