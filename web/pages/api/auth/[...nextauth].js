import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {getUserApi, loginApi} from "../../../services/authApi";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'credentials',
            async authorize(credentials, req) {
                try {
                    const token = await loginApi(credentials)
                    if (token) {
                        const user = await getUserApi(token.data.accessToken);
                        if (user) {
                            return {...user.data, accessToken: token.data.accessToken};
                        }
                    } else {
                        return null
                    }
                } catch (error) {
                    throw new Error(error.response.data.message)
                }
            }
        })
    ],
    callbacks: {
        // Getting the JWT token from API response
        async jwt({token, user}) {
            return {...token, ...user};
        },

        async session({session, token, user}) {
            session.user = token;
            return session;
        },
    },
    session: {
        strategy: "jwt",

        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 24 * 60 * 60, // 30 days
    },
    pages: {
        signIn: '/auth/login',
        signOut: '/',
    }
}
export default NextAuth(authOptions)