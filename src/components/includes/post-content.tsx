import React from "react";

import Image from "next/image";

import imgPost from "@/assets/details/post1.png";
import favoriteIcon from "@/assets/icons/favorite-icon.svg";
import messagesIcon from "@/assets/icons/messages-icon.svg";
import shareIcon from "@/assets/icons/share-icon.svg";

import { ButtonFill } from "../core/buttons/button-fill";

const PostContent = () => {
	return (
		<div className="flex w-full max-w-[948px] flex-col gap-4 rounded-lg bg-[#232323] p-6">
			<div className="text-base text-coagray">
				<p className="mb-2 font-bold">$name_writer</p>
				<p>Hoje</p>
			</div>

			<Image
				src={imgPost}
				alt="imgFeatured3"
				className="max-h-[230px] rounded-3xl frame"
			/>

			<h3 className="font-heading text-h3 font-bold text-white es_tablet:text-h4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Pellentesque eleifend id lacus ut laoreet. Suspendisse a urna ac
				lectus tempus faucibus.
			</h3>

			<p className="text-base/6 text-coagray">
				Um Debate Milenar
				<br />
				<br />
				O livre-arbítrio, a capacidade de tomar decisões autônomas e
				independentes de forças externas, é um dos temas mais debatidos
				na filosofia desde a antiguidade. A questão de saber se nossas
				escolhas são fruto de nossa própria vontade ou se são
				determinadas por fatores além do nosso controle, como genética,
				ambiente ou destino, tem intrigado pensadores e leigos por
				séculos. <br />
				As Origens do Debate
				<br />
				<br />
				A discussão sobre o livre-arbítrio remonta aos filósofos gregos,
				como Epicuro e os estoicos. Epicuro, por exemplo, defendia que a
				felicidade era alcançada através da liberdade de ação e do
				controle sobre as próprias paixões. Já os estoicos acreditavam
				que o destino era imutável e que a verdadeira liberdade
				consistia em aceitar o que não podemos mudar e agir
				virtuosamente diante das adversidades. <br />
				Ao longo da história, diferentes correntes filosóficas
				apresentaram suas próprias perspectivas sobre o tema. O
				determinismo, por exemplo, sustenta que todos os eventos,
				incluindo as ações humanas, são causados por eventos anteriores
				e, portanto, são inevitáveis. Já o indeterminismo argumenta que
				existe um elemento de acaso no universo, o que permitiria a
				existência do livre-arbítrio. <br />
				O Impacto da Ciência
				<br />
				<br />
				Com o avanço da ciência, especialmente da neurociência, a
				questão do livre-arbítrio ganhou novas dimensões. Estudos sobre
				o funcionamento do cérebro sugerem que muitas de nossas decisões
				são tomadas de forma inconsciente, antes mesmo de termos
				consciência delas. Isso levanta a questão de até que ponto somos
				realmente livres para escolher.
				<br />
				<br />
				Alguns filósofos e cientistas defendem que o livre-arbítrio é
				uma ilusão, uma narrativa que construímos para dar sentido às
				nossas vidas. Outros argumentam que, mesmo que nossas decisões
				sejam influenciadas por fatores biológicos e ambientais, ainda
				existe um espaço para a agência humana. <br />
				As Implicações do Livre-arbítrio
				<br />
				<br />
				Alguns filósofos e cientistas defendem que o livre-arbítrio é
				uma ilusão, uma narrativa que construímos para dar sentido às
				nossas vidas.
			</p>

			<div className="flex flex-wrap gap-2 border-y border-dashed border-coagray py-6">
				<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
					tag
				</p>

				<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
					tag
				</p>

				<p className="block rounded-full border px-6 py-1 text-xs duration-300 hover:bg-white hover:text-black">
					tag
				</p>
			</div>

			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex items-center gap-2">
					<ButtonFill className="flex items-center gap-4">
						<Image
							src={shareIcon}
							width={16}
							height={14}
							alt="shareIcon"
						/>
						Compartilhar
					</ButtonFill>

					<ButtonFill>Responder</ButtonFill>
				</div>

				<div className="flex items-center gap-2">
					<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
						<Image
							src={messagesIcon}
							width={18}
							height={14.5}
							alt="messagesIcon"
						/>
						2
					</div>
					<div className="flex items-center gap-2 rounded-full bg-[#343434] px-3 py-1">
						12
						<Image
							src={favoriteIcon}
							width={15}
							height={15}
							alt="favoriteIcon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostContent;
