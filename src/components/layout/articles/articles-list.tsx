import React from "react";

import Image from "next/image";

import imgArticleList1 from "@/assets/articles/list-1.jpg";
import imgArticleList2 from "@/assets/articles/list-2.jpg";
import imgArticleList3 from "@/assets/articles/list-3.jpg";
import imgArticleList4 from "@/assets/articles/list-4.jpg";
import imgArticleList5 from "@/assets/articles/list-5.jpg";
import imgArticleList6 from "@/assets/articles/list-6.jpg";
import favoriteIcon from "@/assets/icons/favorite-icon.svg";
import messagesIcon from "@/assets/icons/messages-icon.svg";

const ArticlesList = () => {
	return (
		<div className="flex w-full max-w-[948px] flex-wrap justify-between gap-y-[26px] md_desktop:max-w-[840px] sm_desktop:justify-evenly">
			<div className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-[#232323] p-6">
				<div className="flex flex-col gap-2 text-base text-coagray">
					<p className="font-bold">Everaldo Júnior</p>
					<p className="font-medium">Hoje</p>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="flex items-center gap-4">
					<Image
						src={imgArticleList1}
						alt="imgArticleList1"
						className="rounded-[4px]"
					/>
					<h5 className="font-heading text-h5 font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque eleifend id lacus ut laoreet. Suspendisse a
						urna ac lectus tempus faucibus.
					</h5>
				</div>

				<p className="text-base font-medium text-coagray">
					For the few last days, I receive several 404 and 500 erros
					when navigating inside Laracast.
				</p>

				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex flex-wrap gap-2">
						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							<Image
								src={messagesIcon}
								width={18}
								height={14.5}
								alt="messagesIcon"
							/>
							2
						</div>
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							12
							<Image
								src={favoriteIcon}
								width={15}
								height={15}
								alt="favoriteIcon"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-[#232323] p-6">
				<div className="flex flex-col gap-2 text-base text-coagray">
					<p className="font-bold">Everaldo Júnior</p>
					<p className="font-medium">Hoje</p>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="flex items-center gap-4">
					<Image
						src={imgArticleList2}
						alt="imgArticleList2"
						className="rounded-[4px]"
					/>
					<h5 className="font-heading text-h5 font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque eleifend id lacus ut laoreet. Suspendisse a
						urna ac lectus tempus faucibus.
					</h5>
				</div>

				<p className="text-base font-medium text-coagray">
					For the few last days, I receive several 404 and 500 erros
					when navigating inside Laracast.
				</p>

				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex flex-wrap gap-2">
						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							<Image
								src={messagesIcon}
								width={18}
								height={14.5}
								alt="messagesIcon"
							/>
							2
						</div>
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							12
							<Image
								src={favoriteIcon}
								width={15}
								height={15}
								alt="favoriteIcon"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-[#232323] p-6">
				<div className="flex flex-col gap-2 text-base text-coagray">
					<p className="font-bold">Everaldo Júnior</p>
					<p className="font-medium">Hoje</p>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="flex items-center gap-4">
					<Image
						src={imgArticleList3}
						alt="imgArticleList3"
						className="rounded-[4px]"
					/>
					<h5 className="font-heading text-h5 font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque eleifend id lacus ut laoreet. Suspendisse a
						urna ac lectus tempus faucibus.
					</h5>
				</div>

				<p className="text-base font-medium text-coagray">
					For the few last days, I receive several 404 and 500 erros
					when navigating inside Laracast.
				</p>

				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex flex-wrap gap-2">
						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							<Image
								src={messagesIcon}
								width={18}
								height={14.5}
								alt="messagesIcon"
							/>
							2
						</div>
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							12
							<Image
								src={favoriteIcon}
								width={15}
								height={15}
								alt="favoriteIcon"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-[#232323] p-6">
				<div className="flex flex-col gap-2 text-base text-coagray">
					<p className="font-bold">Everaldo Júnior</p>
					<p className="font-medium">Hoje</p>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="flex items-center gap-4">
					<Image
						src={imgArticleList4}
						alt="imgArticleList4"
						className="rounded-[4px]"
					/>
					<h5 className="font-heading text-h5 font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque eleifend id lacus ut laoreet. Suspendisse a
						urna ac lectus tempus faucibus.
					</h5>
				</div>

				<p className="text-base font-medium text-coagray">
					For the few last days, I receive several 404 and 500 erros
					when navigating inside Laracast.
				</p>

				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex flex-wrap gap-2">
						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							<Image
								src={messagesIcon}
								width={18}
								height={14.5}
								alt="messagesIcon"
							/>
							2
						</div>
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							12
							<Image
								src={favoriteIcon}
								width={15}
								height={15}
								alt="favoriteIcon"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-[#232323] p-6">
				<div className="flex flex-col gap-2 text-base text-coagray">
					<p className="font-bold">Everaldo Júnior</p>
					<p className="font-medium">Hoje</p>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="flex items-center gap-4">
					<Image
						src={imgArticleList5}
						alt="imgArticleList5"
						className="rounded-[4px]"
					/>
					<h5 className="font-heading text-h5 font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque eleifend id lacus ut laoreet. Suspendisse a
						urna ac lectus tempus faucibus.
					</h5>
				</div>

				<p className="text-base font-medium text-coagray">
					For the few last days, I receive several 404 and 500 erros
					when navigating inside Laracast.
				</p>

				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex flex-wrap gap-2">
						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							<Image
								src={messagesIcon}
								width={18}
								height={14.5}
								alt="messagesIcon"
							/>
							2
						</div>
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							12
							<Image
								src={favoriteIcon}
								width={15}
								height={15}
								alt="favoriteIcon"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-[#232323] p-6">
				<div className="flex flex-col gap-2 text-base text-coagray">
					<p className="font-bold">Everaldo Júnior</p>
					<p className="font-medium">Hoje</p>
				</div>

				<div className="border-b border-dashed border-[#9A9A9A]"></div>

				<div className="flex items-center gap-4">
					<Image
						src={imgArticleList6}
						alt="imgArticleList6"
						className="rounded-[4px]"
					/>
					<h5 className="font-heading text-h5 font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque eleifend id lacus ut laoreet. Suspendisse a
						urna ac lectus tempus faucibus.
					</h5>
				</div>

				<p className="text-base font-medium text-coagray">
					For the few last days, I receive several 404 and 500 erros
					when navigating inside Laracast.
				</p>

				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex flex-wrap gap-2">
						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>

						<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
							tag
						</p>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							<Image
								src={messagesIcon}
								width={18}
								height={14.5}
								alt="messagesIcon"
							/>
							2
						</div>
						<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
							12
							<Image
								src={favoriteIcon}
								width={15}
								height={15}
								alt="favoriteIcon"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticlesList;
