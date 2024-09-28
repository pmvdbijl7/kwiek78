import { db } from "@/lib/db";

export async function getUserFromDb(email, pwHash) {
	try {
		// Look for the user with matching email and password
		const user = await db.user.findUnique({
			where: {
				email,
			},
		});

		// If the user exists and the hashed password matches, return the user
		if (user && user.password === pwHash) {
			return user;
		}

		// If no matching user, return null
		return null;
	} catch (error) {
		console.log(error);
		return null;
	}
}
