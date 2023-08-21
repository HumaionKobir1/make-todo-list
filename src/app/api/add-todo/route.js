import dbClient from "@/db/dbClient";
import { NextResponse } from "next/server"



export const POST = async(req) => {
    const client = await dbClient;
    const db = await client.db("nextjs_db")
    const collection = await db.collection("todos")
    const {title} = await req.json()
    let todo = await collection.insertOne({"title":title})
    console.log("todo--->", todo)

    let find_todo = await collection.findOne({
        _id: todo.insertedId
    })
    return NextResponse.json({
       find_todo
    })
}