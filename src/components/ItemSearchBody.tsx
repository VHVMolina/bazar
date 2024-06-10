import { useSearchParams } from "next/navigation";
import { ProductCard } from "./ProductCard";
import { useContext } from "react";
import { ProductsContext } from "@/app/layout";
import { useHandleSearch } from "@/hooks/useHandleNullSearch";

export const ItemSearchBody = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  let store = useContext(ProductsContext);
  let handleSearch = useHandleSearch();

  if (!store?.productsInfo) {
    handleSearch();
    return;
  }

  let { productsInfo } = store;
  console.log(productsInfo)
  return (
    <>
      <article className="flex flex-col gap-y-2">
        <h1 className="font-bold">
          Results of search "{search}": {productsInfo.length}
        </h1>
      </article>
      <article className="flex flex-col gap-y-7">
        {productsInfo &&
          productsInfo.map((product) => (
            <ProductCard {...product} key={product.title} />
          ))}
      </article>
    </>
  );
};
