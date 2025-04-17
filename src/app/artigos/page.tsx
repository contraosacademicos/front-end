import { NextPage } from "next";

import ColumnistsArticles from "@/components/includes/columnists-articles";
import Filter from "@/components/includes/filters";
import HeroSlider from "@/components/includes/hero-slide";
import Support from "@/components/includes/support";
import ArticlesList from "@/components/layout/articles/articles-list";
import FeaturedOpinion from "@/components/layout/featured/featured-opinion";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import { getArticles } from "./actions";

const Artigos: NextPage = async () => {
	const articles = await getArticles();

	return (
		<main>
			<Header />

			<div className="mt-40"></div>
			<HeroSlider />

			<div className="mt-20"></div>

			<div className="wrapper">
				<div className="mb-[31px] flex flex-col gap-5">
					<div className="flex items-center justify-between">
						<h3 className="mr-[26px] font-heading text-h3 font-bold">
							Artigos
						</h3>
						<div className="w-full border-b border-dashed border-primary"></div>
					</div>
					<Filter />
				</div>

				<div className="flex justify-between gap-5 es_desktop:flex-col es_desktop:items-center">
					<ArticlesList data={articles} />
					<div className="flex h-full flex-wrap justify-center gap-10 es_desktop:w-full">
						<ColumnistsArticles data={articles} />
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
