import { NextPage } from "next";

import ContactForm from "@/components/includes/contact-form";
import FooterCopyBar from "@/components/layout/footer/copy-bar";
import FooterLinks from "@/components/layout/footer/footer-links";
import Header from "@/components/layout/header";

const Contato: NextPage = () => {
	return (
		<main>
			<Header />

			<div className="mt-52"></div>
			<ContactForm />

			<div className="mt-32"></div>
			<FooterLinks />
			<FooterCopyBar />
		</main>
	);
};

export default Contato;
