export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return <main className="flex h-[100dvh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">{children}</main>;
}
