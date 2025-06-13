"use client";

import { useState } from "react";

import { Categories } from "@/app/(home)/actions";

const Filter = ({
	data,
	filtroPostagens,
	setFiltroPostagens,
	filtroTipo,
	setFiltroTipo,
	filtroTipoPost,
	setFiltroTipoPost,
	hasInteracted,
}: {
	data: Categories | null;
	filtroPostagens: string;
	setFiltroPostagens: (value: string) => void;
	filtroTipo: string;
	setFiltroTipo: (value: string) => void;
	filtroTipoPost: string;
	setFiltroTipoPost: (value: string) => void;
	hasInteracted: boolean;
}) => {
	const [dropdownPostagensFechado, setDropdownPostagensFechado] =
		useState(true);
	const [dropdownTipoFechado, setDropdownTipoFechado] = useState(true);

	const opcoesPostagens = [
		"Últimas postagens",
		"Mais populares",
		"Mais antigas",
	];
	const opcoesTipo = [
		"Todas",
		...(data?.data.map((categoria: { nome: string }) => categoria.nome) ||
			[]),
	];

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

	const tiposPost = ["Todos", "Lista", "Blog", "Coluna", "Novidade"];

	return (
		<div className="flex flex-wrap items-center gap-2 sm_tablet:gap-4">
			<div className="relative">
				<button
					onClick={toggleDropdownPostagens}
					className="flex items-center gap-6 rounded bg-[#2C2C2D] px-4 py-2.5 text-coagray"
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
					<div className="absolute left-0 top-full mt-1 w-full rounded-md bg-[#2C2C2D] shadow-lg">
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
					className="flex items-center gap-6 rounded bg-[#2C2C2D] px-4 py-2.5 text-coagray"
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
					<div className="absolute left-0 top-full mt-1 max-h-60 w-auto min-w-full overflow-y-auto rounded-md bg-[#2C2C2D] shadow-lg scrollbar-thin scrollbar-track-[#2C2C2D] scrollbar-thumb-black hover:scrollbar-thumb-black">
						{opcoesTipo.map((opcao, index) => (
							<button
								key={index}
								onClick={() => selecionarTipo(opcao)}
								className="block w-full whitespace-nowrap px-4 py-2.5 text-left text-coagray hover:bg-black"
							>
								{opcao}
							</button>
						))}
					</div>
				)}
			</div>

			<div className="flex flex-wrap gap-2">
				{tiposPost.map((tipo) => (
					<button
						key={tipo}
						onClick={() => setFiltroTipoPost(tipo)}
						className={`rounded-md border border-coagray px-3 py-2.5 text-coagray duration-300 ${
							hasInteracted && filtroTipoPost === tipo
								? "bg-coagray text-white"
								: "bg-transparent hover:bg-coagray hover:text-white"
						}`}
					>
						{tipo}
					</button>
				))}
			</div>
		</div>
	);
};

export default Filter;
