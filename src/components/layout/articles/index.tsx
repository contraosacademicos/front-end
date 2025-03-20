import React from "react";

import ArticlesPost from "./articles-post";
import ArticlesTrending from "./articles-post-trending";

const Articles = () => {
	return (
		<div>
			<ArticlesPost />
			<div className="mb-[26px]"></div>
			<ArticlesTrending />
		</div>
	);
};

export default Articles;
