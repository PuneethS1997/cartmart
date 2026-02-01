export default function Hero() {
    return (
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
  
          {/* Text */}
          <div>
            <h1 className="text-5xl font-light leading-tight">
              Elevate Your
              <span className="block text-[var(--accent)] font-medium">
                Shopping Experience
              </span>
            </h1>
  
            <p className="mt-6 text-gray-400 max-w-md">
              Discover premium products curated for elegance, performance, and style.
            </p>
  
            <button className="mt-8 bg-[var(--accent)] text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
              Explore Collection
            </button>
          </div>
  
          {/* Image */}
          <div className="relative h-[420px]">
            <div className="absolute inset-0 bg-[var(--accent)] blur-[120px] opacity-20"></div>
  
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              className="relative z-10 w-full h-full object-cover rounded-3xl"
              alt="Luxury product"
            />
          </div>
  
        </div>
      </section>
    );
  }
  