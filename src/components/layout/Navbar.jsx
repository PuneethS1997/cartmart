import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";


export default function Navbar() {
  const { cart } = useCart();
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-black text-white px-6 py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          LUXMART
        </Link>

        <div className="flex items-center gap-6 relative">
          <ShoppingBag size={22} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-xs px-2 rounded-full">
              {totalQty}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
