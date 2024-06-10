import Image from "next/image";
import cartoonCar from "@/images/cartoon-car.webp";
import { IoSearchOutline } from "react-icons/io5";
import { useRef } from "react";
import { useSearchProduct } from "@/hooks/useSearchProducts";
import { useRouter } from "next/navigation";

export const ItemSearchNav = () => {
  let navigate = useRouter()
  let product = useRef<HTMLInputElement>(null);
  let { searchProduct } = useSearchProduct();

  return (
    <header className="flex items-center">
      <Image
        src={cartoonCar}
        alt="Cartoon car representing the bazar"
        width={60}
        height={60}
        className="object-cover cursor-pointer"
        priority
        onClick={() => navigate.push('/')}
      />
      <input
        type="search"
        className="py-2 px-4 outline-none rounded-md w-full h-max"
        placeholder={`laptops, smartphones, ...`}
        ref={product}
        onKeyUp={(ev) => searchProduct({
          ev: ev as unknown as Event,
          product: product.current!.value
        })}
      />
      <IoSearchOutline
        className="h-5 w-5"
        onClick={() => searchProduct({
          product: product.current!.value
        })}
      />
    </header>
  );
};
