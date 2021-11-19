import Link from "next/link";
const ProducList = () => {
  return (
    <div>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
      <h1>
        <Link href="/products/1">
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href="/products/2">
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href="/products/3" replace>
          <a>Product 3</a>
        </Link>
      </h1>
    </div>
  );
};

export default ProducList;
