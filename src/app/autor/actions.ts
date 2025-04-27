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

// Post
// Post
export type Post = {
	data: {
		id: number;
		title: string;
		content: string;
		user_id: number;
		banner: string | null;
		category_id: number;
		short_description: string;
		status: string;
		banner_highlight: string | null;
		slug: string;
		coming_soon: string | null;
		type: string;
		created_at: string;
		updated_at: string;
		deleted_at: string | null;
		translator_id: number | null;
		exclusive_content: boolean;
		author_id: number;
		columnist_id: number;
	}[];
};

export async function getPost() {
	try {
		const response = await fetcher("posts", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as Post;
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
