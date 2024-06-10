"use client";

import { ProductsContext } from "@/app/layout";
import { ItemSearchNav } from "@/components/ItemSearchNav";
import { useHandleProduct } from "@/hooks/useHandleNullItem";
import imageGoesHere from "@/images/imageGoesHere.webp";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";

export default function ProductItem() {
  let context = useContext(ProductsContext);
  let handleProduct = useHandleProduct();

  if (!context?.productInfo) {
    handleProduct();
    return;
  }

  let { productInfo } = context;
  let { title, brand, price, rating, stock } = productInfo[0];
  let { discountPercentage, productDescription } = productInfo[0];

  let priceWithDiscount = price - (discountPercentage / 100) * price
  return (
    <main className="py-6 px-6 bg-gray-100 flex flex-col gap-y-3">
      <article>
        <ItemSearchNav />
      </article>
      <article className="flex flex-col gap-y-6">
        <section className="grid grid-cols-3 grid-rows-3">
          <Image
            src={imageGoesHere}
            alt="Image goes here"
            width={60}
            height={60}
            className="object-cover cursor-pointer col-start-1 col-end-3 w-full h-full row-start-1 row-end-4"
            priority
          />
          <Image
            src={imageGoesHere}
            alt="Image goes here"
            width={60}
            height={60}
            className="object-cover cursor-pointer justify-self-center flex"
            priority
          />
          <Image
            src={imageGoesHere}
            alt="Image goes here"
            width={60}
            height={60}
            className="object-cover cursor-pointer justify-self-center flex"
            priority
          />
          <Image
            src={imageGoesHere}
            alt="Image goes here"
            width={60}
            height={60}
            className="object-cover cursor-pointer justify-self-center flex"
            priority
          />
        </section>
        <section className="flex items-center justify-center flex-col">
          <article className="w-full flex flex-col gap-y-2">
            <h1 className="font-bold text-lg text-center">
              {title} - {brand}
            </h1>
            <div className="flex gap-x-3">
              <h2 className="font-extrabold text-sm flex gap-x-2"><s>{price}$</s> {priceWithDiscount}$</h2>{" "}
              <Rating value={rating} size="small" className="" />
            </div>
            <small className="font-bold text-xs">{stock} available</small>
          </article>
        </section>
        <section className="flex flex-col gap-y-4">
          <p>{productDescription}</p>
          <button className="hover:bg-gray-200 active:bg-gray-300 py-2 px-4 outline-none rounded-2xl border-[2px] border-gray-400 border-opacity-70 flex items-center gap-x-2 mx-auto">
            Buy product
          </button>
        </section>
      </article>
    </main>
  );
}
