"use client";

import { useState } from "react";

import { NextPage } from "next";

import Columnists from "@/components/includes/columnists";
import HeroSlider from "@/components/includes/hero-slide";
import Support from "@/components/includes/support";
import ArticlesList from "@/components/layout/articles/articles-list";
import FeaturedOpinion from "@/components/layout/featured/featured-opinion";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const Artigos: NextPage = () => {
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
			<HeroSlider />

			<div className="mt-20"></div>

			<div className="wrapper">
				<div className="mb-[31px] flex flex-col gap-5">
					<div className="flex items-center justify-between">
						<h3 className="mr-[26px] font-heading text-h3 font-bold">
							Artigos
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
												selecionarPostagem(opcao)
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
								onClick={() => alterarVisualizacao("lista")}
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
								onClick={() => alterarVisualizacao("grade")}
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
							{["Listas", "Blog", "Colunas", "Novidades"].map(
								(categoria) => (
									<button
										key={categoria}
										className="bg-transparent rounded-md border border-coagray px-3 py-2.5 text-coagray duration-300 hover:bg-coagray hover:text-white"
									>
										{categoria}
									</button>
								),
							)}
						</div>
					</div>
				</div>

				<div className="flex justify-between gap-5 es_desktop:flex-col es_desktop:items-center">
					<ArticlesList />
					<div className="flex h-full flex-wrap justify-center gap-10 es_desktop:w-full">
						<Columnists />
						<FeaturedOpinion />
					</div>
				</div>
			</div>

			<div className="mt-28"></div>
			<Support />

			<div className="mt-9"></div>
			<Footer />
		</main>
	);
};

export default Artigos;
