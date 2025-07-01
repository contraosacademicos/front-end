import type { Config } from "tailwindcss";
import { blue, green, rose, slate, yellow } from "tailwindcss/colors";
import { PluginAPI } from "tailwindcss/types/config";

export const colors = {
	black: "#1e1d1d",
	darkest: "#010101",
	white: "#fff",
	primary: "#DBA232",
	coagray: "#858585",
	whitecontent: "#CFCFCF",

	danger: rose,
	succes: green,
	alert: yellow,
	info: blue,
	gray: slate,
};

const config: Config = {
	content: ["./src/**/*.tsx"],

	theme: {
		screens: {
			lg_desktop: { max: "1920px" },
			md_desktop: { max: "1440px" },
			sm_desktop: { max: "1366px" },
			es_desktop: { max: "1280px" },

			lg_tablet: { max: "1050px" },
			md_tablet: { max: "990px" },
			sm_tablet: { max: "730px" },
			es_tablet: { max: "600px" },

			lg_phone: { max: "490px" },
			md_phone: { max: "414px" },
			sm_phone: { max: "360px" },
			es_phone: { max: "320px" },
		},

		zIndex: {
			content: "0",
			elements: "1",
			header: "2",
			modal: "3",
			ovni: "999",
		},

		colors,

		fontFamily: {
			sans: [
				"var(--font-inter)",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"sans-serif",
			],
			serif: ["var(--font-kaisei)", "serif"],
			heading: ["var(--font-kaisei)", "serif"],
			body: ["var(--font-inter)", "sans-serif"],
		},

		fontSize: {
			h1: "87px",
			h2: "48px",
			h3: "32px",
			h4: "28px",
			h5: "24px",
			h6: "18px",
			base: "16px",
			p: "14px",
			xs: "12px",
		},

		extend: {
			keyframes: {},
			fontSize: {},
			lineHeight: {},
			animation: {},
		},
	},

	plugins: [
		require("tailwind-scrollbar"),
		({ addUtilities }: PluginAPI) => {
			addUtilities({
				".wrapper": {
					maxWidth: "calc(1440px + 48px)",
					"@apply mx-auto px-6": {},
				},
				".frame": {
					"@apply h-full w-full object-cover": {},
				},
				".center": {
					"@apply grid place-items-center": {},
				},
				".text-limit-2": {
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
					WebkitLineClamp: "2",
					overflow: "hidden",
					textOverflow: "ellipsis",
				},
				".text-limit-1": {
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
					WebkitLineClamp: "1",
					overflow: "hidden",
					textOverflow: "ellipsis",
				},
			});
		},
	],
};
export default config;
