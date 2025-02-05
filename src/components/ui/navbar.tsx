"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

import FlexDiv from "@/components/FlexDiv";
import { cn } from "@/lib/utils";
import { Button } from "./button";

import { Fade, Slide } from "react-awesome-reveal";

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
			<Fade cascade damping={0.5} delay={200}>
				<FlexDiv justify="start" size={1} gap={"0.5rem"} mx="5rem">
					<Slide delay={250}>
						<Button variant="link">
							<Link href="/">{t("nav.home")}</Link>
						</Button>
					</Slide>
					<Slide delay={250}>
						<Button variant="link">
							<Link href="/projects">{t("nav.projects")}</Link>
						</Button>
					</Slide>
					<Slide delay={250}>
						<Button variant="link">
							<Link href="/blog">{t("nav.blog")}</Link>
						</Button>
					</Slide>
					<Slide delay={250}>
						<Button variant="link">
							<Link href="/resume">{t("nav.resume")}</Link>
						</Button>
						<Button>{t("nav.contact")}</Button>
					</Slide>
				</FlexDiv>
				<FlexDiv mx="2.5rem" size={1}>
					{props.children}
				</FlexDiv>
			</Fade>
		</nav>
	);
});
Navbar.displayName = "Navbar";
