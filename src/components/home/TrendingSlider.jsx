import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { getProduct } from "../../services/api";
import { getTrendingProducts } from "../../services/api";

import ProductCard from "../product/ProductCard";

export default function TrendingSlider() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      getTrendingProducts()
        .then((res) => {
          // 🔥 SAFETY CHECK
          const data =
            Array.isArray(res.data)
              ? res.data
              : Array.isArray(res.data?.data)
              ? res.data.data
              : [];
  
          setProducts(data);
        })
        .catch((err) => {
          console.error("Trending API error:", err);
          setProducts([]);
        });
    }, []);
  
    // ✅ FINAL GUARD — NEVER FAILS
    if (!Array.isArray(products) || products.length === 0) {
      return (
        <div className="my-10 text-center opacity-60">
          Loading trending products...
        </div>
      );
    }
  
    return (
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-6">🔥 Trending Products</h2>
  
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 2500 }}
          loop
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
