import dbClient from "@/db/dbClient";
import { NextResponse } from "next/server"


export const GET = async(req) => {
    const client = await dbClient;
    const db = await client.db("nextjs_db")
    const collection = await db.collection("todos")
    await collection.insertOne({"title": "Ths is a test Title 1"})

    return NextResponse.json({
        "message": "this is test Get api"
    })
}