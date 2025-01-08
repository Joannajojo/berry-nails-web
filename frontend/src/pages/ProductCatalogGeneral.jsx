import React, { useEffect } from "react";
import { useOrderStore } from "../store/order";
import DisplayCard from "../components/DisplayCard";
import ProductHeader from "../components/ProductHeader";
import { useNavigate } from "react-router-dom";

const ProductCatalogGeneral = () => {
  const { fetchMostOrdered, topSelling } = useOrderStore();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTopSelling = async () => {
      await fetchMostOrdered(); // Fetch products for the specific category
    };
    fetchTopSelling();
  }, []);

  const handlePaths = (id) => {
    if (id) {
      navigate(`/${id}`);
    } else {
      console.error("Product ID is missing.");
    }
  };
  return (
    <div>
      <ProductHeader title="Top Selling" />
      <div className="p-4 grid grid-cols-3 gap-2 pt-10">
        {topSelling.length > 0 ? (
          topSelling.map((item) => (
            <a onClick={() => handlePaths(item.details.productId)}>
              <DisplayCard key={item._id} item={item.details} />
            </a>
          ))
        ) : (
          <p className="text-center m-5">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalogGeneral;
