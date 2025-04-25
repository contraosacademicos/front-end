"use client";

import type React from "react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Categories } from "@/app/(home)/actions";
import searchIcon from "@/assets/icons/search-icon.svg";
import logo from "@/assets/logo-primary.svg";
import { ButtonCoa } from "@/components/core/buttons/button-coa";
import { ButtonFill } from "@/components/core/buttons/button-fill";

import MobileNav from "./mobile-nav";
import SearchModal from "./search-modal";

const Header = ({ data }: { data: Categories | null }) => {
	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/artigos", label: "Artigos" },
		{
			href: "http://www.livrariacontraosacademicos.com.br",
			label: "Livraria",
		},
		{ href: "/sobre", label: "Projeto" },
		{ href: "/contato", label: "Contato" },
	];
	const [searchOpen, setSearchOpen] = useState(false);

	return (
		<header className="fixed inset-0 z-header flex h-[110px] items-center border-b border-coagray/20 bg-black">
			<div className="flex w-full items-center justify-between wrapper">
				<Link href="/" className="flex items-center">
					<Image src={logo} alt="Logo" width={67} height={62} />
				</Link>

				<nav className="flex items-center gap-6 es_tablet:hidden">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-base underline-offset-8 duration-300 hover:scale-105 hover:underline"
						>
							{link.label}
						</Link>
					))}
					<button
						className="rounded bg-white px-3 py-2 duration-300 hover:bg-white/50"
						onClick={() => setSearchOpen(true)}
					>
						<Image
							src={searchIcon || "/placeholder.svg"}
							alt="searchIcon"
							width={67}
							height={62}
							className="size-auto"
						/>
					</button>
				</nav>

				<div className="flex gap-4">
					<ButtonFill href="/minha-area/login">Entrar</ButtonFill>
					<ButtonCoa>Assinar</ButtonCoa>
				</div>

				<MobileNav navLinks={navLinks} />
				<SearchModal
					isOpen={searchOpen}
					onClose={() => setSearchOpen(false)}
					data={data}
				/>
			</div>
		</header>
	);
};

export default Header;
