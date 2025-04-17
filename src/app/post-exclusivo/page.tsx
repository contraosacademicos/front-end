import { NextPage } from "next";

import SubscriptionModal from "@/components/includes/subscription-modal";
import Support from "@/components/includes/support";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PostDetail from "@/components/layout/post-details";

import { getLatestArticles } from "../(home)/actions";
import LatestArticlesPage from "./components/latest-articles-page";

const Post: NextPage = async () => {
	const latestArticles = await getLatestArticles();
	return (
		<main>
			<Header />
			<SubscriptionModal />

			<div className="mt-40"></div>
			<PostDetail />

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
