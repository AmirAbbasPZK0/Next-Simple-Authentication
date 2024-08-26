import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata : Metadata = {
    title : "Login",
    description : "Login Page"
}

const LoginLayout = ({children} : {children : ReactNode}) => {
    return (<>
        {children}
    </>);
}
 
export default LoginLayout;