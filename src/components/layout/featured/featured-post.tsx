import React from "react";

import Image from "next/image";

import imgFeatured1 from "@/assets/featured/1.png";
import imgFeatured2 from "@/assets/featured/2.png";
import imgFeatured3 from "@/assets/featured/3.png";

const FeaturedPost = () => {
	return (
		<div className="flex justify-between sm_desktop:flex-col">
			<div className="flex h-full flex-row flex-wrap gap-[52px] sm_desktop:mb-[26px] sm_desktop:flex-row sm_desktop:justify-evenly">
				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image src={imgFeatured1} alt="imgFeatured1" />
					<h5 className="text-limit-2 font-heading text-h5 font-medium">
						Distúrbios emocionais na infância e alienação parental
					</h5>
					<p className="text-xs">
						Por: <strong>Frederico Mendonça de Oliveira</strong>
					</p>
				</div>

				<div>
					<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
						<Image
							src={imgFeatured2}
							alt="imgFeatured2"
							className="h-full max-h-[153px]"
						/>
						<h5 className="text-limit-2 font-heading text-h5 font-medium">
							Distúrbios emocionais na infância e alienação
							parental Distúrbios emocionais na infância e
							alienação parental Distúrbios emocionais na infância
							e alienação parental
						</h5>
						<p className="text-xs">
							Por: <strong>Frederico Mendonça de Oliveira</strong>
						</p>
					</div>

					<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
						<Image
							src={imgFeatured3}
							alt="imgFeatured3"
							className="max-h-[188px] rounded-3xl frame"
						/>
						<h5 className="text-limit-2 font-heading text-h5 font-medium">
							O Simbolismo de Se7en
						</h5>
						<p className="text-xs">
							Por: <strong>Frederico Mendonça de Oliveira</strong>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedPost;
