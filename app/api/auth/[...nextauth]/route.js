import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            // TODO: Get the clientId and clientSecret from console.cloud.google.com and setting up the application
            clientId: '',
            clientSecret: ''
        })
    ],
    async session({ session }){

    },
    async signIn({ profile }){

    },
})

export { handler as GET, handler as POST };