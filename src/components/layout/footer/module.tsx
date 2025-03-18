"use client";

import React from "react";

import Image from "next/image";

import left_icon from "@/assets/icons/left-icon.svg";
import right_icon from "@/assets/icons/right-icon.svg";
import moduleItem1 from "@/assets/module-item-1.png";
import moduleItem from "@/assets/module-item.png";

import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "../../buttons/button";

const Module = () => {
	return (
		<section className="relative h-full">
			<div
				className="absolute -z-modal h-[630px] w-full bg-cover"
				style={{
					background:
						"conic-gradient(from 225deg at 50% 20.74%, #010101 0deg, #37290F 125.99999785423279deg, #454545 233.99999141693115deg, #202020 360deg)",
				}}
			></div>

			<div className="z-elements flex flex-col items-center gap-1 pt-14 font-heading">
				<h5 className="text-h5">Expanda seu conhecimento</h5>
				<h3 className="text-h3">Módulos</h3>
				<div className="w-[292px] border-b"></div>
			</div>

			<div className="mt-[68px] wrapper">
				<div className="m-auto flex max-w-max items-center rounded-2xl bg-darkest lg_tablet:flex-col">
					<div className="relative w-full max-w-[646px]">
						<Swiper
							effect={"fade"}
							loop={true}
							navigation={{
								enabled: true,
								nextEl: ".swiper-button-next",
								prevEl: ".swiper-button-prev",
							}}
							modules={[EffectFade, Navigation]}
							className="relative z-content size-full"
						>
							<SwiperSlide>
								<Image src={moduleItem} alt="moduleItem" />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={moduleItem1} alt="moduleItem" />
							</SwiperSlide>
						</Swiper>

						<div className="absolute bottom-12 left-[44%] z-elements flex h-10 w-20 items-center justify-evenly rounded-full bg-primary">
							<button className="swiper-button-next px-3 py-4">
								<Image src={left_icon} alt="left-icon" />
							</button>
							<button className="swiper-button-prev px-3 py-4">
								<Image src={right_icon} alt="right-icon" />
							</button>
						</div>
					</div>

					<div className="h-[357px] border-r border-primary lg_tablet:hidden"></div>

					<div className="flex w-full flex-col gap-6 px-[124px] py-8 text-p lg_tablet:h-full lg_tablet:max-w-[646px] sm_tablet:px-6">
						<p>
							Neste módulo, você dará seus primeiros passos na
							programação com a linguagem Python. Através de aulas
							teóricas e práticas, você aprenderá a sintaxe básica
							da linguagem, a manipular diferentes tipos de dados
							e a utilizar estruturas de controle para criar
							programas que tomem decisões e executem tarefas
							repetitivas.
						</p>
						<p>
							<strong>Tema:</strong> Introdução ao Python <br />
							<strong>Público-alvo:</strong> Iniciantes em
							programação <br />
							<strong>Objetivos:</strong> Ao final do módulo, o
							aluno será capaz de escrever pequenos programas em
							Python, utilizando variáveis, operadores e
							estruturas de controle básicas. <br />
							<strong>Conteúdo:</strong> Sintaxe básica, tipos de
							dados, operadores aritméticos e lógicos, estruturas
							de controle (condicionais e repetição), funções.{" "}
							<br />
							<strong>Metodologia:</strong> Aulas teóricas com
							exemplos práticos, exercícios propostos e resolução
							de problemas. <br />
							<strong>Plataforma:</strong> Google Colaboratory
						</p>
						<Button>Quero me inscrever</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Module;
