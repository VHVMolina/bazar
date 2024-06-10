import { NextResponse } from "next/server";
import { db } from '@/lib/db.js'
import { ProductInfo } from "@/interfaces/interfaces";

export async function POST(req: Request) {
    let { search } = await req.json();
    if (!search) {
        let sql = `SELECT id, title, productDescription, price, rating, thumbnail, category FROM storeProducts `
        let response: ProductInfo[] = await db.query(`${sql}`);
        return NextResponse.json({ products: response }, {
            status: 200,
            statusText: "Search completed"
        })
    }

    let sql = `SELECT id, title, productDescription, price, rating, thumbnail, category FROM storeProducts `
    let whereSentence = `WHERE title LIKE "%${search}%" OR productDescription LIKE "%${search}%" OR category LIKE "%${search}%"`
    let response: ProductInfo[] = await db.query(`${sql}${whereSentence}`);
    return NextResponse.json({ products: response }, {
        status: 200,
        statusText: "Search completed"
    })
}