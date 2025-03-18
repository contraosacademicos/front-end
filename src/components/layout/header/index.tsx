import React from "react";

import Image from "next/image";
import Link from "next/link";

import searchIcon from "@/assets/icons/search-icon.svg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/buttons/button";
import { ButtonFill } from "@/components/buttons/button-fill";

const Header: React.FC = () => {
	return (
		<header className="fixed inset-0 z-header flex h-[110px] items-center bg-black">
			<div className="flex w-full items-center justify-between wrapper">
				<Link href="/" className="flex items-center">
					<Image
						src={logo}
						alt="Logo"
						width={67}
						height={62}
						className="size-auto"
					/>
				</Link>

				<nav className="flex items-center gap-6">
					<Link
						href="/"
						className="text-base underline-offset-8 duration-300 hover:font-bold hover:underline"
					>
						Home
					</Link>
					<Link
						href="/artigos"
						className="text-base underline-offset-8 duration-300 hover:font-bold hover:underline"
					>
						Artigos
					</Link>
					<Link
						href="/projeto"
						className="text-base underline-offset-8 duration-300 hover:font-bold hover:underline"
					>
						Projeto
					</Link>
					<Link
						href="/contato"
						className="text-base underline-offset-8 duration-300 hover:font-bold hover:underline"
					>
						Contato
					</Link>
					<button className="rounded bg-white px-3 py-2 duration-300 hover:bg-white/50">
						<Image
							src={searchIcon}
							alt="searchIcon"
							width={67}
							height={62}
							className="size-auto"
						/>
					</button>
				</nav>

				<div className="flex gap-4">
					<ButtonFill>Entrar</ButtonFill>
					<Button>Assinar</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
