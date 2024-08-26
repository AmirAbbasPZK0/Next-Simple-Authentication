import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(){
    cookies().set("token" , "" , {maxAge : 0})
    return NextResponse.json({message : "User Logged out successfully"})
}