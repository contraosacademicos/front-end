/* eslint-disable no-comments/disallowComments */
/* eslint-disable @typescript-eslint/no-explicit-any */ "use server";

"use server";

export interface FetcherResponse<T = unknown> {
	data: T | null;
	error: string | null;
	ok: boolean;
	status: number;
	statusText: string;
	raw?: Response;
}

export async function fetcher<T = unknown>(
	input: RequestInfo | URL,
	init?: RequestInit,
): Promise<FetcherResponse<T>> {
	try {
		const response = await fetch(
			`${process.env.API_URL}/${input.toString()}`,
			init,
		);

		const contentType = response.headers.get("content-type");
		let data: any = null;

		if (contentType?.includes("application/json")) {
			data = await response.json();
		} else if (contentType?.includes("text/")) {
			data = await response.text();
		} else {
			data = await response.blob();
		}

		return {
			data,
			error: null,
			ok: response.ok,
			status: response.status,
			statusText: response.statusText,
			raw: response,
		};
	} catch (err: any) {
		return {
			data: null,
			error: err?.message || "Erro desconhecido",
			ok: false,
			status: 0,
			statusText: "Fetch failed",
		};
	}
}
