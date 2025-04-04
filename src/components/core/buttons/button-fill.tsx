import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	href?: string;
}

export function ButtonFill({
	className = "",
	href,
	children,
	...props
}: ButtonProps) {
	const baseClasses =
		"cursor-pointer rounded-md bg-[#2C2C2D] px-3 py-2 text-p font-semibold duration-300 hover:bg-[#252425] hover:text-primary";

	if (href) {
		return (
			<a href={href} className={`${baseClasses} ${className}`}>
				{children}
			</a>
		);
	}

	return (
		<button className={`${baseClasses} ${className}`} {...props}>
			{children}
		</button>
	);
}
