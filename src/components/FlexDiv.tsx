"use client";

import { cn } from "@/lib/utils";

interface FlexDivProps {
	size?: number;
	justify?: string;
	margin?: number;
	align?: string;
	hidden?: boolean;
	background?: string;
	flow?: string;
	mx?: string;
	my?: string;
	mt?: string;
	direction?: string;
	mb?: string;
	ml?: string;
	mr?: string;
	width?: string;
	height?: string;
	gap?: string;
	overflow?: "hidden" | "visible" | "scroll" | "auto";
	children?: React.ReactNode;
	className?: string;
}

const FlexDiv: React.FC<FlexDivProps> = ({
	size,
	justify = "center",
	margin,
	align = "center",
	hidden,
	background,
	flow = "row wrap",
	mx,
	my,
	mt,
	mb,
	ml,
	mr,
	width,
	height,
	gap,
	overflow,
	className,
	children,
	direction,
}) => {
	const flexFlow = flow.split(" ");
	const classes = cn([
		"flex",
		flow
			? flow[1]
				? `flex-${flexFlow[0]} flex-${flexFlow[1]}`
				: `flex-${flow}`
			: "flex-row flex-wrap",
		`justify-${justify}`,
		`items-${align}`,
		hidden ? "w-0 h-0" : "",
		background ? `bg-${background}` : "",
		gap ? `gap-${gap}` : "",
		overflow ? `overflow-${overflow}` : "",
		mt ? `mt-${mt}` : my ? `my-${my}` : margin ? `mt-${margin}` : "",
		mb ? `mb-${mb}` : my ? `my-${my}` : margin ? `mb-${margin}` : "",
		ml ? `ml-${ml}` : mx ? `mx-${mx}` : margin ? `ml-${margin}` : "",
		mr ? `mr-${mr}` : mx ? `mx-${mx}` : margin ? `mr-${margin}` : "",
		width ? `w-${width}` : "",
		height ? `h-${height}` : "",
		className,
	]);

	return (
		<div className={classes} style={{ flex: size }}>
			{children}
		</div>
	);
};

export default FlexDiv;
