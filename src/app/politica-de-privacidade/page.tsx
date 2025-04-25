import { NextPage } from "next";

import PrivacyPolicy from "@/components/includes/privacy-policy";
import FooterCopyBar from "@/components/layout/footer/copy-bar";
import FooterNavigation from "@/components/layout/footer/footer-links";
import Header from "@/components/layout/header";

import { getCategories, getFooterLinks } from "./actions";

const Policy: NextPage = async () => {
	const categories = await getCategories();
	const footerLinks = await getFooterLinks();

	return (
		<main>
			<Header data={categories} />

			<div className="mt-40"></div>
			<PrivacyPolicy />

			<div className="mt-20"></div>
			<FooterNavigation data={footerLinks} />
			<FooterCopyBar />
		</main>
	);
};

export default Policy;
