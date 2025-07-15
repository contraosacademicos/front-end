"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { AuthorArticles, FeaturedColumnists } from "@/app/(home)/actions";
import {
	Categories,
	MainBanner,
	Newsletter,
	Post,
	PricingTable,
} from "@/app/artigos/types";
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
	pricingTable: PricingTable[] | null;
	featuredColumnists: FeaturedColumnists[] | null;
	newsletter: Newsletter | null;
	authorArticles: AuthorArticles[] | null;
};

const ArticlesContent = ({
	mainBanner,
	categories,
	posts,
	newsletter,
	authorArticles,
}: ArticlesContentProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [filtroPostagens, setFiltroPostagens] = useState("Últimas postagens");
	const [filtroTipo, setFiltroTipo] = useState("Todas");
	const [filtroTipoPost, setFiltroTipoPost] = useState("Todas");

	useEffect(() => {
		setFiltroPostagens(
			searchParams.get("filtroPostagens") || "Últimas postagens",
		);
		setFiltroTipo(searchParams.get("filtroTipo") || "Todas");
		setFiltroTipoPost(searchParams.get("filtroTipoPost") || "Todas");
	}, [searchParams]);

	useEffect(() => {
		const query = new URLSearchParams({
			filtroPostagens,
			filtroTipo,
			filtroTipoPost,
		}).toString();

		router.replace(`?${query}`, { scroll: false });
	}, [filtroPostagens, filtroTipo, filtroTipoPost, router]);

	const filteredPosts = useMemo(() => {
		if (!posts) return [];

		let result = [...posts.data];

		if (filtroTipo !== "Todas") {
			result = result.filter(
				(post) => post.category?.nome === filtroTipo,
			);
		}

		if (!["Todas", "Todos", ""].includes(filtroTipoPost)) {
			result = result.filter(
				(post) =>
					post.type.toLowerCase() === filtroTipoPost.toLowerCase(),
			);
		}

		switch (filtroPostagens) {
			case "Mais populares":
				result.sort((a, b) => b.views - a.views);
				break;
			case "Mais antigas":
				result.sort(
					(a, b) =>
						new Date(a.created_at).getTime() -
						new Date(b.created_at).getTime(),
				);
				break;
			default:
				result.sort(
					(a, b) =>
						new Date(b.created_at).getTime() -
						new Date(a.created_at).getTime(),
				);
				break;
		}

		return result;
	}, [posts, filtroTipo, filtroTipoPost, filtroPostagens]);

	return (
		<main>
			<Header data={categories} />
			<div className="mt-40" />
			<HeroSlider data={mainBanner} />
			<div className="mt-20" />

			<div className="wrapper">
				<div className="mb-[31px] flex flex-col gap-5">
					<div className="flex items-center justify-between">
						<h3 className="mr-[26px] font-heading text-h3 font-bold">
							Artigos
						</h3>
						<div className="w-full border-b border-dashed border-primary" />
					</div>

					<Filter
						data={categories}
						filtroPostagens={filtroPostagens}
						setFiltroPostagens={setFiltroPostagens}
						filtroTipo={filtroTipo}
						setFiltroTipo={setFiltroTipo}
						filtroTipoPost={filtroTipoPost}
						setFiltroTipoPost={setFiltroTipoPost}
						hasInteracted={true}
					/>
				</div>

				<div className="flex justify-between gap-5 es_desktop:flex-col es_desktop:items-center">
					<ArticlesList posts={filteredPosts} />

					<div className="flex h-full flex-wrap justify-center gap-10 es_desktop:w-full">
						{/* NOTE <Columnists data={featuredColumnists} /> */}
						<FeaturedOpinion data={authorArticles} />
					</div>
				</div>
			</div>

			<div className="mt-28" />
			<Footer newsletter={newsletter} />
		</main>
	);
};

export default ArticlesContent;
