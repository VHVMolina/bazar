'use client';

import { ItemSearchNav } from "@/components/ItemSearchNav";
import { ItemSearchBody } from "@/components/ItemSearchBody";

export default function ItemSearch() {
  return (
    <main className="py-6 px-6 bg-gray-100 flex flex-col gap-y-3">
      <section>
        <ItemSearchNav />
      </section>
      <section className="flex flex-col gap-y-6">
        <ItemSearchBody />
      </section>
    </main>
  );
}
