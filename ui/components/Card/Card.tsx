import { CardProps } from "@/types/ui";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import FavButton from "../FavButton/FavButton";

const Card = ({ card }: CardProps) => {
  return (
    <div>
      <Link href={`/${card.id}`}>
        <article className="bg-secondary p-4 rounded-md flex flex-col justify-center gap-1">
          <Image src={card.image} alt={card.name} width={100} height={100} />
          <h3 className="mb-1">{card.name}</h3>
          <p>{card.description}</p>
          <p>{card.price}</p>
          <Button variant="tertiary">Go to product</Button>
        </article>
      </Link>
      <FavButton />
    </div>
  );
};

export default Card;
