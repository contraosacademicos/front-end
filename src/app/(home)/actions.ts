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

// FeaturedArticles
// FeaturedArticles
export type FeaturedArticles = {
	id: number;
	title: string;
	image: string | null;
	author: {
		id: number;
		name: string;
	};
};

export async function getFeaturedArticles() {
	try {
		const response = await fetcher("featuredArticles", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as FeaturedArticles[];
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}

// BannerCreateAcc
// BannerCreateAcc
export type BannerCreateAcc = {
	message: string;
	backgroundImage: string | null;
};

export async function getBannerCreateAcc() {
	try {
		const response = await fetcher("bannerCreateAcc", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as BannerCreateAcc;
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}

// PricingTable
// PricingTable
export type PricingTable = {
	id: number;
	planName: string;
	price: string;
	features: string[];
};

export async function getPricingTable() {
	try {
		const response = await fetcher("pricingTable", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
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

// Newsletter
// Newsletter
export type Newsletter = {
	message: string;
	callToAction: string;
};

export async function getNewsletter() {
	try {
		const response = await fetcher("newsletter", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as Newsletter;
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}

// LatestArticles
// LatestArticles
export type LatestArticles = {
	id: number;
	title: string;
	image: string | null;
	author: {
		id: number;
		name: string;
	};
};

export async function getLatestArticles() {
	try {
		const response = await fetcher("latestArticles", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as LatestArticles[];
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}

// TrendingArticle
// TrendingArticle
export type TrendingArticle = {
	id: number;
	title: string;
	backgroundImage: string | null;
	shortDescription: string;
};

export async function getTrendingArticle() {
	try {
		const response = await fetcher("trendingArticle", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as TrendingArticle;
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}

// TopAuthor
// TopAuthor
export type TopAuthor = {
	id: number;
	articlesPosted: number;
	name: string;
	profilePicture: string | null;
};

export async function getTopAuthors() {
	try {
		const response = await fetcher("topAuthors", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as TopAuthor[];
	} catch (error) {
		console.error("Error fetching top authors:", error);
		return null;
	}
}

// AuthorArticles
// AuthorArticles
export type AuthorArticles = {
	id: number;
	title: string;
	image: string | null;
	author: {
		name: string;
	};
};

export async function getAuthorArticles() {
	try {
		const response = await fetcher("authorArticles", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data as AuthorArticles[];
	} catch (error) {
		console.error("Error fetching author articles:", error);
		return null;
	}
}
