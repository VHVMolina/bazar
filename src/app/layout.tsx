'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ProductInfo, SingleProduct } from "@/interfaces/interfaces";

interface Props {
  productsInfo: ProductInfo[] | null;
  setProductsInfo: Dispatch<SetStateAction<ProductInfo[] | null>>;
  productInfo: SingleProduct[] | null;
  setProductInfo: Dispatch<SetStateAction<SingleProduct[] | null>>;
}

const inter = Inter({ subsets: ["latin"] });

export const ProductsContext = createContext<Props | null>(null);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let [productsInfo, setProductsInfo] = useState<ProductInfo[] | null>(null);
  let [productInfo, setProductInfo] = useState<SingleProduct[] | null>(null);

  return (
    <html lang="en" className=" flex justify-center">
      <ProductsContext.Provider
        value={{ productsInfo, setProductsInfo, productInfo, setProductInfo }}
      >
        <body className={`${inter.className} max-w-80`}>{children}</body>
      </ProductsContext.Provider>
    </html>
  );
}
