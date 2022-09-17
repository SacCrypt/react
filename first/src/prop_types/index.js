import React from "react";
import Product from "./Product";
import { useFetch } from "../custom_hooks/useFetch";

const url = "https://api.github.com";

const Index = () => {
  const items = useFetch(url);
  console.log(items);
  return (
    <div>
      <h2> products</h2>
      <section>
        {items.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
};

export default Index;
