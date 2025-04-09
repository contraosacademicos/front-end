"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import contactImg from "@/assets/bg/subscription.jpg";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
} from "@/components/ui/dialog";

import { ButtonCoa } from "../core/buttons/button-coa";

const SubscriptionModal = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(true);
	}, []);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="border-[#343434] bg-[#232323] text-white">
				<DialogHeader>
					<h4 className="text-center font-heading text-h4 font-bold text-primary">
						Conteúdo exclusivo para assinantes
					</h4>
				</DialogHeader>

				<Image
					src={contactImg}
					alt="Contact"
					className="rounded-3xl py-6 frame sm_tablet:w-full"
				/>
				<DialogDescription className="text-center text-coagray">
					Este conteúdo está disponível apenas para assinantes. Para
					continuar a leitura e ter acesso completo a materiais
					exclusivos, faça sua assinatura agora mesmo.
				</DialogDescription>
				<div className="mt-4 flex justify-center">
					<ButtonCoa>Assinar agora</ButtonCoa>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default SubscriptionModal;
