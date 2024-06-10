import { SingleProduct } from "@/interfaces/interfaces";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    let { id } = await req.json();

    let sql = `SELECT title, productDescription, price, rating , stock, brand, category, discountPercentage FROM storeProducts `
    let whereSentence = `WHERE id = "${id}"`
    let response : SingleProduct[] = await db.query(`${sql}${whereSentence}`);
    return NextResponse.json({products: response}, {
        status: 200,
        statusText: "Search completed"
    })
}