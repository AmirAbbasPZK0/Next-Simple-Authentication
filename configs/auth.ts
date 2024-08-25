import { sign } from "jsonwebtoken";
import { hash } from 'bcrypt'

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


export {generateToken , hashPassword}