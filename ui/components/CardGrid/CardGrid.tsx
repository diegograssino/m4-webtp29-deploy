import { CardGridProps } from "@/types/ui";

const CardGrid = ({ children }: CardGridProps) => {
  return <section className="grid grid-cols-3 gap-4">{children}</section>;
};

export default CardGrid;
