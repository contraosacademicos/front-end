import React from "react";

import Image from "next/image";
import Link from "next/link";

import { TrendingArticle } from "@/app/(home)/actions";
import starIcon from "@/assets/icons/star-icon.svg";
import logo from "@/assets/logo.svg";
import { ButtonFill } from "@/components/core/buttons/button-fill";

const ArticlesTrendingPost = ({ data }: { data: TrendingArticle | null }) => {
	return (
		<>
			<Link
				href={`/${data?.type}/${data?.slug}` || ""}
				className="relative h-[567px] w-full max-w-[924px] cursor-pointer sm_desktop:m-auto sm_tablet:hidden"
			>
				<Image
					src={data?.image || ""}
					alt={`Imagem do artigo`}
					className="absolute rounded-3xl"
					fill
					style={{ objectFit: "cover" }}
				/>
				<Image
					src={logo}
					alt="Logo"
					width={79}
					height={73}
					className="absolute -top-3 right-11"
				/>
				<div className="relative px-[34px] py-7">
					<div className="mb-10 flex gap-6">
						<Image src={starIcon} alt="starIcon" />
						<h5 className="font-heading text-h5">Artigo em alta</h5>
					</div>

					<h3 className="mb-[60px] w-full max-w-[542px] font-heading text-[38px]">
						{data?.title}
					</h3>

					<div className="mb-[36px] border-b border-primary"></div>

					<p className="text-xs/6">{data?.shortDescription}</p>
				</div>
			</Link>

			<ButtonFill className="hidden h-16 text-base sm_tablet:block">
				Ver todos os artigos
			</ButtonFill>
		</>
	);
};

export default ArticlesTrendingPost;
