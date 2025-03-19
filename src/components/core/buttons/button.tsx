import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
	return (
		<button
			className="cursor-pointer rounded-md border border-primary px-3 py-2 text-p font-semibold duration-300 hover:bg-primary hover:text-gray-900"
			{...props}
		>
			{props.children}
		</button>
	);
}
