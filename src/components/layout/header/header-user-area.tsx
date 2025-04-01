import type React from "react";

import Image from "next/image";
import Link from "next/link";

import imgColumnist1 from "@/assets/columnist/1.png";
import arrowDownIcon from "@/assets/icons/arrow-down.svg";
import bellIcon from "@/assets/icons/bell-icon.svg";
import facebookIcon from "@/assets/icons/facebook-icon.svg";
import gearIcon from "@/assets/icons/gear-icon.svg";
import instagramIcon from "@/assets/icons/instagram-icon.svg";
import spotifyIcon from "@/assets/icons/spotify-icon.svg";
import youtubeIcon from "@/assets/icons/youtube-icon.svg";
import logo from "@/assets/logo-primary.png";
import { Button } from "@/components/core/buttons/button";

import MobileNav from "./mobile-nav";

const HeaderUserArea: React.FC = () => {
	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/artigos", label: "Artigos" },
		{ href: "/projeto", label: "Projeto" },
		{ href: "/contato", label: "Contato" },
	];

	return (
		<header className="fixed inset-0 z-header flex h-fit flex-col items-center border-b border-coagray bg-black">
			<div className="w-full bg-primary text-black">
				<div className="flex w-full justify-between py-2.5 wrapper">
					<p>
						Bem vindo ao <strong>COA</strong>, Já nos indicou para
						um amigo hoje?
					</p>
					<div className="flex gap-6">
						<p>Siga nossas redes:</p>
						<div className="flex gap-5">
							<Link href="/">
								<Image src={facebookIcon} alt="facebookIcon" />
							</Link>
							<Link href="/">
								<Image
									src={instagramIcon}
									alt="instagramIcon"
								/>
							</Link>
							<Link href="/">
								<Image src={youtubeIcon} alt="youtubeIcon" />
							</Link>
							<Link href="/">
								<Image src={spotifyIcon} alt="spotifyIcon" />
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-full items-center justify-between py-6 wrapper">
				<Link href="/" className="flex items-center">
					<Image src={logo} alt="Logo" width={67} height={62} />
				</Link>

				<div className="flex gap-7">
					<Button>Assinar</Button>
					<Link
						href="/"
						className="flex items-center brightness-[1000%] duration-100 hover:brightness-100"
					>
						<Image
							src={gearIcon}
							alt="gearIcon"
							className="size-auto"
						/>
					</Link>
					<Link
						href="/"
						className="flex items-center brightness-[1000%] duration-100 hover:brightness-100"
					>
						<Image
							src={bellIcon}
							alt="bellIcon"
							className="size-auto"
						/>
					</Link>

					<div className="flex cursor-pointer items-center gap-4">
						<Image
							src={imgColumnist1}
							alt="imgProfile"
							className="size-auto rounded-full"
						/>
						<Image
							src={arrowDownIcon}
							alt="arrowDownIconIcon"
							className="size-auto"
						/>
					</div>
				</div>

				<MobileNav navLinks={navLinks} />
			</div>
		</header>
	);
};

export default HeaderUserArea;
