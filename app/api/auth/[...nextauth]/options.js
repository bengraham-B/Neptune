import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import AzureADProvider from "next-auth/providers/azure-ad"
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
                    return NextResponse({"message": "Not registered user"}, {status:403})
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
                // console.log("Profile of google: ", profile)

                const acceptedEmails = ["grahamben7@gmail.com", "user1@gmail.com", "user2@gmail.com", "user3@gmail.com"];
                let userRole = "Google User";
        
                if (acceptedEmails.includes(profile?.email)) {
                  if (profile?.email === "grahamben7@gmail.com") {
                    userRole = "admin";
                  }
                  return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                  };
                } else {
                  // Redirect to the "/Denied" page if the email is not in the accepted list
                  return NextResponse.redirect("/Denied", 403);
                }


            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            // authorization: { params: { prompt: "select_account" } }, // Force account selection each time
        }),
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         email: {
        //             label: "email",
        //             type: "text",
        //             placeholder: "your-email"
        //         },
        //         password: {
        //             label: "password",
        //             type: "password",
        //             placeholder: "your-password"
        //         }
        //     },
        //     // Add this later 01:22:00
        //     async authorize(credentials){
        //         try {
        //             const founduser = "await" 
        //         } catch (error) {
        //             console.log(error)
        //         }
        //         return null //^ This means that they will not be authenticated
        //     }
        // }),
    ],

    // secret: process.env.SECRET,

     // Add session configuration here
     session: {
        strategy: "jwt", // Use JSON Web Token for sessions
        maxAge: 30 * 24 * 60 * 60, // Set session duration (e.g., 30 days)
        updateAge: 24 * 60 * 60, // Optional: Set interval for refreshing the session in seconds
    },

    jwt: {
        maxAge: 60 * 60 * 60, // 1 hour
      },
    
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