import { NextResponse } from "next/server";
import DataBaseConnection from "@/utils/db";
import userModel from "@/models/user";
import { generateToken , hashPassword } from "@/configs/auth";
import { cookies } from "next/headers";

export async function POST(req : Request){

    DataBaseConnection()

    const {firstname , lastname , email , username , password} = await req.json()

    const isUserExists = await userModel.findOne({
        $or : [{email} , {username}]
    })

    if(isUserExists){
        return NextResponse.json({message : "This Username or Email has already been taken!"})
    }

    const hashedPassword = await hashPassword(password)

    const token = generateToken({email})

    const user = await userModel.create({
        username,email,firstname,lastname,password : hashedPassword
    })

    if(user){
        cookies().set("token" , token , {maxAge : 60 * 60 * 24 , path : "/" , httpOnly : true})
        return NextResponse.json({message : "Sign up operation was Successfull"})
    }else{
        return NextResponse.json({message : "Failed To Sign Up"})
    }

}