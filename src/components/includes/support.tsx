import React from "react";

import Image from "next/image";

import gemPlan from "@/assets/icons/gem-icon.svg";

const Support = () => {
	return (
		<section className="wrapper" data-aos="fade-up">
			<div className="flex flex-col items-center font-heading">
				<h5 className="text-h5 text-primary">
					Junte-se a nós e apoie o projeto
				</h5>
				<h3 className="mt-0.5 text-h3 es_tablet:text-center">
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
					<h5 className="font-heading text-h5">Básico</h5>
					<h2 className="font-heading text-h2 text-primary">
						R$ $value
					</h2>
					<Image
						src={gemPlan}
						alt="gemPlan"
						width={132}
						height={132}
						className="py-8"
					/>
					<p className="w-[176px] text-xs">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer vel cursus mauris.{" "}
					</p>
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

					<h5 className="font-heading text-h5">Premium</h5>
					<h2 className="font-heading text-h2 text-primary">
						R$ $value
					</h2>
					<Image
						src={gemPlan}
						alt="gemPlan"
						width={132}
						height={132}
						className="py-8"
					/>
					<p className="w-[176px] text-xs">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer vel cursus mauris.{" "}
					</p>
				</div>

				<div
					className="flex w-full max-w-[461px] flex-col items-center rounded-3xl border border-[#272727] px-12 py-[42px] text-center"
					style={{
						background:
							"linear-gradient(180deg, #201F1F 0%, #141414 100%)",
					}}
				>
					<h5 className="font-heading text-h5">Intermediário</h5>
					<h2 className="font-heading text-h2 text-primary">
						R$ $value
					</h2>
					<Image
						src={gemPlan}
						alt="gemPlan"
						width={132}
						height={132}
						className="py-8"
					/>
					<p className="w-[176px] text-xs">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer vel cursus mauris.{" "}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Support;
