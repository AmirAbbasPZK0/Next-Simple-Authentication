const jwt = require("jsonwebtoken")

import { sign , verify } from "jsonwebtoken";
import { hash , compare } from 'bcrypt'

const hashPassword = async (password : string) => {
    const hashedPassword = await hash(password , 12)
    return hashedPassword
}

type TokenData = {
    email : string
}

const generateToken = (data : TokenData) => {
    const generatedToken = sign({...data} , process.env.PRIVATE_KEY! , {expiresIn : "24h"})
    return generatedToken
}

const verifyPass = async (password : string , hashedPass : string) => {
    const isValid = await compare(password , hashedPass)
    return isValid
}

const verifyTheToken = (token : string) => {
    try{
        const verifyToken = verify(token , process.env.PRIVATE_KEY!)
        return verifyToken
    }catch(err){
        console.log(err)
    }
}

export {generateToken , hashPassword , verifyPass , verifyTheToken}