"use client"

import User from "@/interfaces/user"
import { useEffect , useState } from "react"


const ProfilePage = () => {

    const [data , setData] = useState<User | null>(null)
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch("http://localhost:3000/api/auth/me")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)
            setLoading(false)
        })
    },[])

    if(loading)
        return <div>Loading...</div>

    return (<>
        <div className="flex items-center flex-col justify-center h-[88vh]">
            <h1 className="text-[40px]">Profile Details</h1>
            <div className="border-2 border-md p-3 border-blue-400">
                <h1>Username : {data?.username}</h1>
                <h1>Email : {data?.email}</h1>
                <h1>Firstname : {data?.firstname}</h1>
                <h1>Lastname : {data?.lastname}</h1>
            </div>
        </div>
    </>);
}
 
export default ProfilePage;