import { signOut } from "@/lib/auth";

export default function Logout() {
	return (
		<form
			action={async () => {
				"use server";
				await signOut();
			}}
		>
			<button type="submit" className="text-xs font-semibold uppercase">
				Uitloggen
			</button>
		</form>
	);
}
