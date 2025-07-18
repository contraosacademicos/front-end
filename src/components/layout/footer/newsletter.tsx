"use client";

import React, { useState } from "react";

import Image from "next/image";

import { Newsletter, postNewsletter } from "@/app/(home)/actions";
import logo from "@/assets/logo.svg";
import newsBg from "@/assets/newsletter-bg.jpg";

import { toast } from "sonner";

import { ButtonFill } from "../../core/buttons/button-fill";

const FooterNewsletter = ({ data }: { data: Newsletter | null }) => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		if (!email) {
			toast.error(
				<>
					<strong>E-mail inválido</strong>
					<div className="text-sm text-muted-foreground">
						Por favor, digite um e-mail válido.
					</div>
				</>,
			);
			return;
		}

		setLoading(true);
		const response = await postNewsletter({ email });

		console.log("Resposta da API:", response);

		setLoading(false);

		if (response?.message?.includes("successfully")) {
			toast.success(
				<>
					<strong>Inscrição realizada!</strong>
					<div className="text-sm text-muted-foreground">
						Você foi inscrito com sucesso na newsletter.
					</div>
				</>,
			);
			setEmail("");
		} else {
			toast.error(
				<>
					<strong>Erro ao se inscrever</strong>
					<div className="text-sm text-muted-foreground">
						Tente novamente mais tarde.
					</div>
				</>,
			);
		}
	};

	return (
		<section className="mt-[155px] wrapper sm_tablet:pb-8 lg_phone:mt-10">
			<div
				className="newsletter-bg relative h-[400px] w-full rounded-3xl bg-gray-900 bg-cover px-[93px] py-[53px] es_tablet:px-7 lg_phone:pt-[200px]"
				style={{
					backgroundImage: `url(${newsBg.src})`,
					backgroundPosition: "center",
				}}
			>
				<Image
					src={logo}
					alt="Logo"
					width={113}
					height={105}
					className="absolute left-32 top-1/3 hidden opacity-20 lg_phone:left-40 lg_phone:block md_phone:left-32"
				/>

				<div
					className="max-w-[654px] rounded-3xl px-12 py-[72px] text-center lg_phone:px-6 lg_phone:py-16"
					style={{
						background:
							"conic-gradient(from 212deg at 50% 20.74%, #010101 0deg, #37290F 200deg, #454545 244deg, #202020 360deg)",
					}}
					data-aos="fade-right"
				>
					<div className="mb-10">
						<p className="text-base lg_phone:mb-2 lg_phone:text-p">
							{data?.message}
						</p>
						<h3 className="font-heading text-h3 lg_phone:text-h6">
							Assine o nosso newsletter!
						</h3>
					</div>
					<div className="flex h-12 w-full items-center rounded-lg bg-white px-3 py-2">
						<input
							type="email"
							placeholder="Digite seu e-mail"
							className="w-full flex-1 text-gray-500 focus:outline-none"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<ButtonFill onClick={handleSubmit}>
							{loading ? "Enviando..." : data?.callToAction}
						</ButtonFill>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FooterNewsletter;
