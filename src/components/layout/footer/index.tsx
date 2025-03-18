import React from "react";

import Image from "next/image";
import Link from "next/link";

import socialIconOne from "@/assets/icons/social-1.svg";
import socialIconTwo from "@/assets/icons/social-2.svg";
import logo from "@/assets/logo.png";

import CopyBar from "./copy-bar";
import Module from "./module";
import Newsletter from "./newsletter";

const Footer: React.FC = () => {
	return (
		<>
			<Module />

			<Newsletter />

			<footer className="mt-[140px] wrapper">
				<div className="mx-auto flex justify-between gap-40 lg_tablet:flex-col">
					<div className="flex justify-between gap-12 sm_tablet:flex-col">
						<div>
							<h4 className="mb-12 font-heading text-h4 font-bold text-white">
								Home
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/sobre"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Sobre
									</Link>
								</li>
								<li>
									<Link
										href="/diretoria"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Diretoria
									</Link>
								</li>
								<li>
									<Link
										href="/conselho"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Conselho
									</Link>
								</li>
								<li>
									<Link
										href="/linha-do-tempo"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Linha do tempo
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="mb-12 font-heading text-h4 font-bold text-white">
								Revistas
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/beneficios"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Benefícios
									</Link>
								</li>
								<li>
									<Link
										href="/inscricao"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Inscrição
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="mb-12 font-heading text-h4 font-bold text-white">
								Planos
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/basico"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Básico
									</Link>
								</li>
								<li>
									<Link
										href="/intermediario"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Intermediário
									</Link>
								</li>
								<li>
									<Link
										href="/premium"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Premium
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="mb-12 font-heading text-h4 font-bold text-white">
								Contato
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/servicos"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Serviços
									</Link>
								</li>
								<li>
									<Link
										href="/formularios"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Formulários
									</Link>
								</li>
								<li>
									<Link
										href="/convenios"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Convênios
									</Link>
								</li>
								<li>
									<Link
										href="/cardeneta-de-obras"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Cardeneta de Obras
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="mb-12 font-heading text-h4 font-bold text-white">
								Listas
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/planejamento"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Planejamento
									</Link>
								</li>
								<li>
									<Link
										href="/gestao"
										className="text-h6 text-graytext transition-colors hover:text-primary"
									>
										Gestão
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="max-h-full border-r border-white lg_tablet:hidden"></div>

					<div className="flex w-[258px] flex-col gap-[22px]">
						<Image
							src={logo}
							alt="Logo"
							width={58}
							height={54}
							className="opacity-20"
						/>
						<h4 className="lg:text-left mb-4 font-heading text-h4 font-bold text-primary">
							Acompanhe nossas redes sociais
						</h4>
						<div className="lg:justify-start mb-10 flex gap-2">
							<a
								href="#"
								className="rounded-full bg-[#1A1A1A] transition-colors hover:bg-primary"
							>
								<Image
									src={socialIconOne}
									alt="socialIconOne"
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
									src={socialIconTwo}
									alt="socialIconTwo"
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
									src={socialIconOne}
									alt="socialIconOne"
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
									src={socialIconTwo}
									alt="socialIconTwo"
									width={32}
									height={32}
									className="size-auto"
								/>
							</a>
						</div>
					</div>
				</div>
			</footer>

			<CopyBar />
		</>
	);
};

export default Footer;
