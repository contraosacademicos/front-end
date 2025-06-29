import { NextPage } from "next";

import ContactForm from "@/components/includes/contact-form";
import FooterCopyBar from "@/components/layout/footer/copy-bar";
import FooterNavigation from "@/components/layout/footer/footer-links";
import Header from "@/components/layout/header";

import { getCategories } from "./actions";

const Contato: NextPage = async () => {
	const categories = await getCategories();

	return (
		<main>
			<Header data={categories} />

			<div className="mt-52"></div>
			<ContactForm />

			<div className="mt-32"></div>
			<FooterNavigation />
			<FooterCopyBar />
		</main>
	);
};

export default Contato;
