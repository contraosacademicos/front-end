import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FooterLinks } from "@/app/(home)/actions";
import socialIcon1 from "@/assets/icons/social-1.svg";
import socialIcon2 from "@/assets/icons/social-2.svg";
import socialIcon3 from "@/assets/icons/social-3.svg";
import socialIcon4 from "@/assets/icons/social-4.svg";
import logo from "@/assets/logo.svg";

const FooterNavigation = ({ data }: { data: FooterLinks[] | null }) => {
	return (
		<footer className="mt-[140px] wrapper">
			<div className="mx-auto flex justify-between gap-40 lg_tablet:flex-col lg_phone:gap-14">
				<div className="flex flex-wrap justify-between gap-12 sm_tablet:justify-start">
					{Array.from(data || []).map((link, index) => {
						return (
							<div className="max-w-[174px]" key={index}>
								<h4 className="mb-12 font-heading text-h4 font-bold">
									{link.title}
								</h4>
								<ul className="space-y-2">
									{Array.from(link.links || []).map(
										(item, idx) => {
											return (
												<li key={idx}>
													<Link
														href={item.url}
														className="text-h6 text-coagray transition-colors hover:text-primary"
													>
														{item.name}
													</Link>
												</li>
											);
										},
									)}
								</ul>
							</div>
						);
					})}
				</div>

				<div className="max-h-full border-r border-white/50 lg_tablet:hidden"></div>

				<div
					className="gradient-bg flex w-[258px] flex-col gap-[22px] rounded-3xl lg_phone:w-full lg_phone:items-center lg_phone:px-14 lg_phone:py-10 lg_phone:text-center"
					data-aos="fade"
				>
					<Image
						src={logo}
						alt="Logo"
						width={58}
						height={54}
						className="opacity-20"
					/>
					<h4 className="lg:text-left lg_phone: mb-4 font-heading text-h4 font-bold text-primary">
						Acompanhe nossas redes sociais
					</h4>
					<div className="lg:justify-start mb-10 flex gap-2 lg_phone:mb-0">
						<a
							href="https://www.facebook.com/contraosacademicos"
							className="rounded-full bg-[#1A1A1A] transition-colors hover:bg-primary"
						>
							<Image
								src={socialIcon1}
								alt="socialIcon1"
								width={32}
								height={32}
								className="size-auto"
							/>
						</a>
						<a
							href="https://www.instagram.com/contraosacademicos/#"
							className="rounded-full bg-[#1A1A1A] transition-colors hover:bg-primary"
						>
							<Image
								src={socialIcon2}
								alt="socialIcon2"
								width={32}
								height={32}
								className="size-auto"
							/>
						</a>
						<a
							href="https://www.youtube.com/@ContraosAcademicos"
							className="rounded-full bg-[#1A1A1A] transition-colors hover:bg-primary"
						>
							<Image
								src={socialIcon3}
								alt="socialIcon3"
								width={32}
								height={32}
								className="size-auto"
							/>
						</a>
						<a
							href="#"
							className="rounded-full bg-[#1A1A1A] transition-colors hover:bg-primary"
						>
							<Image
								src={socialIcon4}
								alt="socialIcon4"
								width={32}
								height={32}
								className="size-auto"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterNavigation;
