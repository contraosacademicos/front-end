import { notFound } from "next/navigation";

import SubscriptionModal from "@/components/includes/subscription-modal";
import Support from "@/components/includes/support";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PostDetail from "@/components/layout/post-details";

import { getLatestArticles } from "../../(home)/actions";
import { getCategories, getFooterLinks, getPost } from "../actions";
import LatestArticlesPage from "../components/latest-articles-page";

const Post = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const categories = await getCategories();
	const footerLinks = await getFooterLinks();
	const post = await getPost((await params).slug);
	const latestArticles = await getLatestArticles();

	if (!post || !post.data.slug) {
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
			<Support />

			<div className="mt-9"></div>
			<Footer data={footerLinks} />
		</main>
	);
};

export default Post;
