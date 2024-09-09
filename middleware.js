import { NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"

export default withAuth(function middleware(req){
        console.log(req.nextUrl.pathname)
        console.log(req.nextauth.token.role)

        // If you are not the admin and trying to go here, and they are already loggedin. - This is when they do not have the correct permissions.
        if(req.nextUrl.pathname.startsWith("/CreateUser") && req.nextauth.token.role !== "admin"){
            return NextResponse.rewrite(new URL("/Denied", req.url))
        }
    },

    {   
        callbacks: {
            authorized: ({token}) => !!token,
        },
    }
)



// export const config = { matcher : ["/"]}
// This will specifiy which pages will be protected.
export const config = { matcher : ["/CreateUser", "/pages/AddRecord", "/pages/EditRecord"]}