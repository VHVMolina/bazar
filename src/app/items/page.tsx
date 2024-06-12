"use client";

import { ItemSearchNav } from "@/components/ItemSearchNav";
import { ItemSearchBody } from "@/components/ItemSearchBody";
import { Suspense } from "react";

export default function ItemSearch() {
  return (
    <main className="bg-gray-100 w-screen flex justify-center bg-opacity-90">
      <section className="px-4 py-8 bg-white flex flex-col gap-y-3 max-w-screen-lg justify-center w-screen min-[500px]:px-6 sm:px-8 md:px-10 ">
        <article>
          <ItemSearchNav />
        </article>
        <article className="flex flex-col gap-y-6">
          <Suspense fallback={<div>Cargando...</div>}>
            <ItemSearchBody />
          </Suspense>
        </article>
      </section>
    </main>
  );
}
