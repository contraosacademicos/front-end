import React from "react";

interface Ebook {
	title: string;
	link: string;
}

interface EbooksMenuProps {
	ebooks: Ebook[];
	className?: string;
}

const EbooksMenu: React.FC<EbooksMenuProps> = ({ ebooks, className = "" }) => {
	return (
		<div
			id="ebooks-submenu"
			className={`grid grid-cols-2 gap-4 rounded border border-coagray/30 bg-black p-6 text-white sm_tablet:grid-cols-1 ${className}`}
		>
			{ebooks.map((ebook) => (
				<a
					key={ebook.link}
					href={ebook.link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm transition-colors duration-300 hover:text-primary"
				>
					{ebook.title}
				</a>
			))}
		</div>
	);
};

export default EbooksMenu;
