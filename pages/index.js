import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">
        <a>Go to Blog</a>
      </Link>
      <Link href="/products">
        <a>Go to Products</a>
      </Link>
    </div>
  );
};

export default Home;
