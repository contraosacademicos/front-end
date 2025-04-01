import React from "react";

import Link from "next/link";

const FooterUserArea = () => {
	return (
		<footer className="bg-[#242424] py-10 text-coagray">
			<div className="flex justify-evenly wrapper">
				<Link href={"/"}>Políticas de Direitos Autorais</Link>
				<Link href={"/"}>Política de Privacidade</Link>
				<Link href={"/"}>© Todos os Direitos Reservados - 2025</Link>
			</div>
		</footer>
	);
};

export default FooterUserArea;
