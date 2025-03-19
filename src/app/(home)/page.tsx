import { NextPage } from "next";

import Columnists from "@/components/includes/columnists";
import Columns from "@/components/includes/columns";
import Subscription from "@/components/includes/subscription";
import Support from "@/components/includes/support";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const Home: NextPage = () => {
	return (
		<main>
			<Header />
			<div className="mt-40"></div>
			<Subscription />
			<div className="mt-20"></div>
			<div className="flex justify-between wrapper lg_tablet:hidden">
				<Columnists />
				<Columns />
			</div>
			<div className="mt-16"></div>
			<Support />
			<div className="mt-9"></div>
			<Footer />
		</main>
	);
};

export default Home;
