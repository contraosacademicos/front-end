import React from "react";

import Image from "next/image";
import Link from "next/link";

import imgColumnist1 from "@/assets/columnist/1.png";
import imgColumn7 from "@/assets/columns/7.png";
import messagesIcon from "@/assets/icons/messages-icon.svg";

import { ButtonCoa } from "../core/buttons/button-coa";

const AboutAuthor = () => {
	return (
		<div className="flex size-full max-w-[451px] flex-col gap-4 rounded-lg bg-[#232323] p-6">
			<h6 className="font-heading text-h6 font-bold">Sobre o autor</h6>

			<div className="mt-4">
				<div
					className="rounded-3xl"
					style={{
						background:
							"conic-gradient(from 240deg at 50% 20.74%, #010101 0deg, #37290F 200deg, #454545 244deg, #202020 360deg)",
					}}
				>
					<div className="flex gap-8 p-6">
						<Image
							src={imgColumnist1}
							alt="imgColumnist1"
							className="rounded-3xl object-cover"
						/>
						<div>
							<p className="text-base text-primary">
								$name_writer
							</p>
							<p className="mt-2 text-xs">42 postagens</p>
						</div>
					</div>
				</div>
			</div>

			<p className="text-base text-coagray">
				Pouco se sabe sobre a vida de Augusto de Lyra, um enigmático
				filósofo que dedicou sua existência às profundezas da floresta
				amazônica. Nascido em uma pequena aldeia indígena no coração da
				selva, Lyra cresceu imerso nos mistérios da natureza e nas
				tradições ancestrais de seu povo.
			</p>

			<Link href={"/autor"}>
				<ButtonCoa className="w-fit">Mais do autor</ButtonCoa>
			</Link>

			<div className="border-b border-dashed border-[#9A9A9A]"></div>

			<h6 className="font-heading text-h6 font-bold">
				Outros artigos do autor
			</h6>

			<div className="flex flex-col gap-2">
				<Image
					src={imgColumn7}
					alt="imgColumn7"
					className="max-h-[188px] rounded-3xl frame"
				/>

				<h5 className="font-heading text-h5">
					Distúrbios emocionais na infância e alienação parental
				</h5>

				<p className="text-xs">
					Por: <strong>Frederico Mendonça de Oliveira</strong>
				</p>

				<div className="flex w-fit items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
					<Image
						src={messagesIcon}
						width={18}
						height={14.5}
						alt="messagesIcon"
					/>
					12
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<Image
					src={imgColumn7}
					alt="imgColumn7"
					className="max-h-[188px] rounded-3xl frame"
				/>

				<h5 className="font-heading text-h5">
					Distúrbios emocionais na infância e alienação parental
				</h5>

				<p className="text-xs">
					Por: <strong>Frederico Mendonça de Oliveira</strong>
				</p>

				<div className="flex w-fit items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
					<Image
						src={messagesIcon}
						width={18}
						height={14.5}
						alt="messagesIcon"
					/>
					12
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<Image
					src={imgColumn7}
					alt="imgColumn7"
					className="max-h-[188px] rounded-3xl frame"
				/>

				<h5 className="font-heading text-h5">
					Distúrbios emocionais na infância e alienação parental
				</h5>

				<p className="text-xs">
					Por: <strong>Frederico Mendonça de Oliveira</strong>
				</p>

				<div className="flex w-fit items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
					<Image
						src={messagesIcon}
						width={18}
						height={14.5}
						alt="messagesIcon"
					/>
					12
				</div>
			</div>
		</div>
	);
};

export default AboutAuthor;
