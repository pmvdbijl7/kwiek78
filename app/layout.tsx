import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Kwiek '78",
		default: "Kwiek '78",
	},
	description: "Voetbalvereniging Kwiek '78",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<SessionProvider>
			<html lang="nl">
				<body className={`${inter.className} antialiased`}>{children}</body>
			</html>
		</SessionProvider>
	);
}
