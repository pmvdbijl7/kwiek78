import { object, string } from "zod";

export const loginSchema = object({
	email: string({ required_error: "E-mailadres is verplicht" }).min(1, "E-mailadres is verplicht").email("Ongeldig E-mailadres"),
	password: string({ required_error: "Wachtwoord is verplicht" }).min(1, "Wachtwoord is verplicht"),
});
