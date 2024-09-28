import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

function saltAndHashPassword(password: any) {
	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);
	return hash;
}

async function main() {
	// Seed the admin role
	const adminRole = await db.role.upsert({
		where: { name: "Admin" },
		update: {},
		create: { name: "Admin" },
	});

	// Seed the admin user
	const hashedPassword = await saltAndHashPassword("pmvdbijl7");

	const adminUser = await db.user.upsert({
		where: { email: "pmvdbijl7@gmail.com" },
		update: {},
		create: {
			email: "pmvdbijl7@gmail.com",
			name: "Patrick van der Bijl",
			password: hashedPassword,
			roles: { connect: { id: adminRole.id } },
		},
	});

	console.log({ adminUser });
}

main()
	.then(async () => {
		await db.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await db.$disconnect();
		process.exit(1);
	});
