/* eslint-disable no-comments/disallowComments */
"use server";

import { fetcher } from "@/lib/fetcher";

// MainBanner
// MainBanner
export type MainBanner = {
	title: string;
	backgroundImage: string | null;
};

export async function getMainBanner() {
	try {
		const response = await fetcher("main-banner", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
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
