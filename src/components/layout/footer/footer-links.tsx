import React from "react";

import Image from "next/image";
import Link from "next/link";

import socialIcon1 from "@/assets/icons/social-1.svg";
import socialIcon2 from "@/assets/icons/social-2.svg";
import socialIcon3 from "@/assets/icons/social-3.svg";
import socialIcon4 from "@/assets/icons/social-4.svg";
import logo from "@/assets/logo.svg";

const FooterNavigation = () => {
	return (
		<footer className="mt-[140px] wrapper">
			<div className="mx-auto flex justify-between gap-40 lg_tablet:flex-col lg_phone:gap-14">
				<div className="flex flex-wrap justify-between gap-12 sm_tablet:justify-start">
					<div className="max-w-[174px]">
						<h4 className="mb-12 font-heading text-h4 font-bold">
							Home
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href={"/"}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Página inicial
								</Link>
							</li>
							<li>
								<Link
									href={"/artigos"}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Artigos
								</Link>
							</li>
							<li>
								<Link
									href={
										"https://livrariacontraosacademicos.com.br"
									}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Livraria
								</Link>
							</li>
							<li>
								<Link
									href={"/sobre"}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Projeto
								</Link>
							</li>
							<li>
								<Link
									href={"/contato"}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Contato
								</Link>
							</li>
						</ul>
					</div>
					<div className="max-w-[174px]">
						<h4 className="mb-12 font-heading text-h4 font-bold">
							Planos
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href={"/"}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mensal
								</Link>
							</li>
							<li>
								<Link
									href={"/"}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Semestral
								</Link>
							</li>
							<li>
								<Link
									href={"/"}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Anual
								</Link>
							</li>
						</ul>
					</div>
					<div className="max-w-[174px]">
						<h4 className="mb-12 font-heading text-h4 font-bold">
							Listas
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href={{
										pathname: "/artigos",
										query: {
											filtroPostagens: "Mais populares",
											filtroTipo: "Todas",
											filtroTipoPost: "Lista",
										},
									}}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais acessados
								</Link>
							</li>
							<li>
								<Link
									href={{
										pathname: "/artigos",
										query: {
											filtroPostagens:
												"Últimas postagens",
											filtroTipo: "Todas",
											filtroTipoPost: "Lista",
										},
									}}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais recentes
								</Link>
							</li>
						</ul>
					</div>
					<div className="max-w-[174px]">
						<h4 className="mb-12 font-heading text-h4 font-bold">
							Artigos
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href={{
										pathname: "/artigos",
										query: {
											filtroPostagens: "Mais populares",
											filtroTipo: "Todas",
											filtroTipoPost: "Todos",
										},
									}}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais acessados
								</Link>
							</li>
							<li>
								<Link
									href={{
										pathname: "/artigos",
										query: {
											filtroPostagens: "Mais populares",
											filtroTipo: "Todas",
											filtroTipoPost: "Todos",
										},
									}}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais acessados do mês
								</Link>
							</li>
						</ul>
					</div>
					<div className="max-w-[174px]">
						<h4 className="mb-12 font-heading text-h4 font-bold">
							Colunas
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href={{
										pathname: "/artigos",
										query: {
											filtroPostagens: "Mais populares",
											filtroTipo: "Todas",
											filtroTipoPost: "Coluna",
										},
									}}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais acessados
								</Link>
							</li>

							<li>
								<Link
									href={{
										pathname: "/artigos",
										query: {
											filtroPostagens:
												"Últimas postagens",
											filtroTipo: "Todas",
											filtroTipoPost: "Coluna",
										},
									}}
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais recentes
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="max-h-full border-r border-white/50 lg_tablet:hidden"></div>

				<div
					className="gradient-bg flex w-[258px] flex-col gap-[22px] rounded-3xl lg_phone:w-full lg_phone:items-center lg_phone:px-14 lg_phone:py-10 lg_phone:text-center"
					data-aos="fade"
				>
					<Image
						src={logo}
						alt="Logo"
						width={58}
						height={54}
						className="opacity-20"
					/>
					<h4 className="lg:text-left lg_phone: mb-4 font-heading text-h4 font-bold text-primary">
						Acompanhe nossas redes sociais
					</h4>
					<div className="lg:justify-start mb-10 flex gap-2 lg_phone:mb-0">
						<a
							href="https://www.facebook.com/contraosacademicos"
							className="rounded-full bg-[#1A1A1A] transition-colors hover:bg-primary"
						>
							<Image
								src={socialIcon1}
								alt="socialIcon1"
								width={32}
								height={32}
								className="size-auto"
							/>
						</a>
						<a
							href="https://www.instagram.com/contraosacademicos/#"
							className="rounded-full bg-[#1A1A1A] transition-colors hover:bg-primary"
						>
							<Image
								src={socialIcon2}
								alt="socialIcon2"
								width={32}
								height={32}
								className="size-auto"
							/>
						</a>
						<a
							href="https://www.youtube.com/@ContraosAcademicos"
							className="rounded-full bg-[#1A1A1A] transition-colors hover:bg-primary"
						>
							<Image
								src={socialIcon3}
								alt="socialIcon3"
								width={32}
								height={32}
								className="size-auto"
							/>
						</a>
						<a
							href="#"
							className="rounded-full bg-[#1A1A1A] transition-colors hover:bg-primary"
						>
							<Image
								src={socialIcon4}
								alt="socialIcon4"
								width={32}
								height={32}
								className="size-auto"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterNavigation;
