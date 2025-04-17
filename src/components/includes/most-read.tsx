import React from "react";

import Image from "next/image";
import Link from "next/link";

import imgArticle1 from "@/assets/articles/6.png";
import imgArticle3 from "@/assets/articles/6.png";
import imgArticle2 from "@/assets/articles/7.png";

const MostRead = () => {
	return (
		<div className="flex flex-col gap-[49px] wrapper">
			<div className="flex items-center justify-between">
				<h3 className="mr-[26px] whitespace-nowrap font-heading text-h3 font-bold">
					Listas de leituras mais lidas.
				</h3>
				<div className="flex-1 border-b border-dashed border-primary"></div>
			</div>

			<div className="flex flex-wrap justify-between gap-y-[26px] sm_desktop:justify-evenly">
				<Link href={"/post"}>
					<div className="flex w-full max-w-[451px] cursor-pointer flex-col gap-1.5">
						<Image src={imgArticle1} alt="imgArticle1" />
						<h5 className="font-heading text-h5 font-medium text-limit-2">
							Distúrbios emocionais na infância e alienação
							parental
						</h5>
						<p className="text-xs">
							Por: <strong>Frederico Mendonça de Oliveira</strong>
						</p>
					</div>
				</Link>

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
			</div>
		</div>
	);
};

export default MostRead;
