import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FeaturedArticles as FeaturedArticlesType } from "@/app/(home)/actions";
import imgFeatured from "@/assets/featured/1.png";

const FeaturedArticles = ({ data }: { data: FeaturedArticlesType[] }) => {
	if (data.length <= 1) return null;

	const [mainArticle, ...otherArticles] = data;
	return (
		<div className="flex justify-between sm_desktop:flex-col">
			<div className="flex h-full flex-row gap-[52px] sm_desktop:justify-evenly sm_desktop:gap-[26px] sm_tablet:flex-col">
				<Link
					href={`/${mainArticle.type}/${mainArticle.slug}`}
					className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5"
				>
					<Image
						src={mainArticle?.image || imgFeatured}
						width={451}
						height={469}
						alt="imgFeatured2"
						className="h-[469px] rounded-3xl object-cover"
					/>
					<h5 className="font-heading text-h5 font-medium text-limit-2 sm_tablet:h-full">
						{mainArticle?.title}
					</h5>
					<p className="text-xs">
						Por: <strong>{mainArticle?.author?.name}</strong>
					</p>
				</Link>

				<div className="flex flex-col gap-[26px]">
					{Array.from(otherArticles)
						.slice(0, 2)
						.map((article) => {
							return (
								<Link
									href={`/${article.type}/${article.slug}`}
									key={article.id}
									className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5"
								>
									<Image
										src={article.image || imgFeatured}
										width={451}
										height={175}
										alt="imgFeatured2"
										className="h-[175px] rounded-3xl object-cover"
									/>
									<h5 className="font-heading text-h5 font-medium text-limit-2">
										{article?.title}
									</h5>
									<p className="text-xs">
										Por:{" "}
										<strong>{article?.author?.name}</strong>
									</p>
								</Link>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default FeaturedArticles;
