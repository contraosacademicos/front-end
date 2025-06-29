import { NextPage } from "next";

import PrivacyPolicy from "@/components/includes/privacy-policy";
import FooterCopyBar from "@/components/layout/footer/copy-bar";
import FooterNavigation from "@/components/layout/footer/footer-links";
import Header from "@/components/layout/header";

import { getCategories } from "./actions";

const Policy: NextPage = async () => {
	const categories = await getCategories();

	return (
		<main>
			<Header data={categories} />

			<div className="mt-40"></div>
			<PrivacyPolicy />

			<div className="mt-20"></div>
			<FooterNavigation />
			<FooterCopyBar />
		</main>
	);
};

export default Policy;
