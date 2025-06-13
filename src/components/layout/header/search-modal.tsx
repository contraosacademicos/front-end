"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Link from "next/link";

import { Categories } from "@/app/(home)/actions";
import { getPost } from "@/app/artigos/actions";
import { Post } from "@/app/artigos/types";
import Filter from "@/components/includes/filters";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Search, X } from "lucide-react";

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const modalVariants = {
	hidden: { opacity: 0, y: -30 },
	visible: { opacity: 1, y: 0 },
};

export default function SearchModal({
	isOpen,
	onClose,
	data,
}: {
	isOpen: boolean;
	onClose: () => void;
	data: Categories | null;
}) {
	const [searchQuery, setSearchQuery] = useState("");
	const [filtroPostagens, setFiltroPostagens] = useState("Últimas postagens");
	const [filtroTipo, setFiltroTipo] = useState("Todas");
	const [filtroTipoPost, setFiltroTipoPost] = useState("Todos");

	const [posts, setPosts] = useState<Post | null>(null);
	const [hasInteracted, setHasInteracted] = useState(false);
	const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 6;

	const modalRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		}

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
			setTimeout(() => {
				inputRef.current?.focus();
			}, 100);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		function handleEscKey(event: KeyboardEvent) {
			if (event.key === "Escape") {
				onClose();
			}
		}

		if (isOpen) {
			document.addEventListener("keydown", handleEscKey);
		}

		return () => {
			document.removeEventListener("keydown", handleEscKey);
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		if (!isOpen) return;

		async function fetchPosts() {
			try {
				const result = await getPost();
				setPosts(result);
			} catch (error) {
				console.error("Erro ao buscar posts no modal:", error);
			}
		}

		fetchPosts();
	}, [isOpen]);

	const filteredPosts = useMemo(() => {
		if (!hasInteracted) return [];

		let filtered = posts?.data || [];

		if (filtroTipo !== "Todas") {
			filtered = filtered.filter(
				(post) =>
					post.category?.nome.toLowerCase() ===
					filtroTipo.toLowerCase(),
			);
		}

		if (filtroTipoPost !== "Todos") {
			filtered = filtered.filter(
				(post) =>
					post.type.toLowerCase() === filtroTipoPost.toLowerCase(),
			);
		}

		if (searchQuery.trim() !== "") {
			filtered = filtered.filter((post) =>
				post.title.toLowerCase().includes(searchQuery.toLowerCase()),
			);
		}

		if (filtroPostagens === "Mais populares") {
			filtered = [...filtered].sort((a, b) => b.views - a.views);
		} else if (filtroPostagens === "Mais antigas") {
			filtered = [...filtered].sort(
				(a, b) =>
					new Date(a.created_at).getTime() -
					new Date(b.created_at).getTime(),
			);
		} else if (filtroPostagens === "Últimas postagens") {
			filtered = [...filtered].sort(
				(a, b) =>
					new Date(b.created_at).getTime() -
					new Date(a.created_at).getTime(),
			);
		}

		return filtered;
	}, [
		posts,
		filtroTipo,
		filtroTipoPost,
		filtroPostagens,
		searchQuery,
		hasInteracted,
	]);

	const currentPosts = useMemo(() => {
		const startIndex = (currentPage - 1) * postsPerPage;
		return filteredPosts.slice(startIndex, startIndex + postsPerPage);
	}, [filteredPosts, currentPage]);

	const handleInteraction = () => {
		if (!hasInteracted) {
			setHasInteracted(true);
			setCurrentPage(1);
		}
	};

	useEffect(() => {
		if (hasInteracted) {
			if (filteredPosts.length === 0) {
				setShowNoResultsMessage(true);
			} else {
				setShowNoResultsMessage(false);
			}
		} else {
			setShowNoResultsMessage(false);
		}
	}, [filteredPosts, hasInteracted]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="z-50 fixed inset-0 flex items-start justify-center bg-black/70 pt-32"
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<motion.div
						ref={modalRef}
						className="w-full max-w-5xl rounded-lg bg-[#252525] p-4 shadow-xl"
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={{ duration: 0.3 }}
					>
						<div className="flex items-center border-b border-coagray p-2">
							<Search className="mr-2 size-5 text-coagray" />
							<input
								ref={inputRef}
								type="text"
								placeholder="Pesquisar por Artigos ou Autores"
								className="flex-1 bg-[#252525] p-2 text-white outline-none placeholder:text-coagray"
								value={searchQuery}
								onChange={(e) => {
									setSearchQuery(e.target.value);
									setCurrentPage(1);
									handleInteraction();
								}}
							/>
							<button
								onClick={onClose}
								className="text-coagray hover:text-white"
							>
								<X className="size-5" />
							</button>
						</div>

						<div className="border-b border-coagray p-4">
							<Filter
								data={data}
								filtroPostagens={filtroPostagens}
								setFiltroPostagens={(value) => {
									setFiltroPostagens(value);
									setCurrentPage(1);
									handleInteraction();
								}}
								filtroTipo={filtroTipo}
								setFiltroTipo={(value) => {
									setFiltroTipo(value);
									setCurrentPage(1);
									handleInteraction();
								}}
								filtroTipoPost={filtroTipoPost}
								setFiltroTipoPost={(value) => {
									setFiltroTipoPost(value);
									setCurrentPage(1);
									handleInteraction();
								}}
								hasInteracted={hasInteracted}
							/>
						</div>

						<motion.div
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="transition-all duration-300 ease-in-out"
						>
							<div className="p-2">
								<div className="text-sm px-2 py-1 text-coagray">
									Resultados
								</div>

								<AnimatePresence mode="wait">
									{!hasInteracted && (
										<motion.p
											key="no-interaction"
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 10 }}
											className="py-8 text-center text-coagray"
										>
											Use a busca ou os filtros para
											encontrar artigos.
										</motion.p>
									)}

									{hasInteracted && showNoResultsMessage && (
										<motion.div
											key="no-results"
											initial={{
												opacity: 0,
												y: 10,
											}}
											animate={{
												opacity: 1,
												y: 0,
											}}
											exit={{
												opacity: 0,
												y: 10,
											}}
											className="rounded border border-dashed border-coagray p-6 py-8 text-center text-coagray"
										>
											Nenhum resultado encontrado para sua
											busca.
										</motion.div>
									)}

									{hasInteracted &&
										currentPosts.length > 0 && (
											<motion.div
												key="results"
												layout
												initial={{
													opacity: 0,
												}}
												animate={{
													opacity: 1,
												}}
												exit={{
													opacity: 0,
												}}
												className="flex flex-col gap-2 pt-2"
											>
												{currentPosts.map(
													(post, index) => (
														<motion.div
															key={post.id}
															layout
															initial={{
																opacity: 0,
																y: 10,
															}}
															animate={{
																opacity: 1,
																y: 0,
															}}
															exit={{
																opacity: 0,
																y: 10,
															}}
															transition={{
																duration: 0.2,
																delay:
																	index *
																	0.03,
															}}
														>
															<Link
																href={`/${post?.type}/${post?.slug}`}
																className="flex w-full items-center gap-2 rounded p-2 text-white hover:bg-black"
															>
																<FileText className="size-5 text-coagray" />
																<span>
																	{post.title}
																</span>
															</Link>
														</motion.div>
													),
												)}
											</motion.div>
										)}
								</AnimatePresence>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
