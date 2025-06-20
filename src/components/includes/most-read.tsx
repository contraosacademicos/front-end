import React from "react";

import Image from "next/image";
import Link from "next/link";

import { TrendingLists } from "@/app/(home)/actions";
import imgArticle1 from "@/assets/articles/6.png";

const MostRead = ({ data }: { data: TrendingLists[] | null }) => {
	return (
		<div className="flex flex-col gap-[49px] wrapper">
			<div className="flex items-center justify-between">
				<h3 className="mr-[26px] whitespace-nowrap break-words font-heading text-h3 font-bold lg_phone:whitespace-normal">
					Listas de leituras mais lidas.
				</h3>
				<div className="flex-1 border-b border-dashed border-primary"></div>
			</div>

			<div className="flex flex-wrap justify-between gap-y-[26px] sm_desktop:justify-evenly">
				{Array.from(data || []).map((post, index) => {
					return (
						<Link href={`/${post.type}/${post.slug}`} key={index}>
							<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
								<Image
									src={post.banner || imgArticle1}
									width={451}
									height={188}
									alt="imgArticle1"
									className="h-[188px] rounded-3xl object-cover"
								/>
								<h5 className="font-heading text-h5 font-medium text-limit-2">
									{post.title}
								</h5>
								<p className="text-xs">
									Por: <strong>{post.author.name}</strong>
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default MostRead;
