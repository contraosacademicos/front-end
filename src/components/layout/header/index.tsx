"use client";

import type React from "react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Category } from "@/app/artigos/types";
import searchIcon from "@/assets/icons/search-icon.svg";
import logo from "@/assets/logo-primary.svg";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { AnimatePresence, motion } from "framer-motion";

import { ebooks } from "./ebook";
import EbooksMenu from "./ebook-menu";
import MobileNav from "./mobile-nav";
import SearchModal from "./search-modal";

const Header = ({ data }: { data: Category[] | null }) => {
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
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	return (
		<header className="fixed inset-0 z-header flex h-[110px] items-center border-b border-coagray/20 bg-black">
			<div className="flex w-full items-center justify-between wrapper">
				<Link href="/" className="flex items-center">
					<Image src={logo} alt="Logo" width={67} height={62} />
				</Link>

				<nav className="relative flex items-center gap-6 es_tablet:hidden">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-base text-white underline-offset-8 duration-300 hover:scale-105 hover:underline"
						>
							{link.label}
						</Link>
					))}

					<Popover
						open={isPopoverOpen}
						onOpenChange={setIsPopoverOpen}
					>
						<PopoverTrigger asChild>
							<button className="text-base text-white underline-offset-8 duration-300 hover:scale-105 hover:underline">
								Ebooks
							</button>
						</PopoverTrigger>

						<AnimatePresence>
							{isPopoverOpen && (
								<PopoverContent
									asChild
									side="bottom"
									align="start"
									forceMount
									sideOffset={32}
									className="bg-transparent border-none p-0 shadow-none"
								>
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.2 }}
										className="z-modal w-[500px]"
									>
										<EbooksMenu
											ebooks={ebooks}
											className="rounded-xl"
										/>
									</motion.div>
								</PopoverContent>
							)}
						</AnimatePresence>
					</Popover>

					<button
						className="rounded bg-white px-3 py-2 duration-300 hover:bg-white/50"
						onClick={() => setSearchOpen(true)}
					>
						<Image
							src={searchIcon || "/placeholder.svg"}
							alt="searchIcon"
							width={24}
							height={24}
							className="size-auto"
						/>
					</button>
				</nav>

				<div className="flex gap-4">
					{/* NOTE <ButtonFill href="/minha-area/login">Entrar</ButtonFill> */}
				</div>

				<MobileNav navLinks={navLinks} data={data} />
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
