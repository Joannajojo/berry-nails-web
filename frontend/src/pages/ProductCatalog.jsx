import React, { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import ProductHeader from "../components/ProductHeader";
const ProductCatalog = () => {
  const { category } = useParams();
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    if (category) {
      const fetchProductByCategory = async () => {
        await fetchProducts(category); // Fetch products for the specific category
      };
      fetchProductByCategory();
    } else {
      return "<p>Loading...</p>";
    }
  }, [category, fetchProducts]);
  console.log("Fetched products:", products);
  if (!products) return "<p className='text-center'>Loading...</p>";

  //Codes for extra caution to ensure fetched product matches -- Optional --
  // const filteredProducts = Array.isArray(products) //ensure products is an array structure
  //   ? products.filter((product) => product.category === category)
  //   : [];

  //display a map of products from db by category
  return (
    <div className="p-5">
      <ProductHeader title={category} />
      <div className="grid grid-cols-3  gap-4 pt-10 ">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center m-5">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
