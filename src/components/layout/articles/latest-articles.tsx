import React from "react";

import Image from "next/image";
import Link from "next/link";

import { getTrendingArticle, LatestArticles } from "@/app/(home)/actions";
import imgArticle1 from "@/assets/articles/1.png";
import imgArticle7 from "@/assets/articles/7.png";

import ArticlesTrendingPost from "./latest-articles-trending";

const LatestArticlesPost = async ({
	data,
}: {
	data: LatestArticles[] | null;
}) => {
	const trendingArticle = await getTrendingArticle();

	if (!data || data.length < 1) return null;

	const mainArticles = data.slice(0, 6);
	const otherArticles = data.slice(6, 8);

	return (
		<div data-aos="fade-up">
			<div className="flex flex-col gap-[49px] wrapper">
				<div className="flex items-center justify-between">
					<h3 className="mr-[26px] whitespace-nowrap font-heading text-h3 font-bold">
						Artigos
					</h3>
					<div className="flex-1 border-b border-dashed border-primary"></div>
				</div>

				<div className="flex flex-wrap gap-x-[43px] gap-y-[26px] sm_desktop:justify-evenly">
					{mainArticles.map((article: LatestArticles, index) => (
						<Link
							href={`/${article.type}/${article.slug}`}
							key={index}
							className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5"
						>
							<Image
								src={article.image || imgArticle1}
								width={451}
								height={188}
								alt="imgArticle"
								className="h-[188px] rounded-3xl object-cover"
								priority
							/>
							<h5 className="font-heading text-h5 font-medium text-limit-2">
								{article.title}
							</h5>
							<p className="text-xs">
								Por: <strong>{article?.author?.name}</strong>
							</p>
						</Link>
					))}
				</div>
			</div>

			<div className="mt-[26px] flex justify-between wrapper sm_desktop:flex-col">
				<div className="flex flex-col flex-wrap justify-between gap-y-[26px] sm_desktop:mb-[26px] sm_desktop:flex-row sm_desktop:justify-evenly">
					{otherArticles.map(
						(article: LatestArticles, index: number) => (
							<Link
								href={`/${article.type}/${article.slug}`}
								key={index}
								className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5"
							>
								<Image
									src={article.image || imgArticle7}
									width={451}
									height={188}
									alt="imgArticle"
									className="h-[188px] rounded-3xl object-cover"
								/>
								<h5 className="font-heading text-h5 font-medium text-limit-2">
									{article.title}
								</h5>
								<p className="text-xs">
									Por:{" "}
									<strong>{article?.author?.name}</strong>
								</p>
							</Link>
						),
					)}
				</div>

				<ArticlesTrendingPost data={trendingArticle} />
			</div>
		</div>
	);
};

export default LatestArticlesPost;
