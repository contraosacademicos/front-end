"use client";

import Image from "next/image";
import Link from "next/link";

import { MainBanner } from "@/app/(home)/actions";
import heroSlider1 from "@/assets/bg/hero-slider1.jpg";
import left_icon from "@/assets/icons/left-icon.svg";
import right_icon from "@/assets/icons/right-icon.svg";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
					?.map((slide, index) => {
						return (
							<SwiperSlide key={index}>
								<Link href={slide.url || "#"} target="_blank">
									<div className="h-[400px] overflow-hidden rounded-3xl duration-300 hover:scale-105">
										<picture>
											<source
												media="(max-width: 730px)"
												srcSet={
													slide.banners.mobile ||
													heroSlider1.src
												}
											/>
											<img
												src={
													slide.banners.desktop ||
													heroSlider1.src
												}
												alt="Banner"
												className="size-full object-cover"
											/>
										</picture>
									</div>
								</Link>
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
