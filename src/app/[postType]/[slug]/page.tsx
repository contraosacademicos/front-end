import { notFound } from "next/navigation";

import { getNewsletter } from "@/app/artigos/actions";
import SubscriptionModal from "@/components/includes/subscription-modal";
import Support from "@/components/includes/support";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PostDetail from "@/components/layout/post-details";

import { getLatestArticles } from "../../(home)/actions";
import {
	getCategories,
	getFooterLinks,
	getPost,
	getPricingTable,
} from "../actions";
import LatestArticlesPage from "../components/latest-articles-page";

const Post = async ({
	params,
}: {
	params: { slug: string; postType: string };
}) => {
	const categories = await getCategories();
	const footerLinks = await getFooterLinks();
	const post = await getPost(params.slug);
	const latestArticles = await getLatestArticles();
	const pricingTable = await getPricingTable();
	const newsletter = await getNewsletter();

	if (!post || !post.data.slug) {
		return notFound();
	}

	if (params.postType !== post.data.type) {
		return notFound();
	}

	return (
		<main>
			<Header data={categories} />
			{post.data.exclusive_content && <SubscriptionModal />}

			<div className="mt-40"></div>
			<PostDetail data={post} />

			<div className="mt-20"></div>
			<LatestArticlesPage data={latestArticles} />

			<div className="mt-20"></div>
			<Support data={pricingTable} />

			<div className="mt-9"></div>
			<Footer data={footerLinks} newsletter={newsletter} />
		</main>
	);
};

export default Post;
