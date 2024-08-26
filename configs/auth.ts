import { sign } from "jsonwebtoken";
import { hash , compare} from 'bcrypt'

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

export {generateToken , hashPassword , verifyPass}