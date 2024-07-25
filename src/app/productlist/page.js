"use client";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data.products);
      setProduct(data.products);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <h4>
          Title: {item.title}, Brand: {item.brand}{" "}
        </h4>
      ))}
    </div>
  );
}
