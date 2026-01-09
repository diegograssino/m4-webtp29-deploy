"use client";
import { getProducts } from "@/services/products";
import { Product } from "@/types/products";
import Card from "@/ui/components/Card/Card";
import CardGrid from "@/ui/components/CardGrid/CardGrid";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const HomeComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, isError } = await getProducts();
      setProducts(data);

      if (isError) {
        toast.error("Error fetching products, working with mock data");
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="p-2 border border-secondary rounded-md w-full mb-2"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <CardGrid>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, i) => <Card key={i} card={product} />)
        ) : (
          <p>No products found</p>
        )}
      </CardGrid>
    </div>
  );
};

export default HomeComponent;
