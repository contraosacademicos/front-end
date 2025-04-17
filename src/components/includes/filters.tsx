"use client";

import { useState } from "react";

const Filter = () => {
	const [filtroPostagens, setFiltroPostagens] = useState("Últimas postagens");
	const [filtroTipo, setFiltroTipo] = useState("Todas");
	const [dropdownPostagensFechado, setDropdownPostagensFechado] =
		useState(true);
	const [dropdownTipoFechado, setDropdownTipoFechado] = useState(true);

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

	return (
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
								onClick={() => selecionarPostagem(opcao)}
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
								onClick={() => selecionarTipo(opcao)}
								className="hover:bg-zinc-700 block w-full px-4 py-2.5 text-left text-coagray"
							>
								{opcao}
							</button>
						))}
					</div>
				)}
			</div>

			<div className="flex flex-wrap gap-2">
				{["Listas", "Blog", "Colunas", "Novidades"].map((categoria) => (
					<button
						key={categoria}
						className="bg-transparent rounded-md border border-coagray px-3 py-2.5 text-coagray duration-300 hover:bg-coagray hover:text-white"
					>
						{categoria}
					</button>
				))}
			</div>
		</div>
	);
};

export default Filter;
