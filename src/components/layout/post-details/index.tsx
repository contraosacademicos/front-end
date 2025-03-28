import React from "react";

import AboutAuthor from "@/components/includes/about-author";
import Breadcrumb from "@/components/includes/breadcrumb";
import Comments from "@/components/includes/comments";
import PostContent from "@/components/includes/post-content";

const PostDetail = () => {
	return (
		<section className="wrapper">
			<Breadcrumb />

			<div className="flex justify-between gap-4 md_tablet:flex-col md_tablet:items-center">
				<div className="space-y-6">
					<PostContent />
					<Comments />
				</div>

				<AboutAuthor />
			</div>
		</section>
	);
};

export default PostDetail;
