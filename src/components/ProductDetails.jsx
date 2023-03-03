import React from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1> Single Product ID : - {id} </h1>
    </div>
  );
};

export default ProductDetails;
