import dbClient from "@/db/dbClient"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const POST = async(req) => {
    const client = await dbClient
    const db = client.db("nextjs_db");
    const collection = db.collection("todos");

    const {id} = await req.json();
    const find_todo = await collection.findOne({_id: new ObjectId(id)})
    console.log("find_todo -------->", find_todo)

    if(!find_todo){
        return NextResponse.json({"error":"Todo Not Found"})
    }

    await collection.deleteOne({_id:new ObjectId(id)})

    return NextResponse.json({
        "message": "Todo Deleted Successfully",
        "id":id
    })
}