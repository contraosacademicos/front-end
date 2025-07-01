import { notFound } from "next/navigation";

import { getNewsletter } from "@/app/(home)/actions";
import AuthorContent from "@/components/layout/articles/author-content";

import { getAuthorBySlugOrId, getCategories } from "../actions";

const AuthorPage = async ({ params }: { params: { slug: string } }) => {
	const author = await getAuthorBySlugOrId(params.slug);
	const categories = await getCategories();
	const newsletter = await getNewsletter();

	if (!author) return notFound();

	return (
		<AuthorContent
			author={author}
			categories={categories}
			newsletter={newsletter}
		/>
	);
};

export default AuthorPage;
