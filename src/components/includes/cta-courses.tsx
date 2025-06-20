import React from "react";

import { BannerCreateAcc } from "@/app/(home)/actions";

import { ButtonBanner } from "../core/buttons/button-banner";

const CtaCourses = ({ data }: { data: BannerCreateAcc | null }) => {
	return (
		<section className="wrapper" data-aos="fade-up">
			<div
				className="relative flex h-[222px] rounded-3xl bg-[#202020] bg-cover bg-center px-[187px] py-14 text-center md_tablet:bg-left md_tablet:px-10 lg_phone:bg-left lg_phone:px-10"
				style={{
					backgroundImage: `url(${data?.backgroundImage})`,
				}}
			>
				<div className="relative flex w-full items-center justify-between gap-8 md_tablet:flex-col">
					<div className="w-3/4 text-center font-heading md_tablet:w-full">
						<h2 className="mb-2 text-h2/[50px] text-limit-1 sm_tablet:text-h3">
							{data?.text[0]}
						</h2>
						<h2 className="text-h1/[97px] text-primary text-limit-1 sm_tablet:text-h2 sm_tablet:text-limit-2">
							{data?.text[1]}
						</h2>
					</div>
					<ButtonBanner href={data?.button.link}>
						{data?.button.text}
					</ButtonBanner>
				</div>
			</div>
		</section>
	);
};

export default CtaCourses;
