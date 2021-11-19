import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("router before push", router);
    console.log("Placing your order");
    router.push("/products");
    console.log("router after push", router);
  };
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">
        <a>Go to Blog</a>
      </Link>
      <Link href="/products">
        <a>Go to Products</a>
      </Link>
      <button onClick={handleClick}>Place an order</button>
    </div>
  );
};

export default Home;
