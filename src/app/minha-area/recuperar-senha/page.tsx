import type React from "react";

import Image from "next/image";
import Link from "next/link";

import logoBg from "@/assets/logo-bg.svg";
import logo from "@/assets/logo.svg";
import { ButtonFill } from "@/components/core/buttons/button-fill";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowBigLeft } from "lucide-react";

const UserAreaRecover = () => {
	return (
		<div className="overflow-hidden">
			<div className="flex min-h-screen translate-y-[-5%] flex-col items-center justify-center gap-9 wrapper">
				<Image
					className="pointer-events-none absolute top-0 -z-elements opacity-5"
					src={logoBg}
					alt="logoBg"
					width={1200}
					height={1050}
				/>

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
						<p className="mt-9 w-full max-w-[300px] text-p text-coagray">
							Enviaremos um e-mail com as informações de
							recuperação. Para isso:
						</p>
					</div>
				</div>

				<form className="w-full max-w-[425px] space-y-6">
					<div className="space-y-2">
						<Label htmlFor="password" className="text-coagray">
							E-mail
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="Digite seu e-mail"
							required
							className="h-12 w-full border-coagray bg-[#1E1E1E] pr-10 text-white placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary"
						/>
					</div>

					<ButtonFill
						type="submit"
						className="w-full bg-white text-gray-900 hover:bg-gray-100"
					>
						Recuperar Senha
					</ButtonFill>

					<div className="text-center">
						<span className="text-coagray">
							Lembrou sua senha?{" "}
						</span>
						<Link
							href="/minha-area/login"
							className="text-white hover:underline"
						>
							Clique aqui
						</Link>
					</div>
				</form>
				<Link href={"/"}>
					<ButtonFill className="flex gap-2">
						<ArrowBigLeft size={18} /> Voltar ao Início
					</ButtonFill>
				</Link>
			</div>
		</div>
	);
};

export default UserAreaRecover;
