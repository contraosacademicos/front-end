"use client";

import { useEffect, useState } from "react";

import { NextPage } from "next";
import { useRouter } from "next/navigation";

import FooterLinks from "@/components/layout/footer/footer-links";
import Header from "@/components/layout/header";

const NotFound: NextPage = () => {
	const router = useRouter();
	const REDIRECT_SECONDS = 7;

	const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(countdownInterval);
					router.push("/");
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(countdownInterval);
	}, [router]);

	return (
		<main>
			<Header />

			<div className="mt-40"></div>

			<div className="flex flex-col items-center justify-center py-40 text-center wrapper">
				<h3 className="font-heading text-h2 font-bold text-primary">
					Página não encontrada
				</h3>
				<h5 className="mt-10 text-h5 text-coagray">
					Você será redirecionado para o início em{" "}
					<strong>
						{countdown} segundo
						{countdown !== 1 && "s"}
					</strong>
				</h5>
			</div>

			<div className="mt-12"></div>
			<FooterLinks />
		</main>
	);
};

export default NotFound;
