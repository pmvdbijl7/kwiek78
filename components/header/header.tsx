"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/logo";

export default function Header({ socials, topnav, leftnav, rightnav }: { socials: React.ReactNode; topnav: React.ReactNode; leftnav: React.ReactNode; rightnav: React.ReactNode }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 w-full z-50">
			<nav>
				<div className="hidden md:flex items-center justify-between px-6 h-8 text-xs font-semibold uppercase">
					<div className="flex items-center gap-2">
						<p>Volg ons op</p>

						<ul className="flex items-center gap-2">{socials}</ul>
					</div>

					<ul className="flex items-center gap-4">{topnav}</ul>
				</div>

				<div className={`${!mobileMenuOpen ? "" : "border-b border-neutral-900"} bg-black text-white w-full px-6 lg:px-2 h-16 flex items-center justify-between relative z-20`}>
					<ul className="hidden lg:flex text-sm font-semibold uppercase">{leftnav}</ul>

					<Link href="/" className="absolute left-1/2 transform -translate-x-1/2 top-4">
						<Logo />
					</Link>

					<ul className="hidden lg:flex text-sm font-semibold uppercase">{rightnav}</ul>

					<div className="flex lg:hidden">
						{!mobileMenuOpen ? (
							<button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center p-2.5">
								<span className="sr-only">Open menu</span>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>
							</button>
						) : (
							<button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 inline-flex items-center justify-center p-2.5">
								<span className="sr-only">Close menu</span>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						)}
					</div>
				</div>

				<div className={`${!mobileMenuOpen ? "hidden" : ""} lg:hidden absolute top-16 md:top-24 lef-0 w-full h-[calc(100dvh-64px)] md:h-[calc(100dvh-96px)] bg-black text-white p-6 z-10`}>
					<ul className="font-semibold uppercase">
						{leftnav}
						{rightnav}
					</ul>

					<div className="md:hidden w-full h-[1px] bg-neutral-900 my-6"></div>

					<ul className="md:hidden text-sm font-semibold uppercase">{topnav}</ul>
				</div>
			</nav>
		</header>
	);
}
