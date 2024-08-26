import { NextRequest, NextResponse } from "next/server"

export const middleware = (req : NextRequest) => {

    if(!req.cookies.get("token")){
        return NextResponse.redirect(new URL("/" , req.url))
    }

    return NextResponse.next()

}

export const config = {
    matcher : ['/profile']
}