import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata : Metadata = {
    title : "Profile",
    description : "Profile Page"
}

const ProfileLayout = ({children} : {children : ReactNode}) => {

    return (<>
        {children}
    </>);
}
 
export default ProfileLayout;