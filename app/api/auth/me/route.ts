import { cookies } from "next/headers";
import { verifyTheToken } from "@/configs/auth";
import { NextResponse } from "next/server";
import userModel from "@/models/user";
import DataBaseConnection from "@/utils/db";


export async function GET(){

    DataBaseConnection()
    
    const token = cookies().get("token")?.value
    const tokenPayload : any = verifyTheToken(token!)

    if(!tokenPayload){
        return NextResponse.json({message : "Token Is not Valid" , action : false})
    }

    const user = await userModel.findOne({
        $or : [{email : tokenPayload.email}]
    })

    if(user){
        return NextResponse.json(user)
    }else{
        return NextResponse.json({message : "Failed To Operate" , action : false})
    }

}