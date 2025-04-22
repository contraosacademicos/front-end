import React from "react";

import Link from "next/link";

import { Post } from "@/app/post/actions";

const Breadcrumb = ({ data }: { data: Post }) => {
	return (
		<div className="mb-12 flex items-center text-p">
			<Link href="/artigos">Artigos</Link>
			<span className="mx-2">{">"}</span>
			<span className="font-bold">{data.original.title}</span>
		</div>
	);
};

export default Breadcrumb;
