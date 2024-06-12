"use client";

import { ProductsContext } from "@/ProductContext/productContext";
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

  let discountPrice = (price - (discountPercentage / 100) * price).toFixed(2);
  return (
    <main className="flex min-h-screen flex-col gap-y-3 bg-white px-6 py-6 max-w-screen-xl">
      <section>
        <ItemSearchNav />
      </section>
      <section className="mt-8 flex flex-col gap-x-8 gap-y-6 min-[650px]:grid min-[650px]:grid-cols-2">
        <article className="relative">
          <div className="grid w-full grid-cols-4 grid-rows-3 items-center gap-x-3 gap-y-3">
            <Image
              src={imageGoesHere}
              alt="Image goes here"
              width={60}
              height={60}
              className="col-start-2 col-end-5 row-start-1 row-end-4 h-full w-full cursor-pointer self-center justify-self-center object-cover max-[650px]:max-w-80"
              priority
            />
            <div className="absolute left-0 top-0 flex flex-col gap-y-[2px] sm:gap-y-2 md:gap-y-3">
              <Image
                src={imageGoesHere}
                alt="Image goes here"
                width={60}
                height={60}
                className="flex cursor-pointer justify-self-center object-cover"
                priority
              />
              <Image
                src={imageGoesHere}
                alt="Image goes here"
                width={60}
                height={60}
                className="flex cursor-pointer justify-self-center object-cover"
                priority
              />
              <Image
                src={imageGoesHere}
                alt="Image goes here"
                width={60}
                height={60}
                className="flex cursor-pointer justify-self-center object-cover"
                priority
              />
            </div>
          </div>
        </article>
        <article className="flex flex-col items-center justify-center min-[650px]:justify-start min-[650px]:rounded-lg min-[650px]:border min-[650px]:border-gray-400 min-[650px]:border-opacity-30 min-[650px]:p-4">
          <section className="flex w-full flex-col gap-y-2">
            <h1 className="text-xl font-semibold min-[650px]:text-2xl">
              {title} - {brand}
            </h1>
            <div className="flex flex-col gap-x-3">
              <s className="text-gray-500 min-[650px]:text-lg">{price}$</s>
              <div className="flex flex-col gap-x-3">
                <h2 className="flex items-center gap-x-2 text-lg min-[650px]:text-4xl">
                  {discountPrice}${" "}
                  <small className="text-sm text-green-700 min-[650px]:text-2xl">
                    {discountPercentage}% OFF
                  </small>
                </h2>{" "}
                <Rating value={rating} size="small"/>
              </div>
            </div>
            <small className="text-xs font-bold min-[650px]:text-sm">
              Stock: {stock} available
            </small>
            <h3 className="text-2xl hidden min-[650px]:flex">Description</h3>
            <p className="hidden min-[650px]:flex">{productDescription}</p>
            <button className="mx-auto mt-6 hidden items-center gap-x-2 rounded-2xl border-[2px] border-gray-400 border-opacity-70 px-4 py-2 outline-none hover:bg-gray-200 active:bg-gray-300 min-[650px]:flex">
              Buy product
            </button>
          </section>
        </article>
      </section>
      <section className="flex flex-col gap-y-1">
        <h3 className="text-2xl min-[650px]:hidden">Description</h3>
        <p className="min-[650px]:hidden">{productDescription}</p>
        <button className="mx-auto mt-6 flex items-center gap-x-2 rounded-2xl border-[2px] border-gray-400 border-opacity-70 px-4 py-2 outline-none hover:bg-gray-200 active:bg-gray-300 min-[650px]:hidden">
          Buy product
        </button>
      </section>
    </main>
  );
}
