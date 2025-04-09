import { NextPage } from "next";

import SubscriptionModal from "@/components/includes/subscription-modal";
import Support from "@/components/includes/support";
import ArticlesPost from "@/components/layout/articles/articles-post";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PostDetail from "@/components/layout/post-details";

const Post: NextPage = () => {
	return (
		<main>
			<Header />
			<SubscriptionModal />

			<div className="mt-40"></div>
			<PostDetail />

			<div className="mt-20"></div>
			<ArticlesPost />

			<div className="mt-20"></div>
			<Support />

			<div className="mt-9"></div>
			<Footer />
		</main>
	);
};

export default Post;
