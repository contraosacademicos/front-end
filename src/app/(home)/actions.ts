/* eslint-disable no-comments/disallowComments */
"use server";

import { fetcher } from "@/lib/fetcher";

// MainBanner
// MainBanner
export type MainBanner = {
	url: string;
	banners: {
		mobile: string | null;
		desktop: string | null;
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

// FeaturedArticles
// FeaturedArticles
export type FeaturedArticles = {
	id: number;
	title: string;
	image: string | null;
	slug: string;
	type: string;
	highlight: number;
	author: {
		id: number;
		name: string;
	};
};

export async function getFeaturedArticles() {
	try {
		const response = await fetcher("posts/featuredArticles", {
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
		return response.data as FeaturedArticles[];
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}

// BannerCreateAcc
// BannerCreateAcc
export type BannerCreateAcc = {
	text: string[];
	backgroundImage: string | null;
	button: {
		text: string;
		link: string;
	};
};

export async function getBannerCreateAcc() {
	try {
		const response = await fetcher("bannerCreateAcc", {
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

export type NewsletterPayload = {
	email: string;
};

export type NewsletterResponse = {
	success: boolean;
	message: string;
};

export async function postNewsletter(payload: NewsletterPayload) {
	try {
		const response = await fetcher("newsletter", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(payload),
			cache: "no-store",
		});

		if (!response.ok) {
			throw new Error(`Erro: ${response.statusText}`);
		}

		return response.data as NewsletterResponse;
	} catch (error) {
		console.error("Erro ao enviar inscrição para newsletter:", error);
		return null;
	}
}

// LatestArticles
// LatestArticles
export type LatestArticles = {
	id: number;
	title: string;
	image: string | null;
	slug: string;
	type: string;
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
				Accept: "application/json",
			},
			cache: "no-store",
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
	image: string | null;
	slug: string;
	type: string;
	shortDescription: string;
};

export async function getTrendingArticle() {
	try {
		const response = await fetcher("trendingArticle", {
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

		return response.data as TrendingArticle;
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}

// featuredColumnists
// featuredColumnists
export type FeaturedColumnists = {
	id: number;
	name: string;
	description: string;
	user_id: number;
	active: number;
	created_at: string;
	updated_at: string;
	deleted_at: string | null;
	profile_picture: string | null;
	slug: string;
	posts_count: number;
	articlesPosted: number;
};

export async function getFeaturedColumnists() {
	try {
		const response = await fetcher<{ data: FeaturedColumnists[] }>(
			"featuredColumnists",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				cache: "no-store",
			},
		);

		if (!response.ok || !response.data) {
			throw new Error(`Error: ${response.statusText}`);
		}

		return response.data.data;
	} catch (error) {
		console.error("Error fetching featuredColumnists:", error);
		return null;
	}
}

// AuthorArticles
// AuthorArticles
export type AuthorArticles = {
	id: number;
	title: string;
	image: string | null;
	slug: string;
	type: string;
	author: {
		id: number;
		name: string;
		slug: string;
		profile_picture: string | null;
	};
};

export async function getAuthorArticles() {
	try {
		const response = await fetcher("authorArticles", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			next: { revalidate: 30 },
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

// TrendingArticle
// TrendingArticle
export type TrendingLists = {
	id: number;
	title: string;
	banner: string | null;
	slug: string;
	type: string;
	shortDescription: string;
	author: {
		id: number;
		name: string;
		slug: string;
		profilePicture: string | null;
	};
};

export async function getTrendingLists() {
	try {
		const response = await fetcher("posts/trendingLists?quantity=6", {
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

		return response.data as TrendingLists[];
	} catch (error) {
		console.error("Error fetching main banner:", error);
		return null;
	}
}

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
