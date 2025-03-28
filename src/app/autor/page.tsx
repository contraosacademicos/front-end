"use client";

import { useState } from "react";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import imgColumnist1 from "@/assets/columnist/1.png";
import imgColumn7 from "@/assets/columns/7.png";
import messagesIcon from "@/assets/icons/messages-icon.svg";
import Support from "@/components/includes/support";
import ArticlesList from "@/components/layout/articles/articles-list";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const Autor: NextPage = () => {
	const [filtroPostagens, setFiltroPostagens] = useState("Últimas postagens");
	const [filtroTipo, setFiltroTipo] = useState("Todas");
	const [dropdownPostagensFechado, setDropdownPostagensFechado] =
		useState(true);
	const [dropdownTipoFechado, setDropdownTipoFechado] = useState(true);
	const [visualizacao, setVisualizacao] = useState("lista");

	const opcoesPostagens = [
		"Últimas postagens",
		"Mais populares",
		"Mais antigas",
	];
	const opcoesTipo = ["Todas", "Artigos", "Notícias", "Entrevistas"];

	const toggleDropdownPostagens = () => {
		setDropdownPostagensFechado(!dropdownPostagensFechado);
		setDropdownTipoFechado(true);
	};

	const toggleDropdownTipo = () => {
		setDropdownTipoFechado(!dropdownTipoFechado);
		setDropdownPostagensFechado(true);
	};

	const selecionarPostagem = (opcao: string) => {
		setFiltroPostagens(opcao);
		setDropdownPostagensFechado(true);
	};

	const selecionarTipo = (opcao: string) => {
		setFiltroTipo(opcao);
		setDropdownTipoFechado(true);
	};

	const alterarVisualizacao = (tipo: string) => {
		setVisualizacao(tipo);
	};

	return (
		<main>
			<Header />

			<div className="mt-40"></div>

			<section className="wrapper">
				<div className="mb-12 flex items-center text-p">
					<Link href="/artigos">Artigos</Link>
					<span className="mx-2">{">"}</span>
					<Link href="#">$post_name</Link>
					<span className="mx-2">{">"}</span>
					<span className="font-bold">$name_writer</span>
				</div>

				<div className="flex justify-between gap-4 md_tablet:flex-col md_tablet:items-center md_tablet:gap-12">
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

					<div>
						<div className="mb-[31px] flex flex-col gap-5">
							<div className="flex items-center justify-between">
								<h3 className="mr-[26px] w-[38%] font-heading text-h3 font-bold">
									Artigos do autor
								</h3>
								<div className="w-full border-b border-dashed border-primary"></div>
							</div>
							<div className="flex flex-wrap items-center gap-2 sm_tablet:gap-4">
								<div className="relative">
									<button
										onClick={toggleDropdownPostagens}
										className="bg-zinc-800 flex items-center gap-6 rounded bg-[#2C2C2D] px-4 py-2.5 text-coagray"
									>
										{filtroPostagens}
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className={`transition-transform ${dropdownPostagensFechado ? "" : "rotate-180"}`}
										>
											<path
												d="M2 4L6 8L10 4"
												stroke="white"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>

									{!dropdownPostagensFechado && (
										<div className="bg-zinc-800 z-10 absolute left-0 top-full mt-1 w-full rounded-md bg-[#2C2C2D] shadow-lg">
											{opcoesPostagens.map((opcao) => (
												<button
													key={opcao}
													onClick={() =>
														selecionarPostagem(
															opcao,
														)
													}
													className="hover:bg-zinc-700 block w-full px-4 py-2.5 text-left text-coagray"
												>
													{opcao}
												</button>
											))}
										</div>
									)}
								</div>

								<div className="relative">
									<button
										onClick={toggleDropdownTipo}
										className="bg-zinc-800 flex items-center gap-6 rounded bg-[#2C2C2D] px-4 py-2.5 text-coagray"
									>
										{filtroTipo}
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className={`transition-transform ${dropdownTipoFechado ? "" : "rotate-180"}`}
										>
											<path
												d="M2 4L6 8L10 4"
												stroke="white"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>

									{!dropdownTipoFechado && (
										<div className="bg-zinc-800 z-10 absolute left-0 top-full mt-1 w-full rounded-md bg-[#2C2C2D] shadow-lg">
											{opcoesTipo.map((opcao) => (
												<button
													key={opcao}
													onClick={() =>
														selecionarTipo(opcao)
													}
													className="hover:bg-zinc-700 block w-full px-4 py-2.5 text-left text-coagray"
												>
													{opcao}
												</button>
											))}
										</div>
									)}
								</div>

								<div className="flex gap-2">
									<button
										onClick={() =>
											alterarVisualizacao("lista")
										}
										className={`p-2 ${visualizacao === "lista" ? "bg-zinc-700" : "bg-zinc-800"} rounded-md bg-[#2C2C2D]`}
									>
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="3"
												y="4"
												width="14"
												height="2"
												rx="1"
												fill="gray"
											/>
											<rect
												x="3"
												y="9"
												width="14"
												height="2"
												rx="1"
												fill="gray"
											/>
											<rect
												x="3"
												y="14"
												width="14"
												height="2"
												rx="1"
												fill="gray"
											/>
										</svg>
									</button>
									<button
										onClick={() =>
											alterarVisualizacao("grade")
										}
										className={`p-2 ${visualizacao === "grade" ? "bg-zinc-700" : "bg-zinc-800"} rounded-md bg-[#2C2C2D]`}
									>
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="3"
												y="3"
												width="6"
												height="6"
												rx="1"
												fill="gray"
											/>
											<rect
												x="11"
												y="3"
												width="6"
												height="6"
												rx="1"
												fill="gray"
											/>
											<rect
												x="3"
												y="11"
												width="6"
												height="6"
												rx="1"
												fill="gray"
											/>
											<rect
												x="11"
												y="11"
												width="6"
												height="6"
												rx="1"
												fill="gray"
											/>
										</svg>
									</button>
								</div>

								<div className="flex flex-wrap gap-2">
									{[
										"Listas",
										"Blog",
										"Colunas",
										"Novidades",
									].map((categoria) => (
										<button
											key={categoria}
											className="bg-transparent rounded-md border border-coagray px-3 py-2.5 text-coagray duration-300 hover:bg-coagray hover:text-white"
										>
											{categoria}
										</button>
									))}
								</div>
							</div>
						</div>

						<div className="flex justify-between gap-5 es_desktop:flex-col es_desktop:items-center">
							<ArticlesList />
						</div>
					</div>
				</div>
			</section>

			<div className="mt-28"></div>
			<Support />

			<div className="mt-9"></div>
			<Footer />
		</main>
	);
};

export default Autor;
