import React from "react";

import Image from "next/image";

import logo from "@/assets/logo.svg";
import shape1 from "@/assets/shapes/1.png";

import { Button } from "../core/buttons/button";
import { ButtonFill } from "../core/buttons/button-fill";

const Subscription = () => {
	return (
		<section className="wrapper">
			<div className="relative overflow-hidden rounded-3xl bg-[#202020] px-24 py-12 text-center lg_phone:px-10">
				<Image
					src={shape1}
					alt="shape1"
					className="absolute -top-32 left-[603px] sm_tablet:left-[300px]"
				/>
				<div className="relative flex flex-col items-center gap-6">
					<Image src={logo} alt="Logo" width={67} height={62} />

					<div className="text-center font-heading text-primary">
						<p className="mb-2 text-xs">Contra Acadêmicos</p>
						<h5 className="text-h5">
							Seu apoio é mais importante do que nunca!
						</h5>
					</div>
					<p className="text-p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent eros nisl, faucibus quis tortor et, congue
						congue neque. Fusce ut sapien tempus, scelerisque nibh
						eu, efficitur purus.
					</p>
					<div className="flex gap-4">
						<ButtonFill>Assinar</ButtonFill>
						<Button>Quero Apoiar</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscription;
