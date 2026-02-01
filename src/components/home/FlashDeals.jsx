import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "../product/ProductCard";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

export default function FlashDeals() {
  const [deals, setDeals] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    getProducts().then((data) => {
        // console.log("PRODUCTS:", data);

    //   const flash = data.filter(
    //     (p) => p.isFlashDeal || p.discount
    //   );
    const flash = data.slice(0, 8);

      setDeals(flash);
    });
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  if (!deals.length) return null;

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Zap className="text-yellow-400" size={22} />
          Flash Deals
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
        {deals.map((p) => (
          <div key={p.id} className="min-w-[230px] relative">
            {p.discount && (
              <span className="absolute top-3 left-3 z-10 bg-red-500 text-xs px-2 py-1 rounded-full">
                {p.discount}% OFF
              </span>
            )}
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
