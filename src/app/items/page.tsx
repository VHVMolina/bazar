"use client";

import { ItemSearchNav } from "@/components/ItemSearchNav";
import { ItemSearchBody } from "@/components/ItemSearchBody";
import { Suspense } from "react";

export default function ItemSearch() {
  return (
    <main className="px-2 py-4 bg-white flex flex-col gap-y-3 max-w-screen-lg justify-center w-screen min-[400px]:w-11/12 min-[500px]:w-10/12 min-[400px]:p-4 min-[500px]:p-8">
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
