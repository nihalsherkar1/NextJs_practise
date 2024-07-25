import Link from "next/link";
import Image from "next/image";

async function cartData() {
  let data = await fetch("https://dummyjson.com/carts");
  data = await data.json();
  return data.carts;
}

export default async function Carts() {
  let data = await cartData();

  return (
    <div>
      <h1>Cart</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.id}</h3>
          <ul>
            {item.products.map((product) => (
              <li key={product.id}>
                <p>ProductID: {product.id}</p>
                <p>ProductName: {product.title}</p>
                <p>Price: {product.price}</p>
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
                <Link href={`/cart/${product.id}`}>
                  <button>View Product</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
