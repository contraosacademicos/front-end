"use client";

import type React from "react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logoBg from "@/assets/logo-bg.svg";
import { ButtonCoa } from "@/components/core/buttons/button-coa";
import { ButtonFill } from "@/components/core/buttons/button-fill";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { ArrowBigLeft, Eye, EyeOff } from "lucide-react";

const UserAreaRegister = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		birthDate: "",
		gender: "",
		password: "",
		confirmPassword: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));

		if (id === "confirmPassword" || id === "password") {
			if (id === "confirmPassword") {
				setPasswordsMatch(formData.password === value);
			} else {
				setPasswordsMatch(formData.confirmPassword === value);
			}
		}
	};

	const handleGenderChange = (value: string) => {
		setFormData((prev) => ({ ...prev, gender: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			setPasswordsMatch(false);
			return;
		}
		console.log("Registro com:", formData);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	return (
		<div className="overflow-hidden">
			<div className="flex min-h-screen flex-col items-center justify-center gap-9 wrapper">
				<Image
					className="pointer-events-none absolute top-0 -z-elements size-full overflow-hidden opacity-5"
					src={logoBg}
					alt="logoBg"
				/>

				<div className="flex flex-col gap-12">
					<div className="text-center">
						<p className="text-base">ÁREA DE MEMBROS</p>
						<h3 className="font-heading text-h3 text-primary">
							Crie sua conta
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
						<Label htmlFor="fullName" className="text-coagray">
							Nome Completo
						</Label>
						<Input
							id="fullName"
							type="text"
							placeholder="Digite seu nome completo"
							value={formData.fullName}
							onChange={handleChange}
							required
							className="h-12 w-full border-coagray bg-[#1E1E1E] pr-10 placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="email" className="text-coagray">
							E-mail
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="Digite seu e-mail"
							value={formData.email}
							onChange={handleChange}
							required
							className="h-12 w-full border-coagray bg-[#1E1E1E] pr-10 placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary"
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="birthDate" className="text-coagray">
								Data de Nascimento
							</Label>
							<Input
								id="birthDate"
								type="date"
								value={formData.birthDate}
								onChange={handleChange}
								required
								className="[&::-webkit-calendar-picker-indicator]:filter-primary h-12 w-full border-coagray bg-[#1E1E1E] pr-10 focus:border-primary focus:ring-primary focus-visible:ring-primary [&::-webkit-calendar-picker-indicator]:text-primary"
								style={{
									colorScheme: "dark",
								}}
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="gender" className="text-coagray">
								Gênero
							</Label>
							<Select
								onValueChange={handleGenderChange}
								value={formData.gender}
							>
								<SelectTrigger className="h-12 w-full border-coagray bg-[#1E1E1E] text-[13.9px] placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary">
									<SelectValue placeholder="Selecione seu gênero" />
								</SelectTrigger>
								<SelectContent className="border-coagray bg-[#1E1E1E]">
									<SelectItem
										value="masculino"
										className="transition-colors hover:bg-primary/10 hover:text-primary"
									>
										Masculino
									</SelectItem>
									<SelectItem
										value="feminino"
										className="transition-colors hover:bg-primary/10 hover:text-primary"
									>
										Feminino
									</SelectItem>
									<SelectItem
										value="outro"
										className="transition-colors hover:bg-primary/10 hover:text-primary"
									>
										Outro
									</SelectItem>
									<SelectItem
										value="prefiro-nao-informar"
										className="transition-colors hover:bg-primary/10 hover:text-primary"
									>
										Prefiro não informar
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
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
								value={formData.password}
								onChange={handleChange}
								required
								className="h-12 w-full border-coagray bg-[#1E1E1E] pr-10 placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary"
							/>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="hover:bg-transparent hover: absolute right-0 top-0 h-full px-3 text-gray-400"
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

					<div className="w-full space-y-2">
						<div className="relative w-full">
							<Input
								id="confirmPassword"
								type={showConfirmPassword ? "text" : "password"}
								placeholder="Confirme sua senha"
								value={formData.confirmPassword}
								onChange={handleChange}
								required
								className={`h-12 w-full border-coagray bg-[#1E1E1E] pr-10 placeholder:text-coagray focus:border-primary focus:ring-primary focus-visible:ring-primary ${!passwordsMatch && formData.confirmPassword ? "border-red-500" : ""}`}
							/>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="hover:bg-transparent hover: absolute right-0 top-0 h-full px-3 text-gray-400"
								onClick={toggleConfirmPasswordVisibility}
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
						{!passwordsMatch && formData.confirmPassword && (
							<p className="text-p text-danger-400">
								As senhas não coincidem
							</p>
						)}
					</div>

					<ButtonCoa type="submit" className="h-12 w-full">
						Criar conta
					</ButtonCoa>

					<div className="text-center">
						<span className="text-coagray">
							Já possui uma conta?{" "}
						</span>
						<Link
							href="/minha-area/login"
							className="hover:underline"
						>
							Faça login
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

export default UserAreaRegister;
