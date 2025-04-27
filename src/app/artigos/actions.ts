/* eslint-disable no-comments/disallowComments */
"use server";

import { fetcher } from "@/lib/fetcher";

// MainBanner
// MainBanner
export type MainBanner = {
	title: string[];
	resume: string;
	backgroundImage: string | null;
	button: {
		text: string;
		link: string;
	};
	tags: string[];
};

export async function getMainBanner() {
	try {
		const response = await fetcher("main-banner", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		return response.data as MainBanner[];
	} catch (error) {
		console.error("Error fetching main banner:", error);
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

// FeaturedColumnists
// FeaturedColumnists
export type FeaturedColumnists = {
	id: number;
	name: string;
	image: string | null;
	author: number;
};

export async function getFeaturedColumnists() {
	try {
		const response = await fetcher("featuredColumnists", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as FeaturedColumnists[];
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
