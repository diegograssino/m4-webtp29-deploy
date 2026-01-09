import { getProduct } from "@/services/products";
import ProductDetailComponent from "@/ui/pages/ProductDetailComponent/ProductDetailComponent";
import { notFound } from "next/navigation";

const Product = async ({ params }: { params: { idProduct: string } }) => {
  const { idProduct } = await params;
  const { data: product, isError } = await getProduct(idProduct);

  if (!product) {
    notFound();
  }

  if (isError) {
    return <p>Error fetching products, working with mock data</p>;
  }

  return <ProductDetailComponent product={product} />;
};

export default Product;
