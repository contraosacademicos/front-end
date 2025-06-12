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

export type FeaturedColumnists = {
	id: number;
	name: string;
	slug: string;
	profilePicture: string | null;
	articlesPosted: number;
};

export type FooterLinks = {
	title: string;
	links: {
		name: string;
		url: string;
	}[];
};

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
	}[];
};

export type Categories = {
	id: number;
	data: {
		id: number;
		nome: string;
		ativo: boolean;
	}[];
};

export type Newsletter = {
	message: string;
	callToAction: string;
};
