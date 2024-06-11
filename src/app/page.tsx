"use client";

import Image from "next/image";
import cartoonCar from "@/images/cartoon-car-2.webp";
import { FaSpinner } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import { useSearchProduct } from "@/hooks/useSearchProducts";

export default function Home() {
  let [isSearching, setIsSearching] = useState(false);
  let product = useRef<HTMLInputElement>(null);
  let { searchProduct } = useSearchProduct();

  return (
    <main className="flex justify-center bg-black w-screen">
      <section className="flex min-h-screen flex-col items-center p-24 max-w-80 bg-white bg-opacity-[0.14]">
        <div className="bg-white shadow-2xl shadow-gray-400 flex flex-col items-center p-8 sm:p-14 gap-y-3 w-max rounded-xl">
          <div className="bg-slate-800 rounded-full">
            <Image
              src={cartoonCar}
              alt="Cartoon car representing the bazar"
              width={140}
              height={120}
              className="object-cover opacity-70 rounded-full"
              priority
            />
          </div>
          <h1 className="text-3xl text-center font-bold">Bazar Online</h1>
          <input
            type="search"
            className="py-2 px-4 outline-none rounded-md border-[2px] border-gray-400 border-opacity-70 w-full"
            placeholder={`laptops, smartphones, ...`}
            ref={product}
            onKeyUp={(ev) =>
              searchProduct({
                ev: ev as unknown as Event,
                product: product.current!.value,
              })
            }
          />
          <button
            onClick={(ev) =>
              searchProduct({
                product: product.current!.value,
              })
            }
            onClickCapture={() => setIsSearching(true)}
            className="hover:bg-gray-200 active:bg-gray-300 py-2 px-4 outline-none rounded-2xl border-[2px] border-gray-400 border-opacity-70 flex items-center gap-x-2"
          >
            {isSearching ? `Searching` : `Search`}
            {isSearching ? (
              <FaSpinner className="h-5 w-5 animate-spin" />
            ) : (
              <IoSearchOutline className="h-5 w-5" />
            )}
          </button>
        </div>
      </section>
    </main>
  );
}
