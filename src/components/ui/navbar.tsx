"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

import FlexDiv from "@/components/FlexDiv";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const Navbar = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
	const t = useTranslations();
	return (
		<nav
			ref={ref}
			className={cn(
				"bg-gradient-to-r shadow-sm from-neutral-950/90 via-neutral-900/75 to-neutral-950/80",
				"h-15  inline-flex items-center justify-center w-full  positon-sticky top-0 p-1 text-muted-foreground  border-b-neutral-300 border-b-2 py-2  fixed",
				className,
			)}
			{...props}
		>
			<FlexDiv justify="start" size={1} gap={"0.5rem"} mx="5rem">
				<Button variant="link">
					<Link href="/">{t("nav.home")}</Link>
				</Button>
				<Button variant="link">
					<Link href="/projects">{t("nav.projects")}</Link>
				</Button>
				<Button variant="link">
					<Link href="/blog">{t("nav.blog")}</Link>
				</Button>
				<Button variant="link">
					<Link href="/resume">{t("nav.resume")}</Link>
				</Button>
				<Button>{t("nav.contact")}</Button>
			</FlexDiv>
			<FlexDiv mx="2.5rem">{props.children}</FlexDiv>
		</nav>
	);
});
Navbar.displayName = "Navbar";
