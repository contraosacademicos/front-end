import { NextPage } from "next";
import Image from "next/image";

import ellipse1 from "@/assets/shapes/ellipse1.svg";
import Columnists from "@/components/includes/columnists";
import Columns from "@/components/includes/columns";
import CtaCourses from "@/components/includes/cta-courses";
import HeroSlider from "@/components/includes/hero-slide";
import MostRead from "@/components/includes/most-read";
import Subscription from "@/components/includes/subscription";
import Support from "@/components/includes/support";
import LatestArticlesPost from "@/components/layout/articles/latest-articles";
import FeaturedSection from "@/components/layout/featured";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import {
	getAuthorArticles,
	getBannerCreateAcc,
	getFeaturedArticles,
	getLatestArticles,
	getTopAuthors,
} from "./actions";

const Home: NextPage = async () => {
	const bannerCreateAcc = await getBannerCreateAcc();
	const topAuthors = await getTopAuthors();
	const authorArticles = await getAuthorArticles();
	const featuredArticles = await getFeaturedArticles();
	const latestArticles = await getLatestArticles();

	return (
		<main>
			<Header />

			<div className="mt-40"></div>
			<HeroSlider />

			<div className="mt-20"></div>
			<FeaturedSection data={featuredArticles} />

			<div className="mt-20"></div>
			<CtaCourses data={bannerCreateAcc} />

			<div className="mt-20"></div>
			<LatestArticlesPost data={latestArticles} />

			<div className="mt-20"></div>
			<div className="relative" data-aos="fade-up">
				<Image
					src={ellipse1}
					alt="ellipse1"
					className="absolute bottom-0 right-0 z-elements overflow-x-hidden sm_tablet:w-96"
				/>
				<Subscription />
			</div>

			<div className="mt-20"></div>
			<div
				className="flex justify-between wrapper lg_tablet:hidden"
				data-aos="fade-up"
			>
				<Columnists data={topAuthors} />
				<Columns data={authorArticles} />
			</div>

			<div className="mt-20"></div>
			<MostRead />

			<div className="mt-28"></div>
			<Support />

			<div className="mt-12"></div>
			<Footer />
		</main>
	);
};

export default Home;
