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
      fetchProducts(category); // Fetch products for the specific category
    }
  }, [category, fetchProducts]);
  console.log(products);
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  //display a map of products from db by category
  return (
    <div className="">
      <ProductHeader title={category} />
      <div className="grid grid-cols-3 gap-4 pl-5 pr-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
