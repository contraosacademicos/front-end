import { NextPage } from "next";

import AboutUs from "@/components/includes/about-us";
import FooterCopyBar from "@/components/layout/footer/copy-bar";
import FooterNavigation from "@/components/layout/footer/footer-links";
import Header from "@/components/layout/header";

import { getCategories } from "./actions";

const About: NextPage = async () => {
	const categories = await getCategories();

	return (
		<main>
			<Header data={categories} />

			<div className="mt-40"></div>
			<AboutUs />

			<div className="mt-20"></div>
			<FooterNavigation />
			<FooterCopyBar />
		</main>
	);
};

export default About;
