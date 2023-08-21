import dbClient from "@/db/dbClient"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const POST = async(req) => {
    const client = await dbClient;
    const db = client.db("nextjs_db")
    const collection = db.collection("todos")

    const {id, title} =await req.json()

    let find_todo = collection.findOne({_id:new ObjectId(id)})
    if(!find_todo) {
        return NextResponse.json({"error": 'todo not found for update'})
    }

    await collection.updateOne({_id:new ObjectId(id)}, {
        $set: {
            title
        }
    })
    return NextResponse.json({
        "message": "todo updated successfully",
        "id":id
    })
}