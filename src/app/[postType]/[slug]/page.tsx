import { notFound } from "next/navigation";

import { getNewsletter } from "@/app/artigos/actions";
import SubscriptionModal from "@/components/includes/subscription-modal";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PostDetail from "@/components/layout/post-details";

import {
	getCategories,
	getFooterLinks,
	getPost,
	getRelatedPosts,
} from "../actions";
import RelatedArticles from "../components/related-articles-page";

const Post = async ({
	params,
}: {
	params: { slug: string; postType: string };
}) => {
	const categories = await getCategories();
	const footerLinks = await getFooterLinks();
	const post = await getPost(params.slug);
	const relatedPosts = post?.data?.type
		? await getRelatedPosts(post.data.type)
		: [];
	// NOTE const pricingTable = await getPricingTable();
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
			<RelatedArticles data={relatedPosts} />

			<div className="mt-20"></div>
			{/* NOTE <Support data={pricingTable} /> */}

			<div className="mt-9"></div>
			<Footer data={footerLinks} newsletter={newsletter} />
		</main>
	);
};

export default Post;
