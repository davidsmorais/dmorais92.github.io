"use client";
import { cn } from "@/lib/utils";
import styled from "styled-components";

const StyledNoisyDiv = styled.div`
background-repeat: repeat;
background-size: 200px;
pointer-events: none;
opacity: 0.7;
background-image: url("data:image/svg+xml,	%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ctitle%3Enoise%3C/title%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E");
`;
export function GradientBackground() {
	return (
		<>
			<div
				className={cn(
					"bg-conic from-25% from-green-500 via-purple-500 to-green-500",
					"absolute height size-full left-0 opacity-5",
				)}
			/>
			<StyledNoisyDiv className="absolute height size-full left-0" />
		</>
	);
}
