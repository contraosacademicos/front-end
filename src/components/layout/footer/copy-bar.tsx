import React from "react";

import Link from "next/link";

const FooterCopyBar = () => {
	return (
		<>
			<div
				className="mt-[60px] h-32 text-center text-h6 lg_phone:hidden"
				style={{
					background:
						"conic-gradient(from 260deg at 50% 20.74%, rgba(1, 1, 1, 0.2) 0deg, rgba(55, 41, 15, 0.2) 126deg, rgba(69, 69, 69, 0.2) 234deg, rgba(32, 32, 32, 0.2) 360deg)",
				}}
			>
				<div className="flex h-full items-center justify-between wrapper lg_tablet:flex-col lg_tablet:justify-evenly">
					<div className="flex gap-12 text-graytext lg_phone:flex-col lg_phone:gap-1">
						<Link href="/">Políticas de Direitos Autorais</Link>
						<Link href="/">Política de Privacidade</Link>
					</div>
					<h6>
						© Contra os Acadêmicos - Todos os Direitos Reservados -
						2024
					</h6>
				</div>
			</div>

			<div className="mt-[60px] hidden h-32 text-center text-h6 lg_phone:block">
				<div className="flex h-full items-center justify-between wrapper lg_tablet:flex-col lg_tablet:justify-evenly">
					<h6>
						© Contra os Acadêmicos - Todos os Direitos Reservados -
						2024
					</h6>
				</div>
			</div>
		</>
	);
};

export default FooterCopyBar;
