import React from "react";

import Image from "next/image";
import Link from "next/link";

import socialIconOne from "@/assets/icons/social-1.svg";
import socialIconTwo from "@/assets/icons/social-2.svg";
import logo from "@/assets/logo.svg";

const FooterLinks = () => {
	return (
		<footer className="mt-[140px] wrapper">
			<div className="mx-auto flex justify-between gap-40 lg_tablet:flex-col lg_phone:gap-14">
				<div className="flex flex-wrap justify-between gap-12 sm_tablet:justify-start">
					<div>
						<h4 className="mb-12 font-heading text-h4 font-bold">
							Home
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Página inicial
								</Link>
							</li>
							<li>
								<Link
									href="/artigos"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Artigos
								</Link>
							</li>
							<li>
								<Link
									href="/contato"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Contato
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-12 font-heading text-h4 font-bold">
							Planos
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mensal
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Semestral
								</Link>
							</li>
							<li>
								<Link
									href="/"
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
									href="/artigos"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais acessado
								</Link>
							</li>
							<li>
								<Link
									href="/artigos"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Recente
								</Link>
							</li>
						</ul>
					</div>

					<div className="max-w-[174px]">
						<h4 className="mb-12 font-heading text-h4 font-bold">
							Artigos
						</h4>
						<ul className="space-y-5">
							<li>
								<Link
									href="/artigos"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais acessados da Semana
								</Link>
							</li>
							<li>
								<Link
									href="/artigos"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais acessados do Mês
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-12 font-heading text-h4 font-bold">
							Colunas
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/artigos"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Recente
								</Link>
							</li>
							<li>
								<Link
									href="/artigos"
									className="text-h6 text-coagray transition-colors hover:text-primary"
								>
									Mais acessados
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
	);
};

export default FooterLinks;
