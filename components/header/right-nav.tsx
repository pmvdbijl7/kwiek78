import Link from "next/link";

const items = [
	{ name: "Onze club", href: "/" },
	{ name: "Sponsoring", href: "/" },
	{ name: "AZ", href: "/" },
];

export default function RightNav() {
	return (
		<>
			{items.map((item) => (
				<li key={item.name}>
					<Link href={item.href} className="block w-full py-2 lg:p-4 lg:h-full">
						{item.name}
					</Link>
				</li>
			))}
		</>
	);
}
