import { NextPage } from "next";

import PrivacyPolicy from "@/components/includes/privacy-policy";
import FooterCopyBar from "@/components/layout/footer/copy-bar";
import FooterLinks from "@/components/layout/footer/footer-links";
import Header from "@/components/layout/header";

const Policy: NextPage = () => {
	return (
		<main>
			<Header />

			<div className="mt-40"></div>
			<PrivacyPolicy />

			<div className="mt-20"></div>
			<FooterLinks />
			<FooterCopyBar />
		</main>
	);
};

export default Policy;
