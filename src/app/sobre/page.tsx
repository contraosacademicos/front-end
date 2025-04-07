import { NextPage } from "next";

import AboutUs from "@/components/includes/about-us";
import FooterCopyBar from "@/components/layout/footer/copy-bar";
import FooterLinks from "@/components/layout/footer/footer-links";
import Header from "@/components/layout/header";

const About: NextPage = () => {
	return (
		<main>
			<Header />

			<div className="mt-40"></div>
			<AboutUs />

			<div className="mt-20"></div>
			<FooterLinks />
			<FooterCopyBar />
		</main>
	);
};

export default About;
