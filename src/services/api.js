import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Trending products API
export const getTrendingProducts = async () => {
    return axios.get("https://fakestoreapi.com/products");
  };

// export const getProducts = () => API.get("/products");
export const getProducts = async () => {
    const res = await API.get("/products");
    return res.data;
  };
  
export const getProduct = (id) => API.get(`/products/${id}`);
