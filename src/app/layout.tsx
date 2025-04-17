import "@/styles/css/globals.css";

import type { Metadata, Viewport } from "next";

import { DEFINITION } from "@/constants";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import AOSInit from "@/components/aos-init";
import { Preloader } from "@/components/preloader";
import { inter, kaisei } from "@/styles/fonts";

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
};

export const viewport: Viewport = {
	themeColor: DEFINITION.theme,
	colorScheme: "normal",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={`${inter.variable} ${kaisei.variable}`} lang="pt-BR">
			<body className="bg-black text-white">
				<AOSInit />
				<Preloader />
				{children}
			</body>
		</html>
	);
}
