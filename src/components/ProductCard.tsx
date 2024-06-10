import { useShowProductCard } from "@/hooks/useShowProductInfo";
import imageGoesHere from "@/images/imageGoesHere.webp";
import { Rating } from "@mui/material";
import Image from "next/image";

interface Props {
  id: number;
  title: string;
  productDescription: string;
  price: number;
  rating: number;
}

export const ProductCard = (productInfo: Props) => {
  let { id, price, productDescription, rating, title } = productInfo;
  let showProductInfo = useShowProductCard();

  return (
    <section
      onClick={() => showProductInfo(id)}
      className="flex gap-x-3 items-center cursor-pointer"
    >
      <Image
        src={imageGoesHere}
        alt="Template image"
        width={80}
        height={80}
        className="object-cover w-20 h-20"
      />
      <article className="flex flex-col gap-y-1">
        <div>
          <h2 className="font-bold">{title}</h2>
          <p className="text-xs">{productDescription}</p>
        </div>
        <div className="flex gap-x-4 items-center justify-between">
          <h3 className="font-bold">{price}$</h3>
          <Rating
            name="read-only"
            value={rating}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
      </article>
    </section>
  );
};
