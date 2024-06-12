"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { ProductInfo, SingleProduct } from "@/interfaces/interfaces";
import { ProductsContext } from "@/ProductContext/productContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let [productsInfo, setProductsInfo] = useState<ProductInfo[] | null>(null);
  let [productInfo, setProductInfo] = useState<SingleProduct[] | null>(null);

  return (
    <html lang="en" className="w-full flex justify-center">
      <ProductsContext.Provider
        value={{ productsInfo, setProductsInfo, productInfo, setProductInfo }}
      >
        <body
          className={`${inter.className} flex max-w-screen-xl items-center justify-center`}
        >
          {children}
        </body>
      </ProductsContext.Provider>
    </html>
  );
}
