"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Category } from "@/app/artigos/types";
import closeIcon from "@/assets/icons/close-icon.svg";
import menuIcon from "@/assets/icons/menu-icon.svg";
import searchIcon from "@/assets/icons/search-icon.svg";
import logo from "@/assets/logo-primary.svg";
import { ButtonFill } from "@/components/core/buttons/button-fill";

import SearchModal from "./search-modal";

interface NavLink {
	href: string;
	label: string;
}

interface MobileNavProps {
	navLinks: NavLink[];
	data: Category[] | null;
	className?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({
	navLinks,
	data,
	className = "",
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const [searchOpen, setSearchOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				closeMenu();
			}
		};

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMenuOpen]);

	return (
		<div className={`hidden es_tablet:block ${className}`}>
			<button
				onClick={toggleMenu}
				aria-label="Toggle menu"
				aria-expanded={isMenuOpen}
			>
				<Image src={menuIcon} alt="Menu" className="size-auto" />
			</button>

			<div
				ref={menuRef}
				className={`fixed right-0 top-0 z-[9999] h-full w-4/5 max-w-[320px] bg-black shadow-lg transition-transform duration-300 ease-in-out ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex h-full flex-col p-6">
					<div className="mb-8 flex items-center justify-between">
						<Link
							href="/"
							className="flex items-center"
							onClick={closeMenu}
						>
							<Image
								src={logo}
								alt="Logo"
								width={50}
								height={46}
								className="size-auto"
							/>
						</Link>
						<button
							onClick={closeMenu}
							className="rounded-full p-2 transition-colors hover:bg-gray-800"
							aria-label="Close menu"
						>
							<Image src={closeIcon} alt="Close" />
						</button>
					</div>

					<nav className="mb-8 flex flex-col gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="font-medium underline-offset-8 duration-300 hover:underline"
								onClick={closeMenu}
							>
								{link.label}
							</Link>
						))}
						<button
							className="rounded bg-white px-3 py-2 duration-300 hover:bg-white/50"
							onClick={() => {
								setSearchOpen(true);
								closeMenu();
							}}
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

					<div className="mt-auto flex flex-col gap-4">
						<ButtonFill onClick={closeMenu}>Entrar</ButtonFill>
						{/* NOTE <ButtonCoa onClick={closeMenu}>Assinar</ButtonCoa> */}
					</div>
				</div>
			</div>

			<SearchModal
				isOpen={searchOpen}
				onClose={() => setSearchOpen(false)}
				data={data}
			/>

			{isMenuOpen && (
				<div
					className="fixed inset-0 z-[9998] bg-black/50"
					onClick={closeMenu}
					aria-hidden="true"
				/>
			)}
		</div>
	);
};

export default MobileNav;
