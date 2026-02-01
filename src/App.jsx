// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import { CartProvider } from "./context/CartContext";
// import Navbar from "./components/layout/Navbar";

// import Product from "./pages/Product";

// export default function App() {
//   return (
//     <CartProvider>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/product/:id" element={<Product />} />
//         </Routes>
//       </BrowserRouter>
//     </CartProvider>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Product from "./pages/Product";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:name" element={<Category />} />

        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}


// import Navbar from "./components/layout/Navbar";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="p-10 text-white">
//         Content below navbar
//       </div>
//     </>
//   );
// }


