import React from "react";

import ArticlesPost from "./articles-post";
import ArticlesTrending from "./articles-post-trending";

const Articles = () => {
	return (
		<div data-aos="fade-up">
			<ArticlesPost />
			<div className="mb-[26px]"></div>
			<ArticlesTrending />
		</div>
	);
};

export default Articles;
