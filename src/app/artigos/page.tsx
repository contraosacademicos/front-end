import { NextPage } from "next";

import Columnists from "@/components/includes/columnists";
import HeroSlider from "@/components/includes/hero-slide";
import Support from "@/components/includes/support";
import ArticlesList from "@/components/layout/articles/articles-list";
import FeaturedOpinion from "@/components/layout/featured/featured-opinion";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const Artigos: NextPage = () => {
	return (
		<main>
			<Header />

			<div className="mt-40"></div>
			<HeroSlider />

			<div className="mt-20"></div>

			<div className="wrapper">
				<div className="mb-[31px] flex flex-col">
					<div className="flex items-center justify-between">
						<h3 className="mr-[26px] font-heading text-h3 font-bold">
							Artigos
						</h3>
						<div className="w-full border-b border-dashed border-primary"></div>
					</div>
				</div>
				<div className="flex justify-between">
					<ArticlesList />
					<div className="flex h-full flex-col gap-10">
						<Columnists />
						<FeaturedOpinion />
					</div>
				</div>
			</div>

			<div className="mt-28"></div>
			<Support />

			<div className="mt-9"></div>
			<Footer />
		</main>
	);
};

export default Artigos;
