import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata : Metadata = {
    title : "SignUp",
    description : "SignUp Page"
}

const SignUpLayout = ({children} : {children : ReactNode}) => {
    return (<>
        {children}
    </>);
}
 
export default SignUpLayout;