import React from "react";

import Image from "next/image";

const featuredArticles = [
	{
		id: 1,
		title: "The Ethics of Aristotle",
		image: "https://picsum.photos/451/173",
		author: {
			id: 101,
			name: "John Doe",
		},
	},
	{
		id: 2,
		title: "Plato's Republic: A Modern Interpretation",
		image: "https://picsum.photos/451/175",
		author: {
			id: 102,
			name: "Jane Smith",
		},
	},
	{
		id: 3,
		title: "Stoicism in Daily Life",
		image: "https://picsum.photos/450/175",
		author: {
			id: 103,
			name: "Marcus Aurelius",
		},
	},
];

const FeaturedArticles = () => {
	const [mainArticle, ...otherArticles] = featuredArticles;
	return (
		<div className="flex justify-between sm_desktop:flex-col">
			<div className="flex h-full flex-row gap-[52px] sm_desktop:justify-evenly sm_desktop:gap-[26px]">
				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image
						src={mainArticle?.image}
						width={451}
						height={469}
						alt="imgFeatured2"
						className="h-full max-h-[469px] rounded-3xl object-cover"
					/>
					<h5 className="font-heading text-h5 font-medium text-limit-2">
						{mainArticle?.title}
					</h5>
					<p className="text-xs">
						Por: <strong>{mainArticle?.author?.name}</strong>
					</p>
				</div>

				<div>
					{otherArticles.map((article) => {
						return (
							<div
								key={article.id}
								className="mb-[26px] flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5"
							>
								<Image
									src={article.image}
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
