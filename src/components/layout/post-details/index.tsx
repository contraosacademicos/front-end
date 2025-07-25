import React from "react";

import { Post } from "@/app/[postType]/actions";
import AboutAuthor from "@/components/includes/about-author";
import PostContent from "@/components/includes/post-content";
import Breadcrumb from "@/components/layout/articles/breadcrumb";

const PostDetail = ({ data }: { data: Post }) => {
	return (
		<section className="wrapper">
			<Breadcrumb data={data} />

			<div className="flex justify-between gap-4 md_tablet:flex-col md_tablet:items-center">
				<div className="w-full space-y-6">
					<PostContent data={data} />
					{/* NOTE <Comments /> */}
				</div>

				<AboutAuthor data={data} />
			</div>
		</section>
	);
};

export default PostDetail;
