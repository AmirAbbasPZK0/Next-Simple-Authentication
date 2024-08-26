"use client"

import { useRouter } from "next/navigation"

const LogOutButton = () => {
    
    const router = useRouter()

    const logOutHandler = () => {
        fetch("/api/auth/logout" , {
            method : "POST"
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            alert(data.message)
            router.push("/")
            router.refresh()
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (<>
        <button onClick={logOutHandler} className="flex items-center justify-center text-slate-100 p-3 rounded-sm bg-red-500">
            Log Out
        </button>
    </>);
}
 
export default LogOutButton;