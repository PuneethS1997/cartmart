import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-3">
          <span>
            {item.title} x {item.qty}
          </span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2 className="mt-6 font-bold">Total: ₹{total.toFixed(2)}</h2>
    </div>
  );
}
