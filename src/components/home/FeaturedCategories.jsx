import { Link } from "react-router-dom";

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
];

export default function FeaturedCategories() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.title.toLowerCase()}`}
              className="group relative rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="h-72 w-full object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              {/* Text */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold text-white">
                  {cat.title}
                </h3>
                <span className="text-sm text-white/70">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
