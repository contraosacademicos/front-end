"use client";

import Image from "next/image";

import { MainBanner } from "@/app/(home)/actions";
import heroSlider1 from "@/assets/bg/hero-slider1.jpg";
import left_icon from "@/assets/icons/left-icon.svg";
import right_icon from "@/assets/icons/right-icon.svg";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ButtonBanner } from "../core/buttons/button-banner";

const HeroSlider = ({ data }: { data: MainBanner[] | null }) => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string): string {
			return `<span class="${className} custom-bullet"></span>`;
		},
	};

	return (
		<section className="wrapper">
			<Swiper
				modules={[Pagination, Navigation, Autoplay]}
				loop={true}
				spaceBetween={30}
				slidesPerView={1}
				pagination={pagination}
				navigation={{
					enabled: true,
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				autoplay={{
					delay: 5500,
					disableOnInteraction: false,
				}}
				className="hero-swiper relative rounded-3xl"
			>
				{Array.from(data || [])
					.slice(0, 5)
					?.map((banner, index) => {
						return (
							<SwiperSlide key={index}>
								<div
									className="h-full min-h-[400px] rounded-3xl bg-cover bg-center px-[193px] py-[66px] sm_tablet:px-[40px] lg_phone:px-3"
									style={{
										backgroundImage: `url(${banner.backgroundImage || heroSlider1.src})`,
									}}
								>
									<div className="flex flex-col items-start gap-1.5">
										<div className="flex gap-5 text-base text-primary lg_phone:text-xs">
											{banner.tags
												.slice(0, 4)
												.map((tag, index) => {
													return (
														<p key={index}>{tag}</p>
													);
												})}
										</div>

										<div className="w-full max-w-[450px]">
											<h1 className="flex h-[84px] items-center font-heading text-h1 font-bold es_tablet:h-full es_tablet:text-h2">
												{banner.title[0]}
											</h1>

											<div className="flex items-center gap-8">
												<h1 className="flex h-[105px] items-center font-heading text-h1 font-bold text-primary es_tablet:h-full es_tablet:text-h2">
													{banner.title[1]}
												</h1>
												<p className="text-base lg_phone:text-p">
													O melhor lugar para você
													começar seus estudos
												</p>
											</div>

											<ButtonBanner
												href={banner.button.link}
											>
												<strong>
													{banner.button.text}
												</strong>
											</ButtonBanner>
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				<button className="swiper-button-prev absolute left-[50px] top-[193px] z-elements rounded-full bg-primary p-4 sm_tablet:hidden">
					<Image src={left_icon} alt="left-icon" className="size-3" />
				</button>

				<button className="swiper-button-next absolute right-[50px] top-[193px] z-elements rounded-full bg-primary p-4 sm_tablet:hidden">
					<Image
						src={right_icon}
						alt="right_icon"
						className="size-3"
					/>
				</button>
			</Swiper>
		</section>
	);
};

export default HeroSlider;
