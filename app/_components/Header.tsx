import Link from "next/link";
import CheckIsUser from "@/action/checkIsUser";
import LogOutButton from "./LogOutButton";

const Header = () => {

    const isUser = CheckIsUser()

    return (<>
        <nav className="flex items-center justify-center sticky z-999 h-[80px] bg-blue-400">
            <div className="flex items-center w-[100%] px-[50px] mx-[auto] max-w-[1200px] justify-between h-[80px]">
                <Link href={"/"}>Logo</Link>
                {isUser ? (
                    <ul className="flex items-center justify-center text-center">
                        <li className="px-2"><Link href={"/profile"}>Profile</Link></li>
                        <li className="px-2">
                            <LogOutButton/>
                        </li>
                    </ul>
                ) : (
                    <ul className="flex items-center justify-center text-center">
                        <li className="px-2">
                            <Link href={"/login"}>Login</Link>
                        </li>
                        <li className="px-2">
                            <Link href={"/signup"}>Signup</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    </>);
}

 
export default Header;