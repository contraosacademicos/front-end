import React from "react";

import newsBg from "@/assets/newsletter-bg.jpg";

import { ButtonFill } from "../../buttons/button-fill";

const Newsletter = () => {
	return (
		<section className="mt-[155px] wrapper">
			<div
				className="h-[400px] w-full rounded-3xl bg-gray-900 bg-cover px-[93px] py-[54px]"
				style={{ backgroundImage: `url(${newsBg.src})` }}
			>
				<div
					className="left-24 top-16 max-w-[654px] rounded-3xl px-12 py-[72px] text-center"
					style={{
						background:
							"conic-gradient(from 212deg at 50% 20.74%, #010101 0deg, #37290F 125.99999785423279deg, #454545 233.99999141693115deg, #202020 360deg)",
					}}
				>
					<div className="mb-10">
						<p className="text-base">
							Que tal receber os melhores conteúdos direto no seu
							e-mail?
						</p>
						<h3 className="font-heading text-h3">
							Assine o nosso newsletter!
						</h3>
					</div>
					<div className="flex h-12 w-full items-center rounded-lg bg-white px-3 py-2">
						<input
							type="email"
							placeholder="Digite seu e-mail"
							className="w-full flex-1 text-gray-500 focus:outline-none"
						/>
						<ButtonFill>Assinar</ButtonFill>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
