"use client";

import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data.products);
      setProducts(data.products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <h4 key={item.id}>
          Title: {item.title}, Brand: {item.brand}
        </h4>
      ))}
    </div>
  );
}
