import { ProductInfo, SingleProduct } from "@/interfaces/interfaces";
import { Dispatch, SetStateAction, createContext } from "react";

interface Props {
    productsInfo: ProductInfo[] | null;
    setProductsInfo: Dispatch<SetStateAction<ProductInfo[] | null>>;
    productInfo: SingleProduct[] | null;
    setProductInfo: Dispatch<SetStateAction<SingleProduct[] | null>>;
  }

export const ProductsContext = createContext<Props | null>(null);