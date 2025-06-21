"use client";

import { useMemo, useState } from "react";

import { AuthorArticles, FeaturedColumnists } from "@/app/(home)/actions";
import {
	Categories,
	FooterLinks,
	MainBanner,
	Newsletter,
	Post,
	PricingTable,
} from "@/app/artigos/types";
import Columnists from "@/components/includes/columnists";
import Filter from "@/components/includes/filters";
import HeroSlider from "@/components/includes/hero-slide";
import ArticlesList from "@/components/layout/articles/articles-list";
import FeaturedOpinion from "@/components/layout/featured/featured-opinion";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

type ArticlesContentProps = {
	mainBanner: MainBanner[] | null;
	categories: Categories | null;
	posts: Post | null;
	footerLinks: FooterLinks[] | null;
	pricingTable: PricingTable[] | null;
	featuredColumnists: FeaturedColumnists[] | null;
	newsletter: Newsletter | null;
	authorArticles: AuthorArticles[] | null;
};

const ArticlesContent = ({
	mainBanner,
	categories,
	posts,
	footerLinks,
	featuredColumnists,
	newsletter,
	authorArticles,
}: ArticlesContentProps) => {
	const [filtroPostagens, setFiltroPostagens] = useState("Últimas postagens");
	const [filtroTipo, setFiltroTipo] = useState("Todas");
	const [filtroTipoPost, setFiltroTipoPost] = useState("");
	const [hasInteracted] = useState(false);

	const filteredPosts = useMemo(() => {
		let filtered = posts?.data || [];

		if (filtroTipo !== "Todas") {
			filtered = filtered.filter(
				(post) => post.category?.nome === filtroTipo,
			);
		}

		if (filtroTipoPost !== "" && filtroTipoPost !== "Todos") {
			filtered = filtered.filter(
				(post) =>
					post.type.toLowerCase() === filtroTipoPost.toLowerCase(),
			);
		}

		if (filtroPostagens === "Mais populares") {
			filtered = filtered.sort((a, b) => b.views - a.views);
		} else if (filtroPostagens === "Mais antigas") {
			filtered = filtered.sort(
				(a, b) =>
					new Date(a.created_at).getTime() -
					new Date(b.created_at).getTime(),
			);
		} else if (filtroPostagens === "Últimas postagens") {
			filtered = filtered.sort(
				(a, b) =>
					new Date(b.created_at).getTime() -
					new Date(a.created_at).getTime(),
			);
		}

		return filtered;
	}, [posts, filtroTipo, filtroPostagens, filtroTipoPost]);

	return (
		<main>
			<Header data={categories} />
			<div className="mt-40"></div>
			<HeroSlider data={mainBanner} />
			<div className="mt-20"></div>
			<div className="wrapper">
				<div className="mb-[31px] flex flex-col gap-5">
					<div className="flex items-center justify-between">
						<h3 className="mr-[26px] font-heading text-h3 font-bold">
							Artigos
						</h3>
						<div className="w-full border-b border-dashed border-primary"></div>
					</div>
					<Filter
						data={categories}
						filtroPostagens={filtroPostagens}
						setFiltroPostagens={setFiltroPostagens}
						filtroTipo={filtroTipo}
						setFiltroTipo={setFiltroTipo}
						filtroTipoPost={filtroTipoPost}
						setFiltroTipoPost={setFiltroTipoPost}
						hasInteracted={hasInteracted}
					/>
				</div>
				<div className="flex justify-between gap-5 es_desktop:flex-col es_desktop:items-center">
					<ArticlesList posts={filteredPosts} />

					<div className="flex h-full flex-wrap justify-center gap-10 es_desktop:w-full">
						<Columnists data={featuredColumnists} />
						<FeaturedOpinion data={authorArticles} />
					</div>
				</div>
			</div>
			<div className="mt-28"></div>
			{/* NOTE <Support data={pricingTable} /> */}
			<div className="mt-9"></div>
			<Footer data={footerLinks} newsletter={newsletter} />
		</main>
	);
};

export default ArticlesContent;
