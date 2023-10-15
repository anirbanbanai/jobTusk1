
import connectMongoDb from "@/db/mongodb";
import Users from "@/models/users/Users";
import { NextResponse } from "next/server";


export async function POST(request: { json: () => PromiseLike<{ name: any; description: any; }> | { name: any; description: any; }; }) {
    const {name,description} = await request.json();
    const all = await Users.create({name, description});
    return NextResponse.json(all, {status: 200})
}

export async function GET(){
    await connectMongoDb();
    const allUser = await Users.find();
    return NextResponse.json(allUser)
}