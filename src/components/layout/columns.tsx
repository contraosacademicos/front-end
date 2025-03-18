import React from "react";

import Image from "next/image";

import columnist_1 from "@/assets/columnist-1.png";
import columnist_2 from "@/assets/columnist-2.png";
import columnist_3 from "@/assets/columnist-3.png";
import columnist_4 from "@/assets/columnist-4.png";
import columnist_5 from "@/assets/columnist-5.png";
import columnist_6 from "@/assets/columnist-6.png";
import columnist_7 from "@/assets/columnist-7.png";
import columnist_8 from "@/assets/columnist-8.png";

const Columns = () => {
	return (
		<section className="wrapper">
			<div className="w-[436px] bg-[#232323] p-4">
				<h6 className="font-heading text-h6">Principais colunistas</h6>

				<div className="mt-4">
					<div
						className="rounded-3xl"
						style={{
							background:
								"conic-gradient(from 240deg at 50% 20.74%, #010101 0deg, #37290F 125.99999785423279deg, #454545 233.99999141693115deg, #202020 360deg)",
						}}
					>
						<div className="flex gap-8 p-6">
							<Image src={columnist_1} alt="columnist_1" />
							<div>
								<p className="text-base text-primary">
									$name_writer
								</p>
								<p className="mt-2 text-xs">42 postagens</p>
							</div>
						</div>
					</div>

					<div>
						<div className="flex gap-8 p-6">
							<Image src={columnist_2} alt="columnist_2" />
							<div>
								<p className="text-base text-primary">
									$name_writer
								</p>
								<p className="mt-2 text-xs">42 postagens</p>
							</div>
						</div>
					</div>

					<div className="border-b border-dashed border-[#9A9A9A]"></div>

					<div>
						<div className="flex gap-8 p-6">
							<Image src={columnist_3} alt="columnist_3" />
							<div>
								<p className="text-base text-primary">
									$name_writer
								</p>
								<p className="mt-2 text-xs">42 postagens</p>
							</div>
						</div>
					</div>

					<div className="border-b border-dashed border-[#9A9A9A]"></div>

					<div>
						<div className="flex gap-8 p-6">
							<Image src={columnist_4} alt="columnist_4" />
							<div>
								<p className="text-base text-primary">
									$name_writer
								</p>
								<p className="mt-2 text-xs">42 postagens</p>
							</div>
						</div>
					</div>

					<div className="border-b border-dashed border-[#9A9A9A]"></div>

					<div>
						<div className="flex gap-8 p-6">
							<Image src={columnist_5} alt="columnist_5" />
							<div>
								<p className="text-base text-primary">
									$name_writer
								</p>
								<p className="mt-2 text-xs">42 postagens</p>
							</div>
						</div>
					</div>

					<div className="border-b border-dashed border-[#9A9A9A]"></div>

					<div>
						<div className="flex gap-8 p-6">
							<Image src={columnist_6} alt="columnist_6" />
							<div>
								<p className="text-base text-primary">
									$name_writer
								</p>
								<p className="mt-2 text-xs">42 postagens</p>
							</div>
						</div>
					</div>

					<div className="border-b border-dashed border-[#9A9A9A]"></div>

					<div>
						<div className="flex gap-8 p-6">
							<Image src={columnist_7} alt="columnist_7" />
							<div>
								<p className="text-base text-primary">
									$name_writer
								</p>
								<p className="mt-2 text-xs">42 postagens</p>
							</div>
						</div>
					</div>

					<div className="border-b border-dashed border-[#9A9A9A]"></div>

					<div>
						<div className="flex gap-8 p-6">
							<Image src={columnist_8} alt="columnist_8" />
							<div>
								<p className="text-base text-primary">
									$name_writer
								</p>
								<p className="mt-2 text-xs">42 postagens</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Columns;
