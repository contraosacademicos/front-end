/* eslint-disable no-comments/disallowComments */

import { fetcher } from "@/lib/fetcher";

// Categories
// Categories
export type Category = {
	id: number;
	nome: string;
	ativo: number;
	created_at: string;
	updated_at: string;
};

export type Categories = Category[];

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

// Authors
// Authors
export type Author = {
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
	posts_count: number;
	name: string;
	posts: {
		id: number;
		title: string;
		content: string;
		user_id: number;
		banner: string;
		category_id: number;
		short_description: string;
		status: number;
		banner_highlight: string | null;
		slug: string;
		coming_soon: number;
		type: string;
		created_at: string;
		updated_at: string;
		deleted_at: string | null;
		translator_id: number | null;
		exclusive_content: number;
		author_id: number;
		columnist_id: number | null;
		draft: number;
		published_at: string;
		likes: number;
		views: number;
		highlight: string | null;
		image: string;
		category: {
			id: number;
			nome: string;
			ativo: number;
		};
	}[];
};

export async function getAuthors(): Promise<Author[] | null> {
	try {
		const response = await fetcher("authors", {
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

		return response.data as Author[];
	} catch (error) {
		console.error("Error fetching authors:", error);
		return null;
	}
}

export async function getAuthorBySlugOrId(
	slugOrId: string,
): Promise<Author | null> {
	try {
		const response = await fetcher(`authors/${slugOrId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			cache: "no-store",
		});

		if (!response.ok) {
			throw new Error(`Erro ao buscar autor: ${response.statusText}`);
		}

		return response.data as Author;
	} catch (error) {
		console.error(`Erro ao buscar autor com slug/id ${slugOrId}:`, error);
		return null;
	}
}
