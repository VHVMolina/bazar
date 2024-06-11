"use client";

import Image from "next/image";
import cartoonCar from "@/images/cartoon-car-2.webp";
import { IoSearchOutline } from "react-icons/io5";
import { useRef } from "react";
import { useSearchProduct } from "@/hooks/useSearchProducts";
import { useRouter } from "next/navigation";

export const ItemSearchNav = () => {
  let navigate = useRouter();
  let product = useRef<HTMLInputElement>(null);
  let { searchProduct } = useSearchProduct();

  return (
    <header className="flex items-center gap-x-4">
      <Image
        src={cartoonCar}
        alt="Cartoon car representing the bazar"
        width={60}
        height={60}
        className="object-cover cursor-pointer"
        priority
        onClick={() => navigate.push("/")}
      />
      <div className="flex gap-x-4 items-center w-full border-[2px] border-gray-400 border-opacity-70 py-2 px-4">
        <input
          type="text"
          className="outline-none rounded-md w-full py-1"
          placeholder={`laptops, smartphones, ...`}
          ref={product}
          onKeyUp={(ev) =>
            searchProduct({
              ev: ev as unknown as Event,
              product: product.current!.value,
            })
          }
        />
        <div className="h-[30px] w-[2px] bg-gray-500 bg-opacity-30"></div>
        <IoSearchOutline
          className="h-6 w-6 cursor-pointer"
          onClick={() =>
            searchProduct({
              product: product.current!.value,
            })
          }
        />
      </div>
    </header>
  );
};
