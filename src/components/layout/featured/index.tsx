import React from "react";

import FeaturedArticles from "./featured-articles";
import FeaturedOpinion from "./featured-opinion";

const FeaturedSection = () => {
	return (
		<section className="wrapper">
			<div className="flex items-center justify-between">
				<h3 className="mr-[26px] whitespace-nowrap font-heading text-h3 font-bold">
					Destaques
				</h3>
				<div className="flex-1 border-b border-dashed border-primary"></div>
			</div>

			<div className="mt-[28px] flex flex-wrap justify-between gap-10 md_desktop:justify-center">
				<FeaturedArticles />
				<FeaturedOpinion />
			</div>
		</section>
	);
};

export default FeaturedSection;
