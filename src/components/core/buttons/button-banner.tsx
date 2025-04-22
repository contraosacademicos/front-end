import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
	href?: string;
}

export function ButtonBanner({ href, ...props }: ButtonProps) {
	const className =
		"cursor-pointer rounded-full border px-6 py-4 text-base duration-300 hover:bg-primary hover:text-gray-900";

	if (href) {
		return (
			<a href={href} className={className}>
				{props.children}
			</a>
		);
	}

	return (
		<button className={className} {...props}>
			{props.children}
		</button>
	);
}
