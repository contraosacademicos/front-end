import React from "react";

import Image from "next/image";

import { FooterLinks, getNewsletter } from "@/app/(home)/actions";
import ellipse2 from "@/assets/shapes/ellipse2.svg";
import ellipse3 from "@/assets/shapes/ellipse3.svg";

import FooterCopyBar from "./copy-bar";
import FooterNavigation from "./footer-links";
import FooterModule from "./footer-module";
import FooterNewsletter from "./newsletter";

const Footer = async ({ data }: { data: FooterLinks[] | null }) => {
	const newsletter = await getNewsletter();
	return (
		<>
			<div className="relative">
				<Image
					src={ellipse2}
					alt="ellipse2"
					className="absolute bottom-0 left-0 z-elements overflow-x-hidden sm_tablet:w-96"
				/>
				<Image
					src={ellipse3}
					alt="ellipse3"
					className="absolute -bottom-72 right-0 z-elements overflow-x-hidden sm_tablet:w-96"
				/>

				<FooterModule />
			</div>

			<FooterNewsletter data={newsletter} />

			<FooterNavigation data={data} />

			<FooterCopyBar />
		</>
	);
};

export default Footer;
