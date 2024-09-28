import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
	const url = req.nextUrl.clone();
	const token = await getToken({ req, secret: process.env.AUTH_SECRET }); // Extract JWT token

	// Define protected routes and required roles
	const protectedPages = [
		{ path: "/contact", roles: ["Admin"] },
		{ path: "/faq", roles: ["Voorzitter"] },
	];

	// Check if the page is protected and if the user has the correct role
	const matchedPage = protectedPages.find((page) => url.pathname.startsWith(page.path));

	if (matchedPage) {
		if (!token || !token.roles || !token.roles.some((role) => matchedPage.roles.includes(role))) {
			// Redirect to login page if not authenticated or incorrect role
			url.pathname = "/inloggen";
			return NextResponse.redirect(url);
		}
	}

	return NextResponse.next(); // Proceed if conditions are met
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
