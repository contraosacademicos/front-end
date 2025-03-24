import { NextPage } from "next";

import Support from "@/components/includes/support";
import ArticlesPost from "@/components/layout/articles/articles-post";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PostDetail from "@/components/layout/post-details";

const Home: NextPage = () => {
	return (
		<main>
			<Header />

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

export default Home;
