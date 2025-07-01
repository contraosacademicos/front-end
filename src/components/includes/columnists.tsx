import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FeaturedColumnists } from "@/app/(home)/actions";
import imgColumnist1 from "@/assets/columnist/1.png";

const Columnists = ({ data }: { data: FeaturedColumnists[] | null }) => {
	return (
		<section className="size-full max-w-[436px] rounded-lg bg-[#232323] p-4">
			<h6 className="font-heading text-h6">Principais colunistas</h6>

			<div className="mt-4 flex flex-col gap-1">
				{Array.from(data || [])
					.slice(0, 7)
					.map((author, index, list) => {
						return (
							<Link
								href={`/autor/${author?.user_id}`}
								key={author.id}
							>
								<div
									className="cursor-pointer rounded-3xl hover:bg-black"
									style={
										index === 0
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
												author.profile_picture
													? author.profile_picture
													: imgColumnist1
											}
											width={48}
											height={48}
											alt={author.name}
											className="size-12 rounded-3xl border border-[#454545] object-cover"
										/>
										<div>
											<p className="text-base text-primary">
												{author.name}
											</p>
											<p className="mt-2 text-xs">
												{author.articlesPosted}{" "}
												postagens
											</p>
										</div>
									</div>
								</div>

								{index !== 0 && index !== list.length - 1 && (
									<div className="border-b border-dashed border-[#9A9A9A]"></div>
								)}
							</Link>
						);
					})}
			</div>
		</section>
	);
};

export default Columnists;
