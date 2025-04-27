import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Post } from "@/app/artigos/actions";
import imgArticleList1 from "@/assets/articles/list-1.jpg";
import eyeIcon from "@/assets/icons/eye-icon.svg";
import favoriteIcon from "@/assets/icons/favorite-icon.svg";
import messagesIcon from "@/assets/icons/messages-icon.svg";

const ArticlesList = ({ data }: { data: Post | null }) => {
	return (
		<div className="flex w-full max-w-[948px] flex-col gap-y-[26px] md_desktop:max-w-[840px] sm_desktop:justify-evenly">
			{Array.from(data?.data || []).map((post, index) => {
				return (
					<Link
						className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-[#232323] p-6"
						key={index}
						href={`/post/${post?.slug}`}
					>
						<div className="flex flex-col gap-2 text-base text-coagray">
							<p className="font-bold">{post.author_id}</p>
							<p className="font-medium">{post.created_at}</p>
						</div>

						<div className="border-b border-dashed border-[#9A9A9A]"></div>

						<div className="flex items-center gap-4">
							<Image
								src={post.banner || imgArticleList1}
								width={48}
								height={43}
								alt="imgArticleList1"
								className="rounded-[4px] object-cover"
							/>
							<h5 className="font-heading text-h5 font-medium">
								{post.title}
							</h5>
						</div>

						<p className="text-base font-medium text-coagray">
							{post.short_description}
						</p>

						<div className="flex flex-wrap items-center justify-between gap-4">
							<div className="flex flex-wrap gap-2">
								<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
									{post.type}
								</p>
							</div>

							<div className="flex items-center gap-2">
								<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
									<Image
										src={eyeIcon}
										width={18}
										height={14.5}
										alt="messagesIcon"
									/>
									12345
								</div>
								<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
									<Image
										src={messagesIcon}
										width={18}
										height={14.5}
										alt="messagesIcon"
									/>
									12
								</div>
								<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
									12
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
