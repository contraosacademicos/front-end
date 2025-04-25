/* eslint-disable no-comments/disallowComments */

import { fetcher } from "@/lib/fetcher";

// Categories
// Categories
export type Categories = {
	id: number;
	data: {
		id: number;
		nome: string;
		ativo: boolean;
	}[];
};

export async function getCategories() {
	try {
		const response = await fetcher("categories", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as Categories;
	} catch (error) {
		console.error("Error fetching author articles:", error);
		return null;
	}
}

// Articles
// Articles
export type Articles = {
	articles: {
		id: number;
		title: string;
		author: string;
		date: string;
		image: string | null;
		excerpt: string;
		slug: string;
		tags: string[];
		comments: number;
		likes: number;
	}[];
	columnists: {
		name: string;
		posts: number;
		profilePicture: string | null;
	}[];
	weeklyHighlights: {
		title: string;
		author: string;
	}[];
};

export async function getArticles() {
	try {
		const response = await fetcher("articles", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		return response.data as Articles;
	} catch (error) {
		console.error("Error fetching top authors:", error);
		return null;
	}
}

// FooterLinks
// FooterLinks
export type FooterLinks = {
	title: string;
	links: {
		name: string;
		url: string;
	}[];
};

export async function getFooterLinks() {
	try {
		const response = await fetcher("footerLinks", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as FooterLinks[];
	} catch (error) {
		console.error("Error fetching author articles:", error);
		return null;
	}
}
