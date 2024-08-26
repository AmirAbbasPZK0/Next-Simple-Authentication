import DataBaseConnection from "@/utils/db";
import { NextResponse } from "next/server";
import userModel from "@/models/user";
import { generateToken, verifyPass } from "@/configs/auth";
import { cookies } from "next/headers";


export async function POST(req : Request){

    DataBaseConnection()

    const {connector , password} = await req.json()

    const user = await userModel.findOne({
        $or : [{username : connector} , {email : connector}]
    })

    if(!user){
        return NextResponse.json({message : "This User Does not exists"})
    }

    const isPasswordCorrect = await verifyPass(password , user.password)

    const token = generateToken({email : user.email})
    
    if(isPasswordCorrect){
        cookies().set("token" , token , {httpOnly : true , path : "/" , maxAge : 24 * 60 * 60})
        return NextResponse.json({message : `Welcome Back ${user.username}`})
    }else{
        return NextResponse.json({message : "Failed to Login"})
    }
    
}