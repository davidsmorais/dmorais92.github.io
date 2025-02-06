import FlexDiv from "Components/FlexDiv";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TypographyLead, TypographySmall } from "Components/Typo";
import { ReactNode } from "react";

export const TerminalContainer = ({
	children,
	className,
}: { children: ReactNode; className?: string }) => (
	<FlexDiv
		className={cn("border border-accent bg-background p-0", className)}
		flow="col"
	>
		<div className="m-0 p-0">{children}</div>
	</FlexDiv>
);

export const Titlebar = ({
	children,
	className,
}: { children: ReactNode; className?: string }) => (
	<FlexDiv
		className={cn(
			"m-0 items-center w-full justify-between border-b border-accent bg-background",
			className,
		)}
	>
		{children}
	</FlexDiv>
);

export const ClickablesContainer = ({
	children,
}: { children: ReactNode; className?: string }) => (
	<FlexDiv
		className="h-full justify-between items-start"
		justify="start"
		flow="col"
	>
		{children}
	</FlexDiv>
);

export const StyledMonoLink = ({
	children,
	href,
	className,
}: {
	children: ReactNode;
	className?: string;
	href: string;
}) => (
	<Link
		href={href}
		className={cn(
			"text-sm flex font-caskaydiaCode flex-nowrap mb-2 items-end",
			className,
		)}
	>
		{children}
	</Link>
);

export const MonoTitle = ({
	children,
}: { children: ReactNode; className?: string }) => (
	<TypographyLead className="text-lg font-caskaydiaCode text-accent">
		{children}
	</TypographyLead>
);

export const MonoLabel = ({
	children,
}: { children: ReactNode; className?: string }) => (
	<TypographySmall className="text-sm font-caskaydiaCode text-accent whitespace-pre">
		{children}
	</TypographySmall>
);

export const TerminalBtn = ({
	color,
}: { color: "green" | "yellow" | "red" }) => {
	const colorClass = {
		green: "bg-green-600",
		yellow: "bg-yellow-600",
		red: "bg-red-600",
	}[color];
	return <span className={cn("w-4 h-4 rounded-full m-1", colorClass)} />;
};

export const SectionsBar = ({
	children,
	className,
}: { children: ReactNode; className?: string }) => (
	<FlexDiv
		className={cn(
			"bg-muted border border-accent outline-none flex flex-nowrap cursor-pointer transition-all duration-500 hover:bg-secondary",
			className,
		)}
		justify="start"
	>
		{children}
	</FlexDiv>
);

export const StacksContainer = ({
	children,
	className,
}: { children: ReactNode; className?: string }) => (
	<FlexDiv className={cn("mt-0.5 ml-2 mb-4 justify-start", className)}>
		{children}
	</FlexDiv>
);
