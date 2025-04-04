"use client";

import { useEffect, useState } from "react";

import { Loader2 } from "lucide-react";

export function Preloader() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`fixed inset-0 z-ovni flex items-center justify-center bg-black transition-opacity duration-500 ${
				loading ? "opacity-100" : "pointer-events-none opacity-0"
			}`}
		>
			<div className="flex flex-col items-center gap-4">
				<Loader2 className="size-12 animate-spin text-primary" />
			</div>
		</div>
	);
}
