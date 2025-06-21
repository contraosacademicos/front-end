import React from "react";

import Image from "next/image";
import Link from "next/link";

import { AuthorArticles } from "@/app/(home)/actions";
import logo from "@/assets/logo.svg";
import imgOpinion1 from "@/assets/opinion/1.png";

const FeaturedOpinion = ({ data }: { data: AuthorArticles[] | null }) => {
	return (
		<div className="min-h-[535px] max-w-[445px] rounded-3xl border border-white/40 p-6">
			<div className="flex justify-between">
				<h6 className="font-heading text-h6 font-bold">Colunas</h6>
				<Image
					src={logo}
					alt="Logo"
					width={35}
					height={32}
					className="mr-8 opacity-20"
				/>
			</div>

			{Array.from(data || [])
				.slice(0, 4)
				?.map((post, index) => {
					return (
						<Link
							href={`/${post.type}/${post.slug}`}
							key={index}
							className="flex items-center gap-8 border-b border-dashed border-[#525252] p-6"
						>
							<Image
								width={100}
								height={100}
								src={post.image ?? imgOpinion1}
								alt="imgOpinion1"
								className="size-12 rounded-full object-cover"
							/>
							<div>
								<p className="text-base text-primary">
									{post.title}
								</p>
								<p className="mt-1.5 text-xs">
									{post.author.name}
								</p>
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export default FeaturedOpinion;
