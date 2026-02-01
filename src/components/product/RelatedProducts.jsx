import { useEffect, useRef, useState } from "react";
import ProductCard from "../product/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getProducts } from "../../services/api";

export default function RelatedProducts({ category, currentId }) {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    getProducts().then((res) => {
        // console.log(res);
        const list = res.data; // 👈 THIS IS THE FIX

      const filtered = res.filter(
        (p) => p.category === category && p.id !== currentId
      );
      setProducts(filtered);
    });
  }, [category, currentId]);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  if (!products.length) return null;

  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">
          Related Products
        </h2>

        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="icon-btn">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll("right")} className="icon-btn">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide"
      >
        {products.map((p) => (
          <div key={p.id} className="min-w-[230px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
