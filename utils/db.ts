import mongoose from "mongoose";

const DataBaseConnection = async () => {
    try{
        if(mongoose.connections[0].readyState){
            return false
        }
        await mongoose.connect("mongodb://127.0.0.1:27017/n-a").then(()=> {
            console.log("Data Base Connection was successfully")
        })
    }catch(err){
        console.log(err)
    }

}
 
export default DataBaseConnection;