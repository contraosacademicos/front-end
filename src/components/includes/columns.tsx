import React from "react";

import Image from "next/image";

import imgColumn1 from "@/assets/columns/1.png";
import imgColumn2 from "@/assets/columns/2.png";
import imgColumn3 from "@/assets/columns/3.png";
import imgColumn4 from "@/assets/columns/4.png";
import imgColumn5 from "@/assets/columns/5.png";
import imgColumn6 from "@/assets/columns/6.png";

const Columns = () => {
	return (
		<section className="flex w-full max-w-[969px] flex-col gap-8">
			<div className="flex items-center justify-between">
				<h6 className="font-heading text-h6">
					<strong>Principais colunas de</strong> $name_writer
				</h6>
				<div className="w-full max-w-[608px] border-b border-dashed border-primary"></div>
			</div>

			<div className="flex flex-wrap justify-between gap-y-[26px] es_desktop:justify-center">
				<div className="flex w-full max-w-[467px] cursor-pointer flex-col gap-2">
					<Image
						src={imgColumn1}
						alt="imgColumn1"
						className="max-h-[188px] rounded-3xl frame"
					/>
					<h5 className="font-heading text-h5 text-limit-2">
						Distúrbios emocionais na infância e alienação parental
					</h5>
					<p className="text-xs">
						Por: <strong>$name_writer</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[467px] cursor-pointer flex-col gap-2">
					<Image
						src={imgColumn2}
						alt="imgColumn2"
						className="max-h-[188px] rounded-3xl frame"
					/>
					<h5 className="font-heading text-h5 text-limit-2">
						Distúrbios emocionais na infância e alienação parental
					</h5>
					<p className="text-xs">
						Por: <strong>$name_writer</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[467px] cursor-pointer flex-col gap-2">
					<Image
						src={imgColumn3}
						alt="imgColumn3"
						className="max-h-[188px] rounded-3xl frame"
					/>
					<h5 className="font-heading text-h5 text-limit-2">
						O Simbolismo de Se7en
					</h5>
					<p className="text-xs">
						Por: <strong>$name_writer</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[467px] cursor-pointer flex-col gap-2">
					<Image
						src={imgColumn4}
						alt="imgColumn4"
						className="max-h-[188px] rounded-3xl frame"
					/>
					<h5 className="font-heading text-h5 text-limit-2">
						O Simbolismo de Se7en
					</h5>
					<p className="text-xs">
						Por: <strong>$name_writer</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[467px] cursor-pointer flex-col gap-2">
					<Image
						src={imgColumn5}
						alt="imgColumn5"
						className="max-h-[188px] rounded-3xl frame"
					/>
					<h5 className="font-heading text-h5 text-limit-2">
						O Simbolismo de Se7en
					</h5>
					<p className="text-xs">
						Por: <strong>$name_writer</strong>
					</p>
				</div>

				<div className="flex w-full max-w-[467px] cursor-pointer flex-col gap-2">
					<Image
						src={imgColumn6}
						alt="imgColumn6"
						className="max-h-[188px] rounded-3xl frame"
					/>
					<h5 className="font-heading text-h5 text-limit-2">
						O Simbolismo de Se7en
					</h5>
					<p className="text-xs">
						Por: <strong>$name_writer</strong>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Columns;
