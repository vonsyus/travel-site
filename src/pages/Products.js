import React from "react";
import Footer from "../components/footer";

const Products = () => {
  return (
    <>
      <h1
        className="products"
        style={
          { backgroundImage: `url('/images/img-1.jpg')` }
        }
      >
        Products
      </h1>
      <Footer />
    </>
  );
};

export default Products;
