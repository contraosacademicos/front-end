import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function ButtonFill({ className = "", ...props }: ButtonProps) {
	return (
		<button
			className={`cursor-pointer rounded-md bg-[#2C2C2D] px-3 py-2 text-p font-semibold duration-300 hover:bg-[#252425] hover:text-primary ${className}`}
			{...props}
		>
			{props.children}
		</button>
	);
}
