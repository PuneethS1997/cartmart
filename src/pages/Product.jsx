import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { useCart } from "../context/CartContext";
import RelatedProducts from "../components/product/RelatedProducts";

export default function Product() {
  const { id } = useParams();
  const { cart, addToCart, decreaseQty } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return <div className="p-20 text-gray-400">Loading product...</div>;
  }
  const qty = cart.find((item) => item.id === product.id)?.quantity || 0;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
      {/* Images */}
      <div className="bg-[var(--card)] rounded-3xl p-8">
        <img
          src={product.image}
          className="w-full h-[420px] object-contain"
          alt={product.title}
        />
      </div>

      {/* Info */}
      <div className="space-y-6">
        <h1 className="text-3xl font-light">{product.title}</h1>

        <p className="text-gray-400 leading-relaxed">{product.description}</p>

        <div className="flex items-center gap-4">
          <span className="text-3xl text-[var(--accent)] font-semibold">
            ₹{product.price}
          </span>
          <span className="text-sm text-green-400">In Stock</span>
        </div>

        {/* <div className="flex gap-4 pt-6">
          <button
            onClick={() => addToCart(product)}
            className="bg-[var(--accent)] text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Add to Cart
          </button>

          <button className="border border-white/20 px-8 py-3 rounded-full hover:border-[var(--accent)] transition">
            Buy Now
          </button>
        </div> */}

        {qty === 0 ? (
          <button
            onClick={() => addToCart(product)}
            className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-6 bg-white text-black w-fit rounded-2xl px-6 py-4">
            <button
              onClick={() => decreaseQty(product.id)}
              className="text-2xl font-bold"
            >
              −
            </button>

            <span className="text-xl font-semibold">{qty}</span>

            <button
              onClick={() => addToCart(product)}
              className="text-2xl font-bold"
            >
              +
            </button>
            <button className="border border-white/20 px-8 py-3 rounded-full hover:border-[var(--accent)] transition">
              Buy Now
            </button>
          </div>
        )}
      </div>
      <RelatedProducts category={product.category} currentId={product.id} />
    </div>
  );
}
