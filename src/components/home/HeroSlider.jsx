import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const banners = [
  {
    title: "Elevate Your Shopping Experience",
    subtitle: "Premium products curated for elegance and style.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    title: "Luxury Meets Technology",
    subtitle: "Modern essentials crafted for performance.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    title: "Designed for the Bold",
    subtitle: "Minimal. Powerful. Premium.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 sec auto slide

    return () => clearInterval(interval);
  }, []);

  const banner = banners[index];

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={banner.image}
            alt="Hero banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-6xl font-light leading-tight text-white">
                Elevate Your{" "}
                <span className="text-[var(--accent)]">
                  Shopping Experience
                </span>
              </h1>

              <p className="mt-6 text-gray-300 text-lg">
                Premium products curated for elegance and style.
              </p>

              <button className="mt-8 bg-[var(--accent)] text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
                Explore Collection
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-[var(--accent)]" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
