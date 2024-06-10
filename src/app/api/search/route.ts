import { NextResponse } from "next/server";
import { supabase } from '@/lib/supabase.js'

export async function POST(req: Request) {
    let { search } = await req.json();
    if (!search) {
        let { data: storeProducts, error } = await supabase
            .from('storeProducts')
            .select('id,title, productDescription, price, rating');

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
    let { data: storeProducts, error } = await supabase
        .from('storeProducts')
        .select('id,title,productDescription,price,rating')
        .or(`title.ilike.%${search}%,productDescription.ilike.%${search}%,category.ilike.%${search}%`);

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

// let sql = `SELECT id, title, productDescription, price, rating, thumbnail, category FROM storeProducts `
// let whereSentence = `WHERE title LIKE "%${search}%" OR productDescription LIKE "%${search}%" OR category LIKE "%${search}%"`
// let response: ProductInfo[] = await db.query(`${sql}${whereSentence}`);
// return NextResponse.json({ products: response }, {
//     status: 200,
//     statusText: "Search completed"
// })
