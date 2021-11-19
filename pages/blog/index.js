import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1>Blog page index</h1>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  );
};

export default Blog;
