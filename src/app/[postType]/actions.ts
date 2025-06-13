/* eslint-disable no-comments/disallowComments */
"use server";

import { fetcher } from "@/lib/fetcher";

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
		status: number;
		banner_highlight: string | null;
		slug: string;
		coming_soon: number;
		type: string;
		created_at: string;
		updated_at: string;
		exclusive_content: number;
		draft: number;
		published_at: string;
		likes: number;
		views: number;
		highlight: string | null;
		tags: string[];
		author: {
			id: number;
			nome: string;
			resumo: string;
			link: string | null;
			profile_picture: string;
			ativo: number;
			created_at: string;
			updated_at: string;
			user_id: number;
			deleted_at: string | null;
			slug: string | null;
		};
		translator: {
			id: number;
			name: string;
			description: string;
			user_id: number | null;
			active: string;
			created_at: string;
			updated_at: string;
			deleted_at: string | null;
			profile_picture: string;
			slug: string;
		} | null;
		category: {
			id: number;
			nome: string;
			ativo: number;
			created_at: string;
			updated_at: string;
		};
	};
};

export async function getPost(slug: string) {
	try {
		const response = await fetcher(`posts/${slug}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			cache: "no-store",
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		return response.data as Post;
	} catch (error) {
		console.error("Error fetching featuredColumnists:", error);
		return null;
	}
}

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
			cache: "no-store",
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
			cache: "no-store",
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

// PricingTable
// PricingTable
export type PricingTable = {
	id: number;
	name: string;
	recurring: string;
	price: string;
	discount: string | null;
	best_value: number;
	url: string;
	total_price: string;
	description: string | null;
};

export async function getPricingTable() {
	try {
		const response = await fetcher("pricingTable", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			cache: "no-store",
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as PricingTable[];
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}
