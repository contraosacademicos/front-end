"use client";

import { useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Newsletter } from "@/app/artigos/types";
import { Author, Categories } from "@/app/autor/actions";
import imgColumnist1 from "@/assets/columnist/1.png";
import imgColumn7 from "@/assets/columns/7.png";
import messagesIcon from "@/assets/icons/messages-icon.svg";
import Filter from "@/components/includes/filters";
import AuthorArticlesList from "@/components/layout/articles/autor-articles-list";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

type AuthorContentProps = {
	author: Author;
	categories: Categories | null;
	newsletter: Newsletter | null;
};

const AuthorContent = ({
	author,
	categories,
	newsletter,
}: AuthorContentProps) => {
	const [filtroPostagens, setFiltroPostagens] = useState("Últimas postagens");
	const [filtroTipo, setFiltroTipo] = useState("Todas");
	const [filtroTipoPost, setFiltroTipoPost] = useState("Todas");

	const filteredAuthorPosts = useMemo(() => {
		let result = [...(author.posts || [])];

		if (filtroTipo !== "Todas") {
			result = result.filter(
				(post) => post.category?.nome === filtroTipo,
			);
		}

		if (!["Todos", "Todas", ""].includes(filtroTipoPost)) {
			result = result.filter(
				(post) =>
					post.type.toLowerCase() === filtroTipoPost.toLowerCase(),
			);
		}

		switch (filtroPostagens) {
			case "Mais populares":
				result.sort(
					(a, b) => Number(b.views || 0) - Number(a.views || 0),
				);
				break;
			case "Mais antigas":
				result.sort(
					(a, b) =>
						new Date(a.created_at).getTime() -
						new Date(b.created_at).getTime(),
				);
				break;
			default:
				result.sort(
					(a, b) =>
						new Date(b.created_at).getTime() -
						new Date(a.created_at).getTime(),
				);
				break;
		}

		return result;
	}, [author.posts, filtroTipo, filtroTipoPost, filtroPostagens]);

	return (
		<main>
			<Header data={categories} />
			<div className="mt-40" />

			<section className="wrapper">
				<div className="mb-12 flex items-center text-p">
					<Link href="/artigos">Artigos</Link>
					<span className="mx-2">{">"}</span>
					<span className="font-bold">{author.nome}</span>
				</div>

				<div className="flex justify-between gap-12 md_tablet:flex-col md_tablet:items-center">
					<div className="flex h-full max-w-[451px] flex-col gap-4 rounded-lg bg-[#232323] p-6 md_tablet:max-w-full">
						<h6 className="font-heading text-h6 font-bold">
							Sobre o autor
						</h6>
						<div className="mt-4">
							<div
								className="rounded-3xl"
								style={{
									background:
										"conic-gradient(from 240deg at 50% 20.74%, #010101 0deg, #37290F 200deg, #454545 244deg, #202020 360deg)",
								}}
							>
								<div className="flex gap-8 p-6">
									<Image
										src={
											author?.profile_picture?.startsWith(
												"http",
											) ||
											author?.profile_picture?.startsWith(
												"/",
											)
												? author.profile_picture
												: author.profile_picture
													? `https://cmscoa.com.br/${author.profile_picture}`
													: imgColumnist1
										}
										alt={author.nome}
										width={48}
										height={48}
										className="size-12 rounded-3xl object-cover"
									/>
									<div>
										<p className="text-base text-primary">
											{author.nome}
										</p>
										<p className="mt-2 text-xs">
											{author.posts_count} postagens
										</p>
									</div>
								</div>
							</div>
						</div>

						<p className="text-base text-coagray">
							{author.resumo}
						</p>

						<div className="border-b border-dashed border-[#9A9A9A]" />

						<h6 className="font-heading text-h6 font-bold">
							Atividades
						</h6>
						<p className="text-base text-coagray">
							Total de{" "}
							<span className="text-primary">
								{author.posts_count} postagens
							</span>{" "}
							realizadas desde{" "}
							{new Date(author.created_at).toLocaleDateString(
								"pt-BR",
								{ year: "numeric" },
							)}
						</p>

						<div className="border-b border-dashed border-[#9A9A9A]" />

						<h6 className="font-heading text-h6 font-bold">
							Principais artigos do autor
						</h6>
						{(author.posts || [])
							.sort(
								(a, b) =>
									Number(b.views || 0) - Number(a.views || 0),
							)
							.slice(0, 3)
							.map((post) => (
								<Link
									key={post.id}
									href={`/${post.type}/${post.slug}`}
									className="flex flex-col gap-2 transition-opacity hover:opacity-80"
								>
									<Image
										src={post.image || imgColumn7}
										alt={post.title}
										width={400}
										height={200}
										className="h-[188px] rounded-3xl object-cover frame"
									/>
									<h5 className="font-heading text-h5">
										{post.title}
									</h5>
									<p className="text-xs">
										Por: <strong>{author.nome}</strong>
									</p>
									<div className="flex w-fit items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
										<Image
											src={messagesIcon}
											width={18}
											height={14.5}
											alt="Comentários"
										/>
										12
									</div>
								</Link>
							))}
					</div>

					<div className="w-full">
						<div className="mb-[31px] flex flex-col gap-5">
							<div className="flex items-center justify-between">
								<h3 className="mr-[26px] w-2/5 font-heading text-h3 font-bold">
									Artigos do autor
								</h3>
								<div className="w-full border-b border-dashed border-primary"></div>
							</div>

							<Filter
								data={categories}
								filtroPostagens={filtroPostagens}
								setFiltroPostagens={setFiltroPostagens}
								filtroTipo={filtroTipo}
								setFiltroTipo={setFiltroTipo}
								filtroTipoPost={filtroTipoPost}
								setFiltroTipoPost={setFiltroTipoPost}
								hasInteracted={true}
							/>
						</div>

						<div className="flex flex-col justify-between gap-5 es_desktop:flex-col es_desktop:items-center">
							<AuthorArticlesList posts={filteredAuthorPosts} />
						</div>
					</div>
				</div>
			</section>

			<div className="mt-28" />
			<Footer newsletter={newsletter} />
		</main>
	);
};

export default AuthorContent;
