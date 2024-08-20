import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextResponse } from "next/server"

export const options = {
    providers : [
        GithubProvider({
            profile(profile){
                console.log("Profile of github: ", profile)

                let userRole = "Github User"
                if(profile?.email === "grahamben7@gmail.com"){
                    userRole = "admin"
                }

                return {
                    ...profile,
                    role: userRole
                }
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            profile(profile){
                console.log("Profile of google: ", profile)


                let userRole = "Google User"
                if(profile?.email === "grahamben7work@gmail.com"){
                    // return
                    userRole = "admin"
                }

                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole
                }
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                    placeholder: "your-email"
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials){
                try {
                    
                } catch (error) {
                    console.log(error)
                }
                return null //^ This means that they will not be authenticated
            }
        }),
    ],
    
    // Adding role to the token
    callbacks: {
        async jwt({token, user}){
            if(user) token.role = user.role //Adding this specific role onto the token, on the server side
            return token
        },

        async  session({session, token}){
            if(session?.user) session.user.role = token.role
            return session
        }
    }
}