import Header from "~/components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default MainLayout;
