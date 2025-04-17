import React, { Fragment } from "react";

import Image from "next/image";

import { Articles } from "@/app/artigos/actions";
import imgColumnist1 from "@/assets/columnist/1.png";

const ColumnistsArticles = ({ data }: { data: Articles | null }) => {
	return (
		<section className="size-full max-w-[436px] rounded-lg bg-[#232323] p-4">
			<h6 className="font-heading text-h6">Principais colunistas</h6>

			<div className="mt-4 flex flex-col gap-1">
				{Array.from(data?.columnists || [])
					.slice(0, 8)
					.map((data, index, list) => {
						return (
							<Fragment key={index}>
								<div
									className="cursor-pointer rounded-3xl hover:bg-black"
									style={
										!index
											? {
													background:
														"conic-gradient(from 240deg at 50% 20.74%, #010101 0deg, #37290F 200deg, #454545 244deg, #202020 360deg)",
												}
											: {}
									}
								>
									<div className="flex gap-8 p-6">
										<Image
											src={
												data.profilePicture ||
												imgColumnist1
											}
											width={48}
											height={48}
											alt="imgColumnist1"
											className="size-12 rounded-3xl border border-[#454545] object-cover"
										/>
										<div>
											<p className="text-base text-primary">
												{data.name}
											</p>
											<p className="mt-2 text-xs">
												{data.posts} postagens
											</p>
										</div>
									</div>
								</div>

								{Boolean(
									index && index !== list.length - 1,
								) && (
									<div className="border-b border-dashed border-[#9A9A9A]"></div>
								)}
							</Fragment>
						);
					})}
			</div>
		</section>
	);
};

export default ColumnistsArticles;
