"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/utils";

export const Navbar = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<nav
		ref={ref}
		className={cn(
			"bg-gradient-to-r shadow-sm from-neutral-700/90 via-neutral-900/75 to-neutral-800/80",
			"h-15  inline-flex items-center justify-center w-full  positon-sticky top-0 p-1 text-muted-foreground  border-b-neutral-300 border-b-2 py-2  fixed",
			className,
		)}
		{...props}
	/>
));
Navbar.displayName = "Navbar";
