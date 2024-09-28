import Link from "next/link";

const items = [
	{ name: "Nieuws", href: "/" },
	{ name: "Programma", href: "/" },
	{ name: "Uitslagen", href: "/" },
	{ name: "Teams", href: "/" },
];

export default function LeftNav() {
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
