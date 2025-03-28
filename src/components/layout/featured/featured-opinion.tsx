import React from "react";

import Image from "next/image";

import logo from "@/assets/logo.png";
import imgOpinion1 from "@/assets/opinion/1.png";
import imgOpinion2 from "@/assets/opinion/2.png";
import imgOpinion3 from "@/assets/opinion/3.png";
import imgOpinion4 from "@/assets/opinion/4.png";

const FeaturedOpinion = () => {
	return (
		<div className="h-full max-w-[445px] rounded-3xl border border-white/40 p-6">
			<div className="flex justify-between">
				<h6 className="font-heading text-h6 font-bold">Opinião</h6>
				<Image
					src={logo}
					alt="Logo"
					width={35}
					height={32}
					className="mr-8 opacity-20"
				/>
			</div>
			<div className="flex items-center gap-8 border-b border-dashed border-[#525252] p-6">
				<Image src={imgOpinion1} alt="imgOpinion1" />
				<div>
					<p className="text-base text-primary">
						O Padre Melchior e a religião em Machado de Assis
					</p>
					<p className="mt-1.5 text-xs">Lucas Ribeiro Fernandes</p>
				</div>
			</div>

			<div className="flex items-center gap-8 border-b border-dashed border-[#525252] p-6">
				<Image src={imgOpinion2} alt="imgOpinion2" />
				<div>
					<p className="text-base text-primary">
						O Padre Melchior e a religião em Machado de Assis
					</p>
					<p className="mt-1.5 text-xs">Lucas Ribeiro Fernandes</p>
				</div>
			</div>

			<div className="flex items-center gap-8 border-b border-dashed border-[#525252] p-6">
				<Image src={imgOpinion3} alt="imgOpinion3" />
				<div>
					<p className="text-base text-primary">
						O Padre Melchior e a religião em Machado de Assis
					</p>
					<p className="mt-1.5 text-xs">Lucas Ribeiro Fernandes</p>
				</div>
			</div>

			<div className="flex items-center gap-8 p-6">
				<Image src={imgOpinion4} alt="imgOpinion4" />
				<div>
					<p className="text-base text-primary">
						O Padre Melchior e a religião em Machado de Assis
					</p>
					<p className="mt-1.5 text-xs">Lucas Ribeiro Fernandes</p>
				</div>
			</div>
		</div>
	);
};

export default FeaturedOpinion;
