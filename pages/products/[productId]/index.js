import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();
  const productId = router.query.productId;
  console.log("router", router);
  return <h2>Details about the product {productId}</h2>;
};

export default ProductId;
