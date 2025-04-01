import type React from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.svg";

const UserAreaLogin = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-9 wrapper">
			<div className="flex flex-col gap-12">
				<Link href="/" className="flex items-center justify-center">
					<Image
						src={logo}
						alt="Logo"
						width={118}
						height={106}
						className="size-auto"
					/>
				</Link>
				<div className="text-center">
					<p className="text-base">ÁREA DE MEMBROS</p>
					<h3 className="font-heading text-h3 text-primary">
						Bem vindo, membro.
					</h3>
					<p className="mt-9 text-p text-coagray">
						Preencha os campos abaixo:
					</p>
				</div>
			</div>

			<div>
				<div className="flex h-12 w-full items-center rounded-lg bg-white px-3 py-2">
					<input
						type="email"
						placeholder="Digite seu e-mail"
						className="w-full flex-1 text-gray-500 focus:outline-none"
					/>
				</div>
			</div>
		</div>
	);
};

export default UserAreaLogin;
