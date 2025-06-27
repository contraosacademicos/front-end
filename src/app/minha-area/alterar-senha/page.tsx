"use client";

import type React from "react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logoBg from "@/assets/logo-bg.svg";
import logo from "@/assets/logo.svg";
import { ButtonCoa } from "@/components/core/buttons/button-coa";
import { ButtonFill } from "@/components/core/buttons/button-fill";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowBigLeft, Eye, EyeOff } from "lucide-react";

const UserAreaChangePassword = () => {
	const [novaSenha, setNovaSenha] = useState("");
	const [confirmarSenha, setConfirmarSenha] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (novaSenha !== confirmarSenha) {
			setPasswordsMatch(false);
			return;
		}

		console.log("Nova senha:", novaSenha);
	};

	return (
		<div className="overflow-hidden">
			<div className="flex min-h-screen translate-y-[-5%] flex-col items-center justify-center gap-9 py-24 wrapper">
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
							Alterar senha
						</h3>
						<p className="mt-9 w-full max-w-[300px] text-p text-coagray">
							Digite e confirme sua nova senha abaixo.
						</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit}
					className="w-full max-w-[425px] space-y-6"
				>
					<div className="space-y-2">
						<Label htmlFor="novaSenha" className="text-coagray">
							Nova senha
						</Label>
						<div className="relative w-full">
							<Input
								id="novaSenha"
								type={showPassword ? "text" : "password"}
								placeholder="Digite sua nova senha"
								value={novaSenha}
								onChange={(e) => {
									setNovaSenha(e.target.value);
									setPasswordsMatch(
										e.target.value === confirmarSenha,
									);
								}}
								required
								className="h-12 w-full border-coagray bg-[#1E1E1E] pr-10 placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary"
							/>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="hover:bg-transparent absolute right-0 top-0 h-full px-3 text-gray-400"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<EyeOff size={18} />
								) : (
									<Eye size={18} />
								)}
								<span className="sr-only">
									{showPassword
										? "Esconder senha"
										: "Mostrar senha"}
								</span>
							</Button>
						</div>
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="confirmarSenha"
							className="text-coagray"
						>
							Confirmar nova senha
						</Label>
						<div className="relative w-full">
							<Input
								id="confirmarSenha"
								type={showConfirmPassword ? "text" : "password"}
								placeholder="Confirme sua nova senha"
								value={confirmarSenha}
								onChange={(e) => {
									setConfirmarSenha(e.target.value);
									setPasswordsMatch(
										novaSenha === e.target.value,
									);
								}}
								required
								className={`h-12 w-full border-coagray bg-[#1E1E1E] pr-10 placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary ${
									!passwordsMatch && confirmarSenha
										? "border-red-500"
										: ""
								}`}
							/>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="hover:bg-transparent absolute right-0 top-0 h-full px-3 text-gray-400"
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
							>
								{showConfirmPassword ? (
									<EyeOff size={18} />
								) : (
									<Eye size={18} />
								)}
								<span className="sr-only">
									{showConfirmPassword
										? "Esconder senha"
										: "Mostrar senha"}
								</span>
							</Button>
						</div>
						{!passwordsMatch && confirmarSenha && (
							<p className="text-p text-danger-400">
								As senhas não coincidem
							</p>
						)}
					</div>

					<ButtonCoa type="submit" className="h-12 w-full">
						Alterar senha
					</ButtonCoa>

					<div className="text-center">
						<span className="text-coagray">
							Voltar para o login?{" "}
						</span>
						<Link
							href="/minha-area/login"
							className="hover:underline"
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

export default UserAreaChangePassword;
