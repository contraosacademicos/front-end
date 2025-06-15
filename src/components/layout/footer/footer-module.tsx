"use client";

import React from "react";

import Image from "next/image";

import left_icon from "@/assets/icons/left-icon.svg";
import right_icon from "@/assets/icons/right-icon.svg";
import imgModule1 from "@/assets/module/1.png";

import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FooterModule = () => {
	return (
		<section className="relative h-full">
			<div
				className="absolute -z-modal h-[630px] w-full bg-cover"
				style={{
					background:
						"conic-gradient(from 225deg at 50% 20.74%, #010101 0deg, #37290F 200deg, #454545 244deg, #202020 360deg)",
				}}
			></div>

			<div className="z-elements flex flex-col items-center gap-1 pt-14 font-heading">
				<h5 className="text-h5">Expanda seu conhecimento</h5>
				<h3 className="text-h3">Módulos</h3>
				<div className="w-[292px] border-b"></div>
			</div>

			<div className="mt-[68px] wrapper">
				<div
					className="m-auto flex max-w-max items-center rounded-2xl bg-darkest lg_tablet:flex-col"
					data-aos="fade-up"
				>
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
								<Image src={imgModule1} alt="imgModule1" />
							</SwiperSlide>
						</Swiper>

						<div className="absolute bottom-12 left-[44%] z-elements flex h-10 w-20 items-center justify-evenly rounded-full bg-primary lg_phone:left-[40%]">
							<button className="swiper-button-next px-3 py-4">
								<Image src={left_icon} alt="left-icon" />
							</button>
							<button className="swiper-button-prev px-3 py-4">
								<Image src={right_icon} alt="right-icon" />
							</button>
						</div>
					</div>

					<div className="h-[357px] border-r border-primary lg_tablet:hidden"></div>

					<div className="flex w-full max-w-[793px] flex-col px-[124px] py-8 text-p lg_tablet:h-full lg_tablet:max-w-[646px] sm_tablet:px-6">
						<h2 className="w-full max-w-[793px] text-center font-heading text-h2">
							Em breve
						</h2>
						<div className="w-[292px] border-b"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FooterModule;
