import { signIn } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
	return (
		<>
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<Link href="/">
					<Image className="mx-auto h-12 w-auto" width={148} height={64} src="/kwiek78-logo.svg" alt="Kwiek '78 logo" />
				</Link>

				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-950">Inloggen in je account</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form
					action={async (formData) => {
						"use server";
						await signIn("credentials", {
							email: formData.get("email"),
							password: formData.get("password"),
							redirectTo: "/",
						});
					}}
					className="space-y-6"
				>
					<div>
						<label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-950">
							E-mailadres
						</label>

						<div className="mt-2">
							<input
								type="email"
								name="email"
								id="email"
								required
								autoFocus
								className="block w-full rounded-md border-0 px-2.5 py-1.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-between">
							<label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-950">
								Wachtwoord
							</label>

							<div className="text-sm">
								<Link href="#" className="font-semibold text-neutral-950 hover:text-neutral-800">
									Wachtwoord vergeten?
								</Link>
							</div>
						</div>
						<div className="mt-2">
							<input
								type="password"
								name="password"
								id="password"
								required
								className="block w-full rounded-md border-0 px-2.5 py-1.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-neutral-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
						>
							Inloggen
						</button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-neutral-500">
					Nog geen account?{" "}
					<Link href="#" className="font-semibold leading-6 text-neutral-950 hover:text-neutral-800">
						Vraag een account aan
					</Link>
				</p>
			</div>
		</>
	);
}
