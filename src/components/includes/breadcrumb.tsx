import React from "react";

import Link from "next/link";

const Breadcrumb = () => {
	return (
		<div className="mb-12 flex items-center text-p">
			<Link href="/artigos">Artigos</Link>
			<span className="mx-2">{">"}</span>
			<span className="font-bold">$post_name</span>
		</div>
	);
};

export default Breadcrumb;
