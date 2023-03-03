import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1> Single Product ID : - {id} </h1>
      <button className="btn btn-primary" onClick={() => navigate("/posts")}>
        Back
      </button>
    </div>
  );
};

export default ProductDetails;
