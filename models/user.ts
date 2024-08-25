import mongoose, { mongo } from "mongoose";
import User from "@/interfaces/user";


const userSchema = new mongoose.Schema<User>({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    }
})

const userModel = mongoose.models.User || mongoose.model("User" , userSchema)
export default userModel