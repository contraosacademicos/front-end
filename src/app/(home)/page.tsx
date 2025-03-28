import { NextPage } from "next";
import Image from "next/image";

import ellipse1 from "@/assets/shapes/ellipse1.svg";
import Columnists from "@/components/includes/columnists";
import Columns from "@/components/includes/columns";
import CtaCourses from "@/components/includes/cta-courses";
import HeroSlider from "@/components/includes/hero-slide";
import Subscription from "@/components/includes/subscription";
import Support from "@/components/includes/support";
import Articles from "@/components/layout/articles";
import FeaturedSection from "@/components/layout/featured";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const Home: NextPage = () => {
	return (
		<main>
			<Header />

			<div className="mt-40"></div>
			<HeroSlider />

			<div className="mt-20"></div>
			<FeaturedSection />

			<div className="mt-20"></div>
			<CtaCourses />

			<div className="mt-20"></div>
			<Articles />

			<div className="mt-20"></div>
			<div className="relative" data-aos="fade-up">
				<Image
					src={ellipse1}
					alt="ellipse1"
					className="absolute bottom-0 right-0 z-elements overflow-x-hidden sm_tablet:w-96"
				/>
				<Subscription />
			</div>

			<div className="mt-20"></div>
			<div
				className="flex justify-between wrapper lg_tablet:hidden"
				data-aos="fade-up"
			>
				<Columnists />
				<Columns />
			</div>

			<div className="mt-16"></div>
			<Support />

			<div className="mt-9"></div>
			<Footer />
		</main>
	);
};

export default Home;
