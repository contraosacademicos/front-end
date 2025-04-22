import { notFound } from "next/navigation";

import Support from "@/components/includes/support";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PostDetail from "@/components/layout/post-details";

import { getLatestArticles } from "../../(home)/actions";
import { getPost } from "../actions";
import LatestArticlesPage from "../components/latest-articles-page";

const Post = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const latestArticles = await getLatestArticles();

	const post = await getPost((await params).slug);

	if (!post || !post.original.slug) {
		return notFound();
	}

	return (
		<main>
			<Header />

			<div className="mt-40"></div>
			<PostDetail data={post} />

			<div className="mt-20"></div>
			<LatestArticlesPage data={latestArticles} />

			<div className="mt-20"></div>
			<Support />

			<div className="mt-9"></div>
			<Footer />
		</main>
	);
};

export default Post;
