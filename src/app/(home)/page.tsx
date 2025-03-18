import { NextPage } from "next";

import Columns from "@/components/layout/columns";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Support from "@/components/layout/support";

const Home: NextPage = () => {
	return (
		<main>
			<Header />
			<div className="mt-40"></div>
			<Columns />
			<div className="mt-16"></div>
			<Support />
			<div className="mt-9"></div>
			<Footer />
		</main>
	);
};

export default Home;
