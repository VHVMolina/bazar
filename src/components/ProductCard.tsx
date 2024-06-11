"use client";

import { useShowProductCard } from "@/hooks/useShowProductInfo";
import imageGoesHere from "@/images/imageGoesHere.webp";
import { Rating } from "@mui/material";
import Image from "next/image";

interface Props {
  id: number;
  title: string;
  discountPercentage: number;
  price: number;
  rating: number;
}

export const ProductCard = (productInfo: Props) => {
  let { id, price, discountPercentage, rating, title } = productInfo;
  let priceWithDiscount = (price - (discountPercentage / 100) * price).toFixed(2)

  let showProductInfo = useShowProductCard();

  return (
    <section
      onClick={() => showProductInfo(id)}
      className="flex gap-x-3 items-center cursor-pointer bg-gray-300 bg-opacity-60 rounded-2xl p-5 hover:bg-gray-100 active:bg-gray-300 hover:bg-opacity-70"
    >
      <Image
        src={imageGoesHere}
        alt="Template image"
        width={80}
        height={80}
        className="object-cover w-20 h-20"
      />
      <article className="flex flex-col w-2/3">
        <div>
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-xs ">
            <s className="text-gray-500">{price} $</s>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-3">
          <h3 className="font-bold flex items-center gap-x-3 text-xl">{priceWithDiscount} $ <small className="text-green-700 text-sm">%{discountPercentage} OFF</small></h3>
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
