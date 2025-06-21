import { NextPage } from "next";

import ArticlesContent from "@/components/layout/articles/articles-content";

import { getAuthorArticles, getFeaturedColumnists } from "../(home)/actions";
import {
	getCategories,
	getFooterLinks,
	getMainBanner,
	getNewsletter,
	getPost,
	getPricingTable,
} from "./actions";

const Artigos: NextPage = async () => {
	const mainBanner = await getMainBanner();
	const categories = await getCategories();
	const posts = await getPost();
	const footerLinks = await getFooterLinks();
	const pricingTable = await getPricingTable();
	const featuredColumnists = await getFeaturedColumnists();
	const newsletter = await getNewsletter();
	const authorArticles = await getAuthorArticles();

	return (
		<ArticlesContent
			mainBanner={mainBanner}
			categories={categories}
			posts={posts}
			footerLinks={footerLinks}
			pricingTable={pricingTable}
			featuredColumnists={featuredColumnists}
			newsletter={newsletter}
			authorArticles={authorArticles}
		/>
	);
};

export default Artigos;
