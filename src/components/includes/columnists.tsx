import React from "react";

import Image from "next/image";

import imgColumnist1 from "@/assets/columnist/1.png";
import imgColumnist2 from "@/assets/columnist/2.png";
import imgColumnist3 from "@/assets/columnist/3.png";
import imgColumnist4 from "@/assets/columnist/4.png";
import imgColumnist5 from "@/assets/columnist/5.png";
import imgColumnist6 from "@/assets/columnist/6.png";
import imgColumnist7 from "@/assets/columnist/7.png";
import imgColumnist8 from "@/assets/columnist/8.png";

const Columnists = () => {
	return (
		<section className="size-full max-w-[436px] bg-[#232323] p-4">
			<h6 className="font-heading text-h6">Principais colunistas</h6>

			<div className="mt-4">
				<div
					className="rounded-3xl"
					style={{
						background:
							"conic-gradient(from 240deg at 50% 20.74%, #010101 0deg, #37290F 200deg, #454545 304deg, #202020 360deg)",
					}}
				>
					<div className="flex gap-8 p-6">
						<Image src={imgColumnist1} alt="imgColumnist1" />
						<div>
							<p className="text-base text-primary">
								$name_writer
							</p>
							<p className="mt-2 text-xs">42 postagens</p>
						</div>
					</div>
				</div>

				<div className="cursor-pointer rounded-3xl hover:bg-black">
					<div className="flex gap-8 p-6">
						<Image src={imgColumnist2} alt="imgColumnist2" />
						<div>
							<p className="text-base text-primary">
								$name_writer
							</p>
							<p className="mt-2 text-xs">42 postagens</p>
						</div>
					</div>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="cursor-pointer rounded-3xl hover:bg-black">
					<div className="flex gap-8 p-6">
						<Image src={imgColumnist3} alt="imgColumnist3" />
						<div>
							<p className="text-base text-primary">
								$name_writer
							</p>
							<p className="mt-2 text-xs">42 postagens</p>
						</div>
					</div>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="cursor-pointer rounded-3xl hover:bg-black">
					<div className="flex gap-8 p-6">
						<Image src={imgColumnist4} alt="imgColumnist4" />
						<div>
							<p className="text-base text-primary">
								$name_writer
							</p>
							<p className="mt-2 text-xs">42 postagens</p>
						</div>
					</div>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="cursor-pointer rounded-3xl hover:bg-black">
					<div className="flex gap-8 p-6">
						<Image src={imgColumnist5} alt="imgColumnist5" />
						<div>
							<p className="text-base text-primary">
								$name_writer
							</p>
							<p className="mt-2 text-xs">42 postagens</p>
						</div>
					</div>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="cursor-pointer rounded-3xl hover:bg-black">
					<div className="flex gap-8 p-6">
						<Image src={imgColumnist6} alt="imgColumnist6" />
						<div>
							<p className="text-base text-primary">
								$name_writer
							</p>
							<p className="mt-2 text-xs">42 postagens</p>
						</div>
					</div>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="cursor-pointer rounded-3xl hover:bg-black">
					<div className="flex gap-8 p-6">
						<Image src={imgColumnist7} alt="imgColumnist7" />
						<div>
							<p className="text-base text-primary">
								$name_writer
							</p>
							<p className="mt-2 text-xs">42 postagens</p>
						</div>
					</div>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="cursor-pointer rounded-3xl hover:bg-black">
					<div className="flex gap-8 p-6">
						<Image src={imgColumnist8} alt="imgColumnist8" />
						<div>
							<p className="text-base text-primary">
								$name_writer
							</p>
							<p className="mt-2 text-xs">42 postagens</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Columnists;
