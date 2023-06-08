import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      // TODO: Get the clientId and clientSecret from console.cloud.google.com and setting up the application
      clientId: "",
      clientSecret: "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        //TODO: Check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        //TODO: If the user doesn't exists create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.username.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export { handler as GET, handler as POST };
