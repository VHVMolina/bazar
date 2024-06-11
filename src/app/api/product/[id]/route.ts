import { supabase } from "@/lib/supabase.js"
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    console.log(params.id)

    let { data: storeProducts, error } = await supabase
        .from('storeProducts')
        .select('title, productDescription, price, rating, discountPercentage, brand, stock')
        .eq('id', params.id)

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