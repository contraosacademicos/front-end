import React from "react";

import Image from "next/image";

import gemPlan from "@/assets/icons/gem-icon.svg";

import { ButtonCoa } from "../core/buttons/button-coa";

const Support = () => {
	return (
		<section className="wrapper" data-aos="fade-up">
			<div className="flex flex-col items-center font-heading">
				<h5 className="text-h5 text-primary">
					Junte-se a nós e apoie o projeto
				</h5>
				<h3 className="mt-0.5 max-w-[800px] text-center text-h3 es_tablet:text-center">
					Planos para qualquer tipo de estudante
				</h3>
				<div className="w-[292px] border"></div>
			</div>

			<div className="mt-12 flex justify-between lg_tablet:flex-col lg_tablet:items-center lg_tablet:gap-12">
				<div
					className="flex w-full max-w-[461px] flex-col items-center rounded-3xl border border-[#272727] px-12 py-[42px] text-center"
					style={{
						background:
							"linear-gradient(180deg, #201F1F 0%, #141414 100%)",
					}}
				>
					<h5 className="font-heading text-h5">Mensal</h5>
					<h2 className="font-heading text-h2 text-primary">
						R$ 19,90
					</h2>
					<Image
						src={gemPlan}
						alt="gemPlan"
						width={132}
						height={132}
						className="py-8"
					/>
					<h6 className="text-h6 text-primary">
						Valor total: R$ 238,80
					</h6>
					<ButtonCoa className="mt-10">Assinar</ButtonCoa>
				</div>

				<div
					className="relative flex w-full max-w-[461px] flex-col items-center rounded-3xl border border-[#272727] px-12 py-[42px] text-center"
					style={{
						background:
							"linear-gradient(180deg, #201F1F 0%, #141414 100%)",
					}}
				>
					<div className="absolute -top-2 rounded-full bg-primary px-6 py-1.5 text-darkest">
						<p className="font-bold">Melhor oferta</p>
					</div>

					<h5 className="font-heading text-h5">Anual</h5>
					<h2 className="font-heading text-h2 text-primary">
						R$ 10,90
					</h2>
					<Image
						src={gemPlan}
						alt="gemPlan"
						width={132}
						height={132}
						className="py-8"
					/>
					<h6 className="text-h6 text-primary">
						Valor total: R$ 130,80
					</h6>
					<p className="m-2 text-p">Você economiza: R$ 107,20</p>
					<ButtonCoa className="mt-4">Assinar</ButtonCoa>
				</div>

				<div
					className="flex w-full max-w-[461px] flex-col items-center rounded-3xl border border-[#272727] px-12 py-[42px] text-center"
					style={{
						background:
							"linear-gradient(180deg, #201F1F 0%, #141414 100%)",
					}}
				>
					<h5 className="font-heading text-h5">Semestral</h5>
					<h2 className="font-heading text-h2 text-primary">
						R$ 14,90
					</h2>
					<Image
						src={gemPlan}
						alt="gemPlan"
						width={132}
						height={132}
						className="py-8"
					/>
					<h6 className="text-h6 text-primary">
						Valor total: R$ 178,80
					</h6>
					<p className="m-2 text-p">Você economiza: R$ 59,20</p>
					<ButtonCoa className="mt-4">Assinar</ButtonCoa>
				</div>
			</div>
		</section>
	);
};

export default Support;
