import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function ButtonBanner(props: ButtonProps) {
	return (
		<button
			className="cursor-pointer rounded-full border px-6 py-4 text-base duration-300 hover:bg-primary hover:text-gray-900"
			{...props}
		>
			{props.children}
		</button>
	);
}
