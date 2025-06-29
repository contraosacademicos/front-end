"use client";

import React from "react";

import Image from "next/image";

import { Newsletter } from "@/app/artigos/types";
import ellipse2 from "@/assets/shapes/ellipse2.svg";
import ellipse3 from "@/assets/shapes/ellipse3.svg";

import FooterCopyBar from "./copy-bar";
import FooterNavigation from "./footer-links";
import FooterModule from "./footer-module";
import FooterNewsletter from "./newsletter";

type FooterProps = {
	newsletter: Newsletter | null;
};

const Footer = ({ newsletter }: FooterProps) => {
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

			<FooterNavigation />

			<FooterCopyBar />
		</>
	);
};

export default Footer;
