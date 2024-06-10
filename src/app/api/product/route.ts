import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    let { id } = await req.json();

    let { data: storeProducts, error } = await supabase
        .from('storeProducts')
        .select('title, productDescription, price, rating, discountPercentage, brand, stock')
        .eq('id', id)
        

    if (error) {
        return NextResponse.json({ error }, {
            status: 400,
            statusText: "An error has been occured"
        })
    }

    return NextResponse.json({ products: storeProducts }, {
        status: 200,
        statusText: "Search completed"
    })
}