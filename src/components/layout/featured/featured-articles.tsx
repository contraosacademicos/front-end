import React from "react";

import Image from "next/image";

import { FeaturedArticles as FeaturedArticlesType } from "@/app/(home)/actions";

const FeaturedArticles = ({ data }: { data: FeaturedArticlesType[] }) => {
	if (data.length <= 1) return null;

	const [mainArticle, ...otherArticles] = data;
	return (
		<div className="flex justify-between sm_desktop:flex-col">
			<div className="flex h-full flex-row gap-[52px] sm_desktop:justify-evenly sm_desktop:gap-[26px] sm_tablet:flex-col">
				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image
						src={mainArticle?.image || ""}
						width={451}
						height={469}
						alt="imgFeatured2"
						className="h-full max-h-[469px] rounded-3xl object-cover"
					/>
					<h5 className="font-heading text-h5 font-medium text-limit-2 sm_tablet:h-full">
						{mainArticle?.title}
					</h5>
					<p className="text-xs">
						Por: <strong>{mainArticle?.author?.name}</strong>
					</p>
				</div>

				<div>
					{Array.from(otherArticles)
						.slice(0, 2)
						.map((article) => {
							return (
								<div
									key={article.id}
									className="mb-[26px] flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5"
								>
									<Image
										src={article.image || ""}
										width={451}
										height={175}
										alt="imgFeatured2"
										className="h-full max-h-[175px] rounded-3xl object-cover"
									/>
									<h5 className="font-heading text-h5 font-medium text-limit-2">
										{article?.title}
									</h5>
									<p className="text-xs">
										Por:{" "}
										<strong>{article?.author?.name}</strong>
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default FeaturedArticles;
