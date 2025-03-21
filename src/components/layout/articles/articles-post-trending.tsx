import React from "react";

import Image from "next/image";

import imgArticle7 from "@/assets/articles/7.png";
import imgArticle8 from "@/assets/articles/8.png";
import imgArticleT1 from "@/assets/articles/trending1.png";
import starIcon from "@/assets/icons/star.svg";
import logo from "@/assets/logo.png";
import { ButtonFill } from "@/components/core/buttons/button-fill";

const ArticlesTrending = () => {
	return (
		<div className="flex justify-between wrapper sm_desktop:flex-col">
			<div className="flex flex-col flex-wrap gap-y-[26px] sm_desktop:mb-[26px] sm_desktop:flex-row sm_desktop:justify-evenly">
				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image src={imgArticle7} alt="imgArticle7" />
					<h5 className="font-heading text-h5 font-medium text-limit-2">
						Distúrbios emocionais na infância e alienação parental
					</h5>
					<p className="text-xs">
						Por: <strong>Frederico Mendonça de Oliveira</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image src={imgArticle8} alt="imgArticle8" />
					<h5 className="font-heading text-h5 font-medium text-limit-2">
						O Simbolismo de Se7en
					</h5>
					<p className="text-xs">
						Por: <strong>Frederico Mendonça de Oliveira</strong>
					</p>
				</div>
			</div>

			<div className="relative h-[567px] w-full max-w-[924px] cursor-pointer sm_desktop:m-auto sm_tablet:hidden">
				<Image
					src={imgArticleT1}
					alt="imgArticleT1"
					className="absolute"
				/>
				<Image
					src={logo}
					alt="Logo"
					width={79}
					height={73}
					className="absolute -top-3 right-11"
				/>
				<div className="relative px-[34px] py-7">
					<div className="mb-10 flex gap-6">
						<Image src={starIcon} alt="starIcon" />
						<h5 className="font-heading text-h5">Artigo em alta</h5>
					</div>

					<h3 className="mb-[60px] w-full max-w-[542px] font-heading text-[38px]">
						Distúrbios emocionais na infância e alienação parental
					</h3>

					<div className="mb-[36px] border-b border-primary"></div>

					<p className="text-xs/6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer vel cursus mauris. Sed finibus venenatis metus,
						quis venenatis orci. Nunc placerat, libero eget
						fermentum efficitur, tortor massa sodales ante, vel
						feugiat nunc ipsum in orci. Phasellus dictum eleifend
						tellus ac egestas. Cras interdum velit nec placerat
						gravida. Aenean libero mauris, aliquam non nunc id,
						porttitor vulputate libero. Nulla facilisi. Nullam nisi
						felis, viverra ut libero sit amet, placerat mollis ante.
						Nunc sit amet ipsum elementum, suscipit odio eu,
						ultricies odio. Curabitur pharetra lobortis mi, non
						dignissim dui lacinia in.
					</p>
				</div>
			</div>

			<ButtonFill className="hidden h-16 text-base sm_tablet:block">
				Ver todos os artigos
			</ButtonFill>
		</div>
	);
};

export default ArticlesTrending;
