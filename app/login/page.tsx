"use client"

import { FieldValues, useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    
    const {register , handleSubmit} = useForm()
    const [pending , setPending] = useState(false)
    const router = useRouter()

    const onSubmit = (e : FieldValues) => {
        setPending(true)
        fetch("/api/auth/login" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(e)
        }).then(res => {
            return res.json()
        }).then(data => {
            setPending(false)
            router.push("/")
            router.refresh()
            alert(data.message)
        }).catch(err => {
            console.log(err)
            setPending(false)
        })
    }
    
    return (<>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Log in</h1>
                    <input
                        {...register("connector" , {required : true})}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Username | Email" />
                    <input
                        {...register("password" , {required : true})}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Password" />
                    {pending ? (
                        <button
                            type="submit"
                            disabled
                            className="w-full text-slate-800 text-center py-3 rounded bg-green  hover:bg-green-dark focus:outline-none my-1"
                        >Pending..</button>
                    ) : (
                        <button
                            type="submit"
                            className="w-full text-slate-800 text-center py-3 rounded bg-green hover:bg-green-dark focus:outline-none my-1"
                        > Login</button>
                    )}
                </form>
            </div>
        </div>
    </>);
}
 
export default LoginPage;