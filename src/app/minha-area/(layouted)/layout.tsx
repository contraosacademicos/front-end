import type { Metadata, Viewport } from "next";

import HeaderUserArea from "@/components/layout/header/header-user-area";
import { DEFINITION } from "@/constants";

import FooterUserArea from "../components/footer-user-area";
import NavUserArea from "../components/nav-user-area";

export const metadata: Metadata = {
	metadataBase: new URL(DEFINITION.url),
	title: {
		default: DEFINITION.title,
		template: `%s ${DEFINITION.resumeTitle}`,
	},

	description: DEFINITION.description,
	robots: "/robots.txt",

	openGraph: {
		type: "website",
		title: `Acessar ${DEFINITION.title}`,
		description: DEFINITION.description,
		siteName: DEFINITION.name,
		locale: "pt_BR",
		alternateLocale: "en_US",
		url: DEFINITION.url,
		countryName: "Brasil",
	},

	twitter: {
		title: `Acessar ${DEFINITION.title}`,
		description: DEFINITION.description,
		card: "summary_large_image",
		creator: "@qneves",
	},

	icons: [
		{
			rel: "apple-touch-icon",
			url: "/apple-touch-icon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
		{
			rel: "icon",
			url: "/favicon.ico",
		},
	],

	authors: [
		{
			name: "Gabriel Neves",
			url: "https://github.com/qneves",
		},
	],

	appleWebApp: true,
};

export const viewport: Viewport = {
	themeColor: DEFINITION.theme,
	colorScheme: "normal",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function UserAreaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<HeaderUserArea />

			<div className="mt-44"></div>

			<div className="flex gap-8 wrapper">
				<NavUserArea />
				{children}
			</div>

			<div className="mt-32"></div>

			<FooterUserArea />
		</>
	);
}
