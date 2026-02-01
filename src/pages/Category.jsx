import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Category() {
  const { name } = useParams();
  const { cart, addToCart, decreaseQty } = useCart();

  const filtered = products.filter(
    (p) => p.category === name
  );

  const getQty = (id) =>
    cart.find((item) => item.id === id)?.quantity || 0;

  return (
    <section className="px-6 py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-10 capitalize">
          {name} Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((p) => {
            const qty = getQty(p.id);

            return (
              <div
                key={p.id}
                className="bg-zinc-900 rounded-2xl p-4"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-48 w-full object-cover rounded-xl"
                />

                <h3 className="text-white mt-4 font-semibold">
                  {p.name}
                </h3>

                <p className="text-white/60 mb-4">
                  ₹{p.price}
                </p>

                {qty === 0 ? (
                  <button
                    onClick={() => addToCart(p)}
                    className="text-xs border border-white/20 px-3 py-1.5 rounded-full hover:border-[var(--accent)] transition"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between text-xs border border-white/20 px-3 py-1.5 rounded-full hover:border-[var(--accent)] transition">
                    <button
                      onClick={() => decreaseQty(p.id)}
                      className="text-xl font-bold"
                    >
                      −
                    </button>

                    <span className="font-semibold">{qty}</span>

                    <button
                      onClick={() => addToCart(p)}
                      className="text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
