import * as React from "react";

import { cn } from "@/lib/utils";

interface GradientProps {
	middle: string;
	start: string;
	end: string;
}
const gradient = {
	start: "teal",
	middle: "cyan",
	end: "purple",
};

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & { withGradient?: boolean }
>(({ className, withGradient, ...props }, ref) => (
	<div
		className={cn(
			withGradient && "from-teal-500 via-cyan-500 to-purple-500 ",
			`w-full rounded-md bg-gradient-to-r shadow-lg shadow-cyan-500/50 p-1`,
		)}
	>
		<div
			ref={ref}
			className={cn(
				"rounded-xl border bg-card text-card-foreground shadow b",
				className,
			)}
			{...props}
		/>
	</div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6", className)}
		{...props}
	/>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("font-semibold leading-none tracking-tight", className)}
		{...props}
	/>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center p-6 pt-0", className)}
		{...props}
	/>
));
CardFooter.displayName = "CardFooter";

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
};
