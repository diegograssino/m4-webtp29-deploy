import { Product } from "@/types/products";
import AddToCartButton from "@/ui/components/AddToCartButton/AddToCartButton";

const ProductDetailComponent = ({ product }: { product: Product }) => {
  return (
    <div>
      <p>{product?.name}</p>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <p>{product?.stock}</p>
      <p>{product?.image}</p>
      <p>{product?.categoryId}</p>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductDetailComponent;
