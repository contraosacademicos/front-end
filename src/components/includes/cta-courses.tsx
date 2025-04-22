import React from "react";

import { BannerCreateAcc } from "@/app/(home)/actions";

import { ButtonBanner } from "../core/buttons/button-banner";

const CtaCourses = ({ data }: { data: BannerCreateAcc | null }) => {
	return (
		<section className="wrapper es_tablet:hidden" data-aos="fade-up">
			<div
				className="relative rounded-3xl bg-[#202020] bg-cover bg-center px-[187px] py-14 text-center lg_phone:px-10"
				style={{
					backgroundImage: `url(${data?.backgroundImage})`,
				}}
			>
				<div className="relative flex items-center justify-between gap-8">
					<div className="w-3/4 text-center font-heading">
						<h2 className="text-limit-1 mb-2 text-h2/[50px]">
							{data?.message}
						</h2>
						<h2 className="text-limit-1 text-h1/[97px] text-primary">
							{data?.secondaryText}
						</h2>
					</div>
					<ButtonBanner href={data?.linkButton}>
						{data?.buttonText}
					</ButtonBanner>
				</div>
			</div>
		</section>
	);
};

export default CtaCourses;
