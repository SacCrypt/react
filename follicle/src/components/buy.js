import VerticalNavBar from "./verticalNavBar";
import ProductList from "./productList";
import Products from "./products";
import { useState } from "react";
import axios from "axios";

const Buy = () => {
  const api = axios.create({
    baseURL: "http://127.0.0.1:5000/products",
  });
  api
    .get("/")
    .then((res) => {
      const Products = res.json();
    })
    .catch((err) => {
      console.log(err);
    });
  const [prod, setProd] = useState(Products);
  return (
    <div>
      <VerticalNavBar setProd={setProd} />
      <ProductList products={prod} />
    </div>
  );
};

export default Buy;
