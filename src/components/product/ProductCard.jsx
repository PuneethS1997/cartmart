import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

// export default function ProductCard({ product }) {
//   const { cart, addToCart, decreaseQty } = useCart();

//   const qty =
//     cart.find((item) => item.id === product.id)?.quantity || 0;

//   return (
//     <div className="bg-[var(--card)] rounded-2xl p-5 hover:translate-y-[-4px] hover:shadow-2xl transition duration-300">
//       <div className="bg-black/40 rounded-xl p-4">
//         <Link to={`/product/${product.id}`}>
//           <img
//             src={product.image}
//             className="h-40 mx-auto object-contain"
//             alt={product.title}
//           />
//         </Link>
//       </div>

//       <h3 className="mt-4 text-sm font-medium line-clamp-2">
//         {product.title}
//       </h3>

//       <div className="flex items-center justify-between mt-3">
//         <span className="text-[var(--accent)] font-semibold">
//           ₹{product.price}
//         </span>

//         {qty === 0 ? (
//           <button
//             onClick={() => addToCart(product)}
//             className="text-xs border border-white/20 px-3 py-1.5 rounded-full hover:border-[var(--accent)] transition"
//           >
//             Add
//           </button>
//         ) : (
//           <div className="flex items-center gap-3 border border-white/20 rounded-full px-3 py-1">
//             <button
//               onClick={() => decreaseQty(product.id)}
//               className="text-sm font-bold"
//             >
//               −
//             </button>

//             <span className="text-sm font-semibold">{qty}</span>

//             <button
//               onClick={() => addToCart(product)}
//               className="text-sm font-bold"
//             >
//               +
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

export default function ProductCard({ product, view = "grid" }) {
    const { cart, addToCart, decreaseQty } = useCart();
  
    const qty = cart.find((item) => item.id === product.id)?.quantity || 0;
  
    return (

        <section>
      <div
        className={`
          bg-[var(--card)] rounded-2xl p-5 hover:translate-y-[-4px] hover:shadow-2xl transition duration-300
          ${view === "list" ? "flex gap-4 items-center p-4" : ""}
        `}
      >
      
        {/* Product Image */}
        <div className={`${view === "list" ? "w-32 h-32 flex-shrink-0" : "bg-black/40 rounded-xl p-4"}`}>
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className={`${view === "list" ? "w-32 h-32 object-contain" : "h-40 mx-auto object-contain"}`}
            />
          </Link>
        </div>
  
        {/* Product Info */}
        <div className={`${view === "list" ? "flex-1" : ""} mt-4`}>
          <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
  
          <div className="flex items-center justify-between mt-3">
            <span className="text-[var(--accent)] font-semibold">₹{product.price}</span>
  
            {qty === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="text-xs border border-white/20 px-3 py-1.5 rounded-full hover:border-[var(--accent)] transition"
              >
                Add
              </button>
            ) : (
              <div className="flex items-center gap-3 border border-white/20 rounded-full px-3 py-1">
                <button
                  onClick={() => decreaseQty(product.id)}
                  className="text-sm font-bold"
                >
                  −
                </button>
  
                <span className="text-sm font-semibold">{qty}</span>
  
                <button
                  onClick={() => addToCart(product)}
                  className="text-sm font-bold"
                >
                  +
                </button>
              </div>
            )}
          </div>
  
          {/* Optional description for list view */}
          {view === "list" && (
            <p className="text-xs text-gray-400 mt-2 line-clamp-3">{product.description}</p>
          )}
        </div>
     
      </div>
      
      </section>
      
    );
  }
  
