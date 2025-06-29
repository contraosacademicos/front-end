import { NextPage } from "next";

import ArticlesContent from "@/components/layout/articles/articles-content";

import { getAuthorArticles, getFeaturedColumnists } from "../(home)/actions";
import {
	getCategories,
	getMainBanner,
	getNewsletter,
	getPost,
	getPricingTable,
} from "./actions";

export const dynamic = "force-dynamic";

const Artigos: NextPage = async () => {
	const mainBanner = await getMainBanner();
	const categories = await getCategories();
	const posts = await getPost();
	const pricingTable = await getPricingTable();
	const featuredColumnists = await getFeaturedColumnists();
	const newsletter = await getNewsletter();
	const authorArticles = await getAuthorArticles();

	return (
		<ArticlesContent
			mainBanner={mainBanner}
			categories={categories}
			posts={posts}
			pricingTable={pricingTable}
			featuredColumnists={featuredColumnists}
			newsletter={newsletter}
			authorArticles={authorArticles}
		/>
	);
};

export default Artigos;
