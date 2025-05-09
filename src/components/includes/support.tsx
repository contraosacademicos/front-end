import React from "react";

import Image from "next/image";

import { PricingTable } from "@/app/(home)/actions";
import gemPlan from "@/assets/icons/gem-icon.svg";

import { ButtonCoa } from "../core/buttons/button-coa";

const Support = ({ data }: { data: PricingTable[] | null }) => {
	return (
		<section className="wrapper" data-aos="fade-up">
			<div className="flex flex-col items-center font-heading">
				<h5 className="text-h5 text-primary">
					Junte-se a nós e apoie o projeto
				</h5>
				<h3 className="mt-0.5 max-w-[800px] text-center text-h3 es_tablet:text-center">
					Planos para o conteúdo exclusivo do blog
				</h3>
				<div className="w-[292px] border"></div>
			</div>

			<div className="mt-12 flex justify-between lg_tablet:flex-col lg_tablet:items-center lg_tablet:gap-12">
				{Array.from(data || []).map((plan) => {
					const isBestValue = plan.best_value === 1;

					return (
						<div
							key={plan.id}
							className="relative flex w-full max-w-[461px] flex-col items-center rounded-3xl border border-[#272727] px-12 py-[42px] text-center"
							style={{
								background:
									"linear-gradient(180deg, #201F1F 0%, #141414 100%)",
							}}
						>
							{isBestValue && (
								<div className="absolute -top-2 rounded-full bg-primary px-6 py-1.5 text-darkest">
									<p className="font-bold">Melhor oferta</p>
								</div>
							)}

							<h5 className="font-heading text-h5">
								{plan.name}
							</h5>
							<h2 className="font-heading text-h2 text-primary">
								R${" "}
								{Number(plan.price)
									.toFixed(2)
									.replace(".", ",")}
							</h2>

							<Image
								src={gemPlan}
								alt="gemPlan"
								width={132}
								height={132}
								className="py-8"
							/>

							<h6 className="text-h6 text-primary">
								Valor total: R${" "}
								{Number(plan.total_price)
									.toFixed(2)
									.replace(".", ",")}
							</h6>

							{plan.discount !== null && (
								<p className="m-2 text-p">
									Você economiza: R${" "}
									{Number(plan.discount)
										.toFixed(2)
										.replace(".", ",")}
								</p>
							)}

							<ButtonCoa className="mt-4" href={plan.url}>
								Assinar
							</ButtonCoa>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Support;
