import { auth } from "@/lib/auth";
import Link from "next/link";

const items = [
	{ name: "Lid worden", href: "/" },
	{ name: "Webshop", href: "/" },
	{ name: "FAQ", href: "/faq" },
	{ name: "Contact", href: "/contact" },
];

export default async function TopNav() {
	const session = await auth();

	return (
		<>
			{items.map((item) => (
				<li key={item.name}>
					<Link href={item.href} className="block w-full py-1 md:p-0">
						{item.name}
					</Link>
				</li>
			))}
			<li>
				{!session?.user ? (
					<Link href="/inloggen" className="block w-full py-1 md:p-0">
						Inloggen
					</Link>
				) : (
					<Link href="/dashboard" className="block w-full py-1 md:p-0">
						Dashboard
					</Link>
				)}
			</li>
		</>
	);
}
