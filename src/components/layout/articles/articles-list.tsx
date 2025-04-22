import React from "react";

import Image from "next/image";

import { Articles } from "@/app/artigos/actions";
import imgArticleList1 from "@/assets/articles/list-1.jpg";
import favoriteIcon from "@/assets/icons/favorite-icon.svg";
import messagesIcon from "@/assets/icons/messages-icon.svg";
import Link from "next/link";

const ArticlesList = ({ data }: { data: Articles | null }) => {
	return (
		<div className="flex w-full max-w-[948px] flex-col gap-y-[26px] md_desktop:max-w-[840px] sm_desktop:justify-evenly">
			{Array.from(data?.articles || []).map((data, index) => {
				return (
					<Link
						className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-[#232323] p-6"
						key={index}
						href={data?.slug}
					>
						<div className="flex flex-col gap-2 text-base text-coagray">
							<p className="font-bold">{data.author}</p>
							<p className="font-medium">{data.date}</p>
						</div>

						<div className="border-b border-dashed border-[#9A9A9A]"></div>

						<div className="flex items-center gap-4">
							<Image
								src={data.image || imgArticleList1}
								width={48}
								height={43}
								alt="imgArticleList1"
								className="rounded-[4px] object-cover"
							/>
							<h5 className="font-heading text-h5 font-medium">
								{data.title}
							</h5>
						</div>

						<p className="text-base font-medium text-coagray">
							{data.excerpt}
						</p>

						<div className="flex flex-wrap items-center justify-between gap-4">
							<div className="flex flex-wrap gap-2">
								{Array.from(data.tags || []).map(
									(tag, index) => (
										<p
											key={index}
											className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black"
										>
											{tag}
										</p>
									),
								)}
							</div>

							<div className="flex items-center gap-2">
								<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
									<Image
										src={messagesIcon}
										width={18}
										height={14.5}
										alt="messagesIcon"
									/>
									{data.comments}
								</div>
								<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
									{data.likes}
									<Image
										src={favoriteIcon}
										width={15}
										height={15}
										alt="favoriteIcon"
									/>
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default ArticlesList;
