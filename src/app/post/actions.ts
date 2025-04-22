/* eslint-disable no-comments/disallowComments */
"use server";

import { fetcher } from "@/lib/fetcher";

// Post
// Post
export type Post = {
	original: {
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
	};
};

export async function getPost(slug: string) {
	try {
		const response = await fetcher(`posts/${slug}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
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
