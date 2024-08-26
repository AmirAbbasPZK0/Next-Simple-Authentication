import { cookies } from "next/headers";

const CheckIsUser = () => {

    const token = cookies().get("token")

    if(token){
        return true
    }else{
        return false
    }

}

export default CheckIsUser;