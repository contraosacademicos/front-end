import React from "react";

import Link from "next/link";

const FooterUserArea = () => {
	return (
		<footer className="bg-[#242424] py-10 text-coagray sm_tablet:py-6">
			<div className="flex justify-evenly gap-2 wrapper sm_tablet:flex-col sm_tablet:items-center">
				<Link href={"/"}>Políticas de Direitos Autorais</Link>
				<Link href={"/"}>Política de Privacidade</Link>
				<Link href={"/"}>© Todos os Direitos Reservados - 2025</Link>
			</div>
		</footer>
	);
};

export default FooterUserArea;
