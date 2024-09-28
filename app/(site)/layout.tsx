import Header from "@/components/header/header";
import LeftNav from "@/components/header/left-nav";
import RightNav from "@/components/header/right-nav";
import Socials from "@/components/header/socials";
import TopNav from "@/components/header/top-nav";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{/* Header */}
			<Header socials={<Socials />} topnav={<TopNav />} leftnav={<LeftNav />} rightnav={<RightNav />} />

			{/* Main */}
			{children}

			{/* Footer */}
			<footer></footer>
		</>
	);
}
