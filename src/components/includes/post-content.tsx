"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Post } from "@/app/[postType]/actions";
import imgPost from "@/assets/details/post1.png";
import eyeIcon from "@/assets/icons/eye-icon.svg";
import favoriteIcon from "@/assets/icons/favorite-icon.svg";
import messagesIcon from "@/assets/icons/messages-icon.svg";
import shareIcon from "@/assets/icons/share-icon.svg";

import parse from "html-react-parser";

import { ButtonFill } from "../core/buttons/button-fill";

const PostContent = ({ data }: { data: Post }) => {
	console.log(data.data.banner);
	return (
		<div className="flex w-full max-w-full flex-col gap-4 rounded-lg bg-[#232323] p-6">
			<div className="text-base text-coagray">
				<p className="mb-2">
					{data.data.translator ? (
						<>
							Traduzido por:{" "}
							<Link
								href={`/autor/${data.data.translator.slug}`}
								className="font-bold hover:underline"
							>
								{data.data.translator.name}
							</Link>
						</>
					) : (
						<>
							Por:{" "}
							<Link
								href={`/autor/${data.data.author?.id}`}
								className="font-bold hover:underline"
							>
								{data.data.author?.nome}
							</Link>
						</>
					)}
				</p>
				<p>
					{new Date(data.data.created_at).toLocaleDateString("pt-BR")}
				</p>
			</div>

			<div
				className="relative max-h-[375px] overflow-hidden rounded-3xl"
				style={{ width: "100%", height: "375px" }}
			>
				<Image
					src={
						data.data.banner &&
						data.data.banner !== "/" &&
						data.data.banner !== ""
							? data.data.banner
							: imgPost
					}
					alt="imgFeatured3"
					fill
					className="object-cover"
				/>
			</div>

			<h3 className="font-heading text-h3 font-bold es_tablet:text-h4">
				{data.data.title}
			</h3>

			<div className="content-html text-base/6 text-coagray">
				{parse(data.data.content)}
			</div>

			<div className="flex flex-wrap gap-2 border-y border-dashed border-coagray py-6">
				<p className="block rounded-full border px-6 py-1 text-xs text-white duration-300 hover:bg-white hover:text-black">
					{data.data.type}
				</p>
				<p className="block rounded-full border border-primary px-6 py-1 text-xs text-white duration-300 hover:bg-primary hover:text-black">
					{data.data.category.nome}
				</p>
			</div>

			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex items-center gap-2">
					<ButtonFill className="flex items-center gap-4">
						<Image
							src={shareIcon}
							width={16}
							height={14}
							alt="shareIcon"
						/>
						Compartilhar
					</ButtonFill>

					<ButtonFill
						onClick={() =>
							document
								.getElementById("comentarios")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						Responder
					</ButtonFill>
				</div>

				<div className="flex items-center gap-2">
					<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
						<Image
							src={eyeIcon}
							width={18}
							height={14.5}
							alt="messagesIcon"
						/>
						{data.data.views}
					</div>
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
						{data.data.likes}
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
	);
};

export default PostContent;
