"use client"

import { FieldValues, useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
    
    const {register , handleSubmit} = useForm()
    const [pending , setPending] = useState(false)
    const router = useRouter()

    const onSubmit = (e : FieldValues) => {
        setPending(true)
        fetch("/api/auth/signup" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(e)
        }).then(res => {
            return res.json()
        }).then(data => {
            setPending(false)
            router.push("/profile")
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
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        {...register("firstname" , {required : true})}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="First Name" />
                    <input
                        {...register("lastname" , {required : true})}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Last Name" />
                    <input
                        {...register("username" , {required : true})}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="User Name" />
                    <input 
                        {...register("email" , {required : true})}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Email" />
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
                        > Create Account</button>
                    )}

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <Link className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </Link> and 
                        <Link className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </Link>
                    </div>
                </form>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue" href="/login">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    </>);
}
 
export default SignUpPage;