"use client";

import { useRouter } from "next/navigation";

export default function Cartbutton({ price }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/productlist?price=${price}`);
  };
  return (
    <div>
      <button onClick={handleClick}>Add to Cart</button>
      anonymous function here
    </div>
  );
}
