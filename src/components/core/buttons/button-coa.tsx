import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	href?: string;
}

export function ButtonCoa({
	className = "",
	href,
	children,
	...props
}: ButtonProps) {
	const baseClasses =
		"cursor-pointer rounded-md border border-primary px-3 py-2 text-p font-semibold duration-300 hover:bg-primary hover:text-gray-900";

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
