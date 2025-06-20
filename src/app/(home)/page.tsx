import { NextPage } from "next";
import Image from "next/image";

import ellipse1 from "@/assets/shapes/ellipse1.svg";
import Columnists from "@/components/includes/columnists";
import Columns from "@/components/includes/columns";
import CtaCourses from "@/components/includes/cta-courses";
import HeroSlider from "@/components/includes/hero-slide";
import MostRead from "@/components/includes/most-read";
import Subscription from "@/components/includes/subscription";
import LatestArticlesPost from "@/components/layout/articles/latest-articles";
import FeaturedSection from "@/components/layout/featured";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import {
	getAuthorArticles,
	getBannerCreateAcc,
	getCategories,
	getFeaturedArticles,
	getFeaturedColumnists,
	getFooterLinks,
	getLatestArticles,
	getMainBanner,
	getNewsletter,
	getTrendingLists,
} from "./actions";

const Home: NextPage = async () => {
	const mainBanner = await getMainBanner();
	const categories = await getCategories();
	const bannerCreateAcc = await getBannerCreateAcc();
	const featuredColumnists = await getFeaturedColumnists();
	const authorArticles = await getAuthorArticles();
	const featuredArticles = await getFeaturedArticles();
	const latestArticles = await getLatestArticles();
	const trendingLists = await getTrendingLists();
	const footerLinks = await getFooterLinks();
	// NOTE const pricingTable = await getPricingTable();
	const newsletter = await getNewsletter();

	return (
		<main>
			<Header data={categories} />
			<div className="mt-40"></div>
			<HeroSlider data={mainBanner} />
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
				<Columnists data={featuredColumnists} />
				<Columns data={authorArticles} />
			</div>
			<div className="mt-20"></div>
			<MostRead data={trendingLists} />
			<div className="mt-28"></div>
			{/* NOTE <Support data={pricingTable} /> */}

			<div className="mt-12"></div>
			<Footer data={footerLinks} newsletter={newsletter} />
		</main>
	);
};

export default Home;
