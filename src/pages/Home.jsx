import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import HeroSlider from "../components/home/HeroSlider";
import CategoryScroll from "../components/home/CategoryScroll";

import FeaturedCategories from "../components/home/FeaturedCategories";
import TrendingSlider from "../components/home/TrendingSlider";

import ProductCard from "../components/product/ProductCard";
import FlashDeals from "../components/home/FlashDeals";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     getProducts().then((res) => setProducts(res.data));
  //     console.log("PRODUCTS:", res.data);

  //   }, []);
  useEffect(() => {
    getProducts().then((data) => {
    //   console.log("PRODUCTS:", data);
      setProducts(data); // or setDeals
    });
  }, []);

  const trendingProducts = products?.filter((p) => p.isTrending) || [];
  // optional filter

  return (
    <>
      <HeroSlider />
      <CategoryScroll />
      <div className="px-6">
        <TrendingSlider trendingProducts={trendingProducts} />
      </div>
      <FlashDeals />

      <FeaturedCategories />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-2xl mb-10 font-light tracking-wide">
          Featured Collection
        </h2>
        <Link
          to="/products"
          className="text-sm font-semibold text-[var(--accent)] hover:underline"
        >
          View All →
        </Link>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
