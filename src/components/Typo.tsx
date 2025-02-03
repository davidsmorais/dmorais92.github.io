"use client";

import React, { ReactNode } from "react";

interface TypographyProps {
	children: ReactNode;
	className?: string;
	gradient?: boolean;
}

const GRADIENT =
	"bg-gradient-to-br from-[#66e] from-25% to-[#6ea] bg-clip-text text-center text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]";
export const TypographyH1 = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<h1
			className={`${className} ${gradient && GRADIENT} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
		>
			{children}
		</h1>
	);
};
export const TypographyH2 = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<h2
			className={`${className} ${gradient && GRADIENT} scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0`}
		>
			{children}
		</h2>
	);
};

export const TypographyH3 = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<h3
			className={`${className} ${gradient && GRADIENT} scroll-m-20 text-2xl font-semibold tracking-tight`}
		>
			{children}
		</h3>
	);
};

export const TypographyP = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<p
			className={`${className} ${gradient && GRADIENT} leading-7 [&:not(:first-child)]:mt-6`}
		>
			{children}
		</p>
	);
};

export const TypographyBlockquote = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<blockquote
			className={`${className} ${gradient && GRADIENT} mt-6 border-l-2 pl-6 italic`}
		>
			{children}
		</blockquote>
	);
};

export const TypographyList = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<ul
			className={`${className} ${gradient && GRADIENT} my-6 ml-6 list-disc [&>li]:mt-2`}
		>
			{children}
		</ul>
	);
};

export const TypographyInlineCode = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<code
			className={`${className} ${gradient && GRADIENT} relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`}
		>
			{children}
		</code>
	);
};

export const TypographyLead = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<p
			className={`${className} ${gradient && GRADIENT} text-xl text-muted-foreground`}
		>
			{children}
		</p>
	);
};

export const TypographyLarge = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<div
			className={`${className} ${gradient && GRADIENT} text-lg font-semibold`}
		>
			{children}
		</div>
	);
};

export const TypographySmall = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<small
			className={`${className} ${gradient && GRADIENT} text-sm font-medium leading-none`}
		>
			{children}
		</small>
	);
};

export const TypographyMuted = ({
	children,
	className,
	gradient,
}: TypographyProps) => {
	return (
		<p
			className={`${className} ${gradient && GRADIENT} text-sm text-muted-foreground`}
		>
			{children}
		</p>
	);
};

const Typo = {
	h1: TypographyH1,
	h2: TypographyH2,
	h3: TypographyH3,
	p: TypographyP,
	blockquote: TypographyBlockquote,
	ul: TypographyList,
	code: TypographyInlineCode,
	lead: TypographyLead,
	large: TypographyLarge,
	small: TypographySmall,
	muted: TypographyMuted,
};

export default Typo;
