import React from "react";

import { ButtonCoa } from "../core/buttons/button-coa";

const SubscriptionBox = () => {
	return (
		<div className="flex flex-col gap-3 rounded-lg border border-coagray/20 bg-black p-6">
			<div>
				<h4 className="text-center font-heading text-h4 font-bold text-primary">
					Conteúdo exclusivo para assinantes
				</h4>
			</div>

			<p className="text-center text-coagray">
				Este conteúdo está disponível apenas para assinantes. Para
				continuar a leitura e ter acesso completo a materiais
				exclusivos, faça sua assinatura agora mesmo.
			</p>
			<div className="mt-4 flex justify-center">
				<ButtonCoa>Assinar agora</ButtonCoa>
			</div>
		</div>
	);
};

export default SubscriptionBox;
