import Image from "next/image";
import Cartbutton from "./cartbutton";
import "./style.css";
import custom from "../custom.module.css";
import outside from "@/style/outside.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

async function cartData() {
  let data = await fetch("https://dummyjson.com/carts");
  data = await data.json();
  return data.carts;
}

export default async function Carts() {
  let data = await cartData();

  return (
    <div>
      <h1 className="heading">Cart</h1>
      <h2 className={custom.heading}>Under heading</h2>
      <h2 className={outside.heading}>Under heading</h2>

      {data.map((item) => (
        <div key={item.id} className="cart_container">
          <h3>{item.id}</h3>
          <ul>
            {item.products.map((product) => (
              <li key={product.id} className={roboto.className}>
                <p>ProductID: {product.id}</p>
                <p>ProductName: {product.title}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Total: {product.total}</p>
                <p>Discount Percentage: {product.discountPercentage}</p>
                <p>Discounted Total: {product.discountedTotal}</p>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={200}
                  height={200}
                />

                <Cartbutton price={product.price} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Cart",
    description: "This is Cart section",
  };
}
