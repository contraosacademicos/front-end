import React from "react";

import Image from "next/image";
import Link from "next/link";

import { AuthorArticles } from "@/app/(home)/actions";
import imgColumn1 from "@/assets/columns/1.png";

const Columns = ({ data }: { data: AuthorArticles[] | null }) => {
	return (
		<section className="flex w-full max-w-[969px] flex-col gap-8">
			<div className="flex items-center justify-between">
				<h6 className="whitespace-nowrap pr-5 font-heading text-h6">
					<strong>Principais colunas </strong>
				</h6>
				<div className="w-full flex-1 border-b border-dashed border-primary"></div>
			</div>

			<div className="flex flex-wrap justify-between gap-y-[26px] es_desktop:justify-center">
				{Array.from(data || [])
					.slice(0, 6)
					?.map((post, index) => {
						return (
							<Link
								href={`/${post.type}/${post.slug}`}
								key={index}
								className="flex w-full max-w-[467px] cursor-pointer flex-col gap-2"
							>
								<Image
									src={post.image || imgColumn1}
									width={451}
									height={188}
									alt="Cover Coluna"
									className="!h-[188px] rounded-3xl frame"
								/>
								<h5 className="font-heading text-h5 text-limit-2">
									{post.title}
								</h5>
								<p className="text-xs">
									Por: <strong>{post.author.name}</strong>
								</p>
							</Link>
						);
					})}
			</div>
		</section>
	);
};

export default Columns;
