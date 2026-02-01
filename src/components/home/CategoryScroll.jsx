import { useRef } from "react";

import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    title: "Fashion",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
  {
    id: 3,
    title: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d9c",
  },
  {
    id: 4,
    title: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: 5,
    title: "Sports",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  },
  {
    id: 6,
    title: "Groceries",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
  },
];

export default function CategoryScroll() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    };

  return (
    <section className="relative px-6 py-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">
          Shop by Category
        </h2>
        
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur"
        >
          <ChevronRight className="text-white" />
        </button>

        <div ref={scrollRef}  className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.title.toLowerCase()}`}
              className="min-w-[220px] snap-start group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
