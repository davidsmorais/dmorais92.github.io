"use client";

import React, { ReactNode } from "react";

interface TypographyProps {
	children: ReactNode;
}

export const TypographyH1 = ({ children }: TypographyProps) => {
	return (
		<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{children}
		</h1>
	);
};

export const TypographyH2 = ({ children }: TypographyProps) => {
	return (
		<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
			{children}
		</h2>
	);
};

export const TypographyH3 = ({ children }: TypographyProps) => {
	return (
		<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
			{children}
		</h3>
	);
};

export const TypographyP = ({ children }: TypographyProps) => {
	return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

export const TypographyBlockquote = ({ children }: TypographyProps) => {
	return (
		<blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
	);
};

export const TypographyList = ({ children }: TypographyProps) => {
	return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
};

export const TypographyInlineCode = ({ children }: TypographyProps) => {
	return (
		<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
			{children}
		</code>
	);
};

export const TypographyLead = ({ children }: TypographyProps) => {
	return <p className="text-xl text-muted-foreground">{children}</p>;
};

export const TypographyLarge = ({ children }: TypographyProps) => {
	return <div className="text-lg font-semibold">{children}</div>;
};

export const TypographySmall = ({ children }: TypographyProps) => {
	return <small className="text-sm font-medium leading-none">{children}</small>;
};

export const TypographyMuted = ({ children }: TypographyProps) => {
	return <p className="text-sm text-muted-foreground">{children}</p>;
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
