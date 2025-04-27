import "react";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import imgColumnist1 from "@/assets/columnist/1.png";
import imgColumn7 from "@/assets/columns/7.png";
import messagesIcon from "@/assets/icons/messages-icon.svg";
import Filter from "@/components/includes/filters";
import Support from "@/components/includes/support";
import ArticlesList from "@/components/layout/articles/articles-list";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import { getCategories, getFooterLinks, getPost } from "./actions";

const Autor: NextPage = async () => {
	const posts = await getPost();
	const categories = await getCategories();
	const footerLinks = await getFooterLinks();

	return (
		<main>
			<Header data={categories} />

			<div className="mt-40"></div>

			<section className="wrapper">
				<div className="mb-12 flex items-center text-p">
					<Link href="/artigos">Artigos</Link>
					<span className="mx-2">{">"}</span>
					<Link href="#">$post_name</Link>
					<span className="mx-2">{">"}</span>
					<span className="font-bold">$name_writer</span>
				</div>

				<div className="flex justify-between gap-12 md_tablet:flex-col md_tablet:items-center md_tablet:gap-12">
					<div className="flex size-full max-w-[451px] flex-col gap-4 rounded-lg bg-[#232323] p-6 md_tablet:max-w-full md_tablet:gap-6">
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
										src={imgColumnist1}
										alt="imgColumnist1"
										className="rounded-3xl object-cover"
									/>
									<div>
										<p className="text-base text-primary">
											$name_writer
										</p>
										<p className="mt-2 text-xs">
											42 postagens
										</p>
									</div>
								</div>
							</div>
						</div>

						<p className="text-base text-coagray">
							Pouco se sabe sobre a vida de Augusto de Lyra, um
							enigmático filósofo que dedicou sua existência às
							profundezas da floresta amazônica. Nascido em uma
							pequena aldeia indígena no coração da selva, Lyra
							cresceu imerso nos mistérios da natureza e nas
							tradições ancestrais de seu povo.
						</p>

						<div className="border-b border-dashed border-[#9A9A9A]"></div>

						<h6 className="font-heading text-h6 font-bold">
							Atividades
						</h6>

						<div className="flex flex-col gap-1 text-base text-coagray">
							<p>
								Total de{" "}
								<span className="text-primary">
									{" "}
									209 postagens{" "}
								</span>{" "}
								realizadas desde 2019
							</p>

							<p>
								{" "}
								Com{" "}
								<span className="text-primary">
									{" "}
									13 participações{" "}
								</span>{" "}
								no ContraCast
							</p>
						</div>

						<div className="border-b border-dashed border-[#9A9A9A]"></div>

						<h6 className="font-heading text-h6 font-bold">
							Principais artigos do autor
						</h6>

						<div className="flex flex-col gap-2">
							<Image
								src={imgColumn7}
								alt="imgColumn7"
								className="max-h-[188px] rounded-3xl frame"
							/>

							<h5 className="font-heading text-h5">
								Distúrbios emocionais na infância e alienação
								parental
							</h5>

							<p className="text-xs">
								Por:{" "}
								<strong>Frederico Mendonça de Oliveira</strong>
							</p>

							<div className="flex w-fit items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
								<Image
									src={messagesIcon}
									width={18}
									height={14.5}
									alt="messagesIcon"
								/>
								12
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<Image
								src={imgColumn7}
								alt="imgColumn7"
								className="max-h-[188px] rounded-3xl frame"
							/>

							<h5 className="font-heading text-h5">
								Distúrbios emocionais na infância e alienação
								parental
							</h5>

							<p className="text-xs">
								Por:{" "}
								<strong>Frederico Mendonça de Oliveira</strong>
							</p>

							<div className="flex w-fit items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
								<Image
									src={messagesIcon}
									width={18}
									height={14.5}
									alt="messagesIcon"
								/>
								12
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<Image
								src={imgColumn7}
								alt="imgColumn7"
								className="max-h-[188px] rounded-3xl frame"
							/>

							<h5 className="font-heading text-h5">
								Distúrbios emocionais na infância e alienação
								parental
							</h5>

							<p className="text-xs">
								Por:{" "}
								<strong>Frederico Mendonça de Oliveira</strong>
							</p>

							<div className="flex w-fit items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
								<Image
									src={messagesIcon}
									width={18}
									height={14.5}
									alt="messagesIcon"
								/>
								12
							</div>
						</div>
					</div>

					<div className="w-full">
						<div className="mb-[31px] flex flex-col gap-5">
							<div className="flex items-center justify-between">
								<h3 className="mr-[26px] w-2/5 font-heading text-h3 font-bold">
									Artigos do autor
								</h3>
								<div className="w-full border-b border-dashed border-primary"></div>
							</div>
							<Filter data={categories} />
						</div>

						<div className="flex justify-between gap-5 es_desktop:flex-col es_desktop:items-center">
							<ArticlesList data={posts} />
						</div>
					</div>
				</div>
			</section>

			<div className="mt-28"></div>
			<Support />

			<div className="mt-9"></div>
			<Footer data={footerLinks} />
		</main>
	);
};

export default Autor;
