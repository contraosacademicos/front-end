"use client";

import { useEffect, useRef, useState } from "react";

import Filter from "@/components/includes/filters";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Search, X } from "lucide-react";

interface SearchModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const modalVariants = {
	hidden: { opacity: 0, y: -30 },
	visible: { opacity: 1, y: 0 },
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
	const [searchQuery, setSearchQuery] = useState("");
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
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button
								onClick={onClose}
								className="text-coagray hover:text-white"
							>
								<X className="size-5" />
							</button>
						</div>

						<div className="border-b border-coagray p-4">
							<Filter />
						</div>

						<div className="max-h-[60vh] overflow-y-auto">
							<div className="p-2">
								<div className="text-sm px-2 py-1 text-coagray">
									Resultados
								</div>

								<button className="flex w-full items-center gap-2 rounded p-2 text-white hover:bg-black">
									<FileText className="size-5 text-coagray" />
									<span>O Simbolismo de Se7en</span>
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
