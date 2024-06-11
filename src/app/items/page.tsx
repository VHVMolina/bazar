"use client";

import { ItemSearchNav } from "@/components/ItemSearchNav";
import { ItemSearchBody } from "@/components/ItemSearchBody";
import { Suspense } from "react";

export default function ItemSearch() {
  return (
    <main className="p-8 bg-white flex flex-col gap-y-3 max-w-screen-lg justify-center w-screen min-[400px]:w-11/12 min-[500px]:w-10/12 ">
      <section>
        <ItemSearchNav />
      </section>
      <section className="flex flex-col gap-y-6">
        <Suspense fallback={<div>Cargando...</div>}>
          <ItemSearchBody />
        </Suspense>
      </section>
    </main>
  );
}
