import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { db } from "@/lib/db";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	providers: [
		credentials({
			credentials: {
				email: { label: "E-mailadres", type: "email" },
				password: { label: "Wachtwoord", type: "password" },
			},
			authorize: async (credentials) => {
				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				const user = await db.user.findUnique({
					where: {
						email: credentials.email,
					},
					include: {
						roles: true, // Include all roles associated with the user
					},
				});

				if (!user) {
					return null;
				}

				const isValidPassword = await bcrypt.compare(credentials.password, user.password);

				if (!isValidPassword) {
					return null;
				}

				return {
					...user,
					roles: user.roles.map((role) => role.name), // Return an array of role names
				};
			},
		}),
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.roles = user.roles; // Store roles in the JWT token
			}
			return token;
		},
		session: async ({ session, token }) => {
			if (token) {
				session.user.roles = token.roles; // Add roles to the session object
			}
			return session;
		},
	},
	pages: {
		signIn: "/inloggen",
	},
});
