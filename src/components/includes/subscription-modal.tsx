"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogOverlay,
} from "@/components/ui/dialog";

import { ButtonFill } from "../core/buttons/button-fill";

const SubscriptionModal = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setOpen(true);
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<Dialog open={open}>
			<DialogOverlay className="bg-black/50 backdrop-blur-sm" />{" "}
			<DialogContent
				className="max-w-[41rem] border-primary bg-[#232323] p-10 text-white [&>button]:hidden"
				onInteractOutside={(e) => e.preventDefault()}
				onEscapeKeyDown={(e) => e.preventDefault()}
			>
				<DialogHeader>
					<h3 className="text-center font-heading text-h3 font-bold text-primary es_tablet:text-h4">
						Conteúdo exclusivo para assinantes!
					</h3>
				</DialogHeader>

				<div className="w-full border-b"></div>

				<h6 className="text-center text-h6 text-coagray es_tablet:text-h6">
					Este conteúdo está disponível apenas para assinantes. Para
					continuar a leitura e ter acesso completo a materiais
					exclusivos, faça sua assinatura agora mesmo.
				</h6>

				<div className="mt-4 flex justify-center gap-6">
					<ButtonFill onClick={() => router.back()}>
						<h6 className="text-h6">Voltar</h6>
					</ButtonFill>
					{/* NOTE <ButtonCoa>
						<h6 className="text-h6">Assinar agora</h6>
					</ButtonCoa> */}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default SubscriptionModal;
