import { NextPage } from "next";

import ContactForm from "@/components/includes/contact-form";
import FooterCopyBar from "@/components/layout/footer/copy-bar";
import FooterNavigation from "@/components/layout/footer/footer-links";
import Header from "@/components/layout/header";

import { getCategories, getFooterLinks } from "./actions";

const Contato: NextPage = async () => {
	const categories = await getCategories();
	const footerLinks = await getFooterLinks();

	return (
		<main>
			<Header data={categories} />

			<div className="mt-52"></div>
			<ContactForm />

			<div className="mt-32"></div>
			<FooterNavigation data={footerLinks} />
			<FooterCopyBar />
		</main>
	);
};

export default Contato;
