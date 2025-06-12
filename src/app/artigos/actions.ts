/* eslint-disable no-comments/disallowComments */
"use server";

import {
	Categories,
	FeaturedColumnists,
	FooterLinks,
	MainBanner,
	Newsletter,
	Post,
	PricingTable,
} from "@/app/artigos/types";
import { fetcher } from "@/lib/fetcher";

export async function getMainBanner() {
	try {
		const response = await fetcher("main-banner", {
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

		return response.data as MainBanner[];
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}

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
		console.error("Error fetching post:", error);
		return null;
	}
}

export async function getFeaturedColumnists() {
	try {
		const response = await fetcher("featuredColumnists", {
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

		return response.data as FeaturedColumnists[];
	} catch (error) {
		console.error("Error fetching featuredColumnists:", error);
		return null;
	}
}

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
		console.error("Error fetching footer links:", error);
		return null;
	}
}

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
		console.error("Error fetching pricing table:", error);
		return null;
	}
}

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
		console.error("Error fetching categories:", error);
		return null;
	}
}

export async function getNewsletter() {
	try {
		const response = await fetcher("newsletter", {
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
		return response.data as Newsletter;
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}
