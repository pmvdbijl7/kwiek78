import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const items = [
	{ name: "Facebook", href: "/", icon: FaFacebookF },
	{ name: "Instagram", href: "/", icon: FaInstagram },
];

export default function Socials() {
	return (
		<>
			{items.map((item) => (
				<li key={item.name}>
					<Link href={item.href}>
						<item.icon aria-hidden="true" className="h-4 w-4" />
					</Link>
				</li>
			))}
		</>
	);
}
