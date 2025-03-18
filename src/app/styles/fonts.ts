import { Inter, Kaisei_Decol } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["400", "500", "600", "700", "800"],
});

const kaisei = Kaisei_Decol({
	subsets: ["latin"],
	variable: "--font-kaisei",
	weight: ["400", "500", "700"],
});

export { inter, kaisei };
