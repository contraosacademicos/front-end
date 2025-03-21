import React from "react";

import Image from "next/image";

import imgArticle1 from "@/assets/articles/1.png";
import imgArticle2 from "@/assets/articles/2.png";
import imgArticle3 from "@/assets/articles/3.png";
import imgArticle4 from "@/assets/articles/4.png";
import imgArticle5 from "@/assets/articles/5.png";
import imgArticle6 from "@/assets/articles/6.png";

const ArticlesPost = () => {
	return (
		<div className="flex flex-col gap-[49px] wrapper">
			<div className="mb-[] flex items-center justify-between">
				<h3 className="mr-[26px] font-heading text-h3 font-bold">
					Artigos
				</h3>
				<div className="w-full border-b border-dashed border-primary"></div>
			</div>

			<div className="flex flex-wrap justify-between gap-y-[26px] sm_desktop:justify-evenly">
				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image src={imgArticle1} alt="imgArticle1" />
					<h5 className="font-heading text-h5 font-medium text-limit-2">
						Distúrbios emocionais na infância e alienação parental
					</h5>
					<p className="text-xs">
						Por: <strong>Frederico Mendonça de Oliveira</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image src={imgArticle2} alt="imgArticle2" />
					<h5 className="font-heading text-h5 font-medium text-limit-2">
						Distúrbios emocionais na infância e alienação parental
					</h5>
					<p className="text-xs">
						Por: <strong>Frederico Mendonça de Oliveira</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image src={imgArticle3} alt="imgArticle3" />
					<h5 className="font-heading text-h5 font-medium text-limit-2">
						Distúrbios emocionais na infância e alienação parental
					</h5>
					<p className="text-xs">
						Por: <strong>Frederico Mendonça de Oliveira</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image src={imgArticle4} alt="imgArticle4" />
					<h5 className="font-heading text-h5 font-medium text-limit-2">
						O Simbolismo de Se7en
					</h5>
					<p className="text-xs">
						Por: <strong>Frederico Mendonça de Oliveira</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image src={imgArticle5} alt="imgArticle5" />
					<h5 className="font-heading text-h5 font-medium text-limit-2">
						O Simbolismo de Se7en
					</h5>
					<p className="text-xs">
						Por: <strong>Frederico Mendonça de Oliveira</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
					<Image src={imgArticle6} alt="imgArticle6" />
					<h5 className="font-heading text-h5 font-medium text-limit-2">
						O Simbolismo de Se7en
					</h5>
					<p className="text-xs">
						Por: <strong>Frederico Mendonça de Oliveira</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ArticlesPost;
