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

const UserAreaLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login com:", email, password);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
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
						<p className="mt-9 text-p text-coagray">
							Preencha os campos abaixo:
						</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit}
					className="w-full max-w-[425px] space-y-6"
				>
					<div className="space-y-2">
						<Label htmlFor="email" className="text-coagray">
							E-mail
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="Digite seu e-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="h-12 w-full border-coagray bg-[#1E1E1E] pr-10 text-white placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary"
						/>
					</div>

					<div className="w-full space-y-2">
						<Label htmlFor="password" className="text-coagray">
							Senha
						</Label>
						<div className="relative w-full">
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Digite sua senha"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="h-12 w-full border-coagray bg-[#1E1E1E] pr-10 text-white placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary"
							/>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="hover:bg-transparent absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
								onClick={togglePasswordVisibility}
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

					<ButtonCoa type="submit" className="h-12 w-full">
						Acessar a plataforma
					</ButtonCoa>

					<div className="text-center">
						<span className="text-coagray">
							Esqueceu sua senha?{" "}
						</span>
						<Link
							href="/minha-area/recuperar-senha"
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

export default UserAreaLogin;
