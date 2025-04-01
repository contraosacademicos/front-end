import React from "react";

import Image from "next/image";
import Link from "next/link";

import arrowRightIcon from "@/assets/icons/arrow-right.svg";
import bookmarkIcon from "@/assets/icons/bookmark-icon.svg";
import favoriteIcon from "@/assets/icons/favorite-star.svg";
import gearIcon from "@/assets/icons/gear-icon.svg";
import homeIcon from "@/assets/icons/home-icon.svg";
import subscription from "@/assets/icons/subscription-icon.svg";
import subscriptionIcon from "@/assets/icons/subscription.svg";
import supportIcon from "@/assets/icons/support-icon.svg";

const NavUserArea = () => {
	return (
		<div className="h-full w-[282px] rounded-3xl bg-[#252525] p-2.5">
			<nav className="flex flex-col gap-2.5 text-p es_tablet:hidden">
				<Link
					href={" "}
					className="flex w-full justify-between gap-4 rounded-2xl bg-primary px-[15px] py-2 text-base font-bold duration-300 hover:bg-coagray"
				>
					<div className="flex items-center gap-4">
						<Image
							src={subscription}
							alt="subscription"
							className="size-auto"
						/>
						<div>
							<p>Assinante COA</p>
							<span className="text-xs font-normal">
								Desde 2022
							</span>
						</div>
					</div>
					<Image
						src={arrowRightIcon}
						alt="arrowRightIcon"
						className="size-auto"
					/>
				</Link>

				<Link
					href={"/minha-area/inicio"}
					className="flex gap-5 p-5 font-medium brightness-[1000%] duration-300 hover:text-primary hover:brightness-100"
				>
					<Image
						src={homeIcon}
						alt="homeIcon"
						className="size-auto"
					/>
					Página Inicial
				</Link>

				<Link
					href={"/minha-area/favoritos"}
					className="flex gap-5 p-5 font-medium brightness-[1000%] duration-300 hover:text-primary hover:brightness-100"
				>
					<Image
						src={favoriteIcon}
						alt="favoriteIcon"
						className="size-auto"
					/>
					Favoritos
				</Link>

				<Link
					href={"/minha-area/ultimas-leituras"}
					className="flex gap-5 p-5 font-medium brightness-[1000%] duration-300 hover:text-primary hover:brightness-100"
				>
					<Image
						src={bookmarkIcon}
						alt="bookmarkIcon"
						className="size-auto"
					/>
					Últimas Leituras
				</Link>

				<Link
					href={"/minha-area/assinaturas"}
					className="flex gap-5 p-5 font-medium brightness-[1000%] duration-300 hover:text-primary hover:brightness-100"
				>
					<Image
						src={subscriptionIcon}
						alt="subscriptionIcon}"
						className="size-auto"
					/>
					Assinaturas
				</Link>

				<Link
					href={"/minha-area/suporte-coa"}
					className="flex gap-5 p-5 font-medium brightness-[1000%] duration-300 hover:text-primary hover:brightness-100"
				>
					<Image
						src={supportIcon}
						alt="supportIcon}"
						className="size-auto"
					/>
					Suporte COA
				</Link>

				<Link
					href={"/minha-area/configuracoes"}
					className="flex gap-5 p-5 font-medium brightness-[1000%] duration-300 hover:text-primary hover:brightness-100"
				>
					<Image
						src={gearIcon}
						alt="gearIcon}"
						className="size-auto"
					/>
					Configurações de Conta
				</Link>
			</nav>
		</div>
	);
};

export default NavUserArea;
