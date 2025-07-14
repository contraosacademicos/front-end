import React from "react";

import Image from "next/image";
import Link from "next/link";

import { LatestArticles } from "@/app/(home)/actions";
import imgArticle1 from "@/assets/articles/1.png";

const LatestArticlesPage = ({ data }: { data: LatestArticles[] | null }) => {
	return (
		<div className="flex flex-col gap-[49px] wrapper">
			<div className="flex items-center justify-between">
				<h3 className="mr-[26px] whitespace-nowrap font-heading text-h3 font-bold">
					Artigos
				</h3>
				<div className="flex-1 border-b border-dashed border-primary"></div>
			</div>

			<div className="flex flex-wrap gap-x-[43px] gap-y-[26px] sm_desktop:justify-evenly">
				{Array.from(data || [])
					.slice(0, 6)
					?.map((article, index) => {
						return (
							<Link href={"/post"} key={index}>
								<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
									<Image
										src={article.image || imgArticle1}
										width={451}
										height={188}
										alt="imgArticle1"
										className="max-h-[188px] rounded-3xl object-cover"
									/>
									<h5 className="font-heading text-h5 font-medium text-limit-2">
										{article.title}
									</h5>
									<p className="text-xs">
										Por:{" "}
										<strong>{article?.author?.name}</strong>
									</p>
								</div>
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default LatestArticlesPage;
