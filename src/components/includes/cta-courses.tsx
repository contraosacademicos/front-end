import React from "react";

import ctaBg from "@/assets/bg/cta-bg.png";

import { ButtonBanner } from "../core/buttons/button-banner";

const CtaCourses = () => {
	return (
		<section className="wrapper es_tablet:hidden" data-aos="fade-up">
			<div
				className="relative rounded-3xl bg-[#202020] bg-cover bg-center px-[187px] py-14 text-center lg_phone:px-10"
				style={{
					backgroundImage: `url(${ctaBg.src})`,
				}}
			>
				<div className="relative flex flex-wrap items-center justify-between gap-8">
					<div className="text-center font-heading">
						<h2 className="mb-2 text-h2/[50px]">
							junte-se a a nós
						</h2>
						<h2 className="text-h1/[97px] text-primary">
							+ 42 cursos
						</h2>
					</div>
					<ButtonBanner>CLIQUE AQUI E CRIE SUA CONTA</ButtonBanner>
				</div>
			</div>
		</section>
	);
};

export default CtaCourses;
