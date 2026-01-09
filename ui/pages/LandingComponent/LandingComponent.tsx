import { getFeaturedProducts } from "@/services/products";
import Button from "@/ui/components/Button/Button";
import Card from "@/ui/components/Card/Card";
import CardGrid from "@/ui/components/CardGrid/CardGrid";

const LandingComponent = async () => {
  const { data: featuredProducts, isError } = await getFeaturedProducts();
  return (
    <div className="flex flex-col gap-4">
      {isError && <p>Error fetching products, working with mock data</p>}
      <div className="flex justify-center items-center flex-col w-full bg-tertiary p-4 rounded-md">
        <h1>Phone Commerce</h1>
        <Button href="/home" isLink>
          See all products
        </Button>
      </div>
      <CardGrid>
        {featuredProducts.map((product, i) => (
          <Card card={product} key={i} />
        ))}
      </CardGrid>
    </div>
  );
};

export default LandingComponent;
