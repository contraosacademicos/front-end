import React from "react";

import AboutAuthor from "@/components/includes/about-author";
import Breadcrumb from "@/components/includes/breadcrumb";
import PostContent from "@/components/includes/post-content";

const PostDetail = () => {
	return (
		<section className="wrapper">
			<Breadcrumb />

			<div className="flex justify-between gap-4 md_tablet:flex-col md_tablet:items-center">
				<PostContent />
				<AboutAuthor />
			</div>
		</section>
	);
};

export default PostDetail;
