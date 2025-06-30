"use client";

import { useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import imgArticleList1 from "@/assets/articles/list-1.jpg";
import eyeIcon from "@/assets/icons/eye-icon.svg";
import favoriteIcon from "@/assets/icons/favorite-icon.svg";
import messagesIcon from "@/assets/icons/messages-icon.svg";

type AuthorPost = {
	id: number;
	title: string;
	content: string;
	user_id: number;
	banner: string;
	category_id: number;
	short_description: string;
	status: number;
	banner_highlight: string | null;
	slug: string;
	coming_soon: number;
	type: string;
	created_at: string;
	updated_at: string;
	deleted_at: string | null;
	translator_id: number | null;
	exclusive_content: number;
	author_id: number;
	columnist_id: number | null;
	draft: number;
	published_at: string;
	likes: number;
	views: number;
	highlight: string | null;
	image: string;
	category: {
		id: number;
		nome: string;
	};
};

type Props = {
	posts: AuthorPost[];
};

const AuthorArticlesList = ({ posts }: Props) => {
	const postsPerPage = 6;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(posts.length / postsPerPage);

	const currentPosts = useMemo(() => {
		const startIndex = (currentPage - 1) * postsPerPage;
		return posts.slice(startIndex, startIndex + postsPerPage);
	}, [posts, currentPage]);

	if (!posts || posts.length === 0) {
		return (
			<p className="mt-4 w-full text-center text-coagray">
				Esse autor ainda não possui artigos publicados.
			</p>
		);
	}

	return (
		<div className="flex w-full flex-col gap-5">
			{currentPosts.map((post) => (
				<div
					key={post.id}
					className="flex w-full flex-col gap-4 rounded-lg bg-[#232323] p-6"
				>
					<div className="flex flex-col gap-2 text-base text-coagray">
						<p className="font-bold">
							{new Date(post.created_at).toLocaleDateString(
								"pt-BR",
							)}
						</p>
					</div>

					<Link
						href={`/${post.type}/${post.slug}`}
						className="flex flex-col gap-4 text-coagray hover:text-coagray"
					>
						<div className="border-b border-dashed border-[#9A9A9A]"></div>

						<div className="flex items-center gap-4">
							<div
								className="relative"
								style={{ width: 48, height: 43 }}
							>
								<Image
									src={
										post.banner &&
										post.banner !== "/" &&
										post.banner !== ""
											? post.banner
											: imgArticleList1
									}
									fill
									alt="Imagem do artigo"
									className="rounded-[4px] object-cover"
								/>
							</div>

							<h5 className="font-heading text-h5 font-medium text-white">
								{post.title}
							</h5>
						</div>

						<p className="text-base font-medium text-limit-2">
							{post.short_description}
						</p>

						<div className="flex flex-wrap items-center justify-between gap-4">
							<div className="flex flex-wrap gap-2">
								<p className="block rounded-full border px-6 py-1 text-xs text-white duration-300 hover:bg-white hover:text-black">
									{post.type}
								</p>
								<p className="block rounded-full border border-primary px-6 py-1 text-xs text-white duration-300 hover:bg-primary hover:text-black">
									{post.category.nome}
								</p>
							</div>

							<div className="flex items-center gap-2 text-white">
								<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
									<Image
										src={eyeIcon}
										width={18}
										height={14.5}
										alt="Views"
									/>
									{post.views}
								</div>
								<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
									<Image
										src={messagesIcon}
										width={18}
										height={14.5}
										alt="Comentários"
									/>
									12
								</div>
								<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
									{post.likes}
									<Image
										src={favoriteIcon}
										width={15}
										height={15}
										alt="Curtidas"
									/>
								</div>
							</div>
						</div>
					</Link>
				</div>
			))}

			{totalPages > 1 && (
				<div className="mt-4 flex flex-wrap justify-center gap-2">
					{Array.from({ length: totalPages }, (_, index) => {
						const page = index + 1;
						const isEdgePage = page === 1 || page === totalPages;
						const isNearCurrent = Math.abs(currentPage - page) <= 1;

						if (isEdgePage || isNearCurrent) {
							return (
								<button
									key={page}
									onClick={() => setCurrentPage(page)}
									className={`text-sm rounded-md px-3 py-1 ${
										page === currentPage
											? "bg-white font-semibold text-black"
											: "bg-[#343434] text-white"
									}`}
								>
									{page}
								</button>
							);
						}

						if (
							(page === 2 && currentPage > 4) ||
							(page === totalPages - 1 &&
								currentPage < totalPages - 3)
						) {
							return (
								<span
									key={page}
									className="text-sm px-2 py-1 text-coagray"
								>
									...
								</span>
							);
						}

						return null;
					})}
				</div>
			)}
		</div>
	);
};

export default AuthorArticlesList;
