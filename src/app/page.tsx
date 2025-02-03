import { ModeToggle } from "@/components/ThemeToggle";
import { TypographyH1, TypographyH3 } from "@/components/Typo";
import { NeonGradientCard } from "@/components/ui/neon-card";
import { useTranslations } from "next-intl";
export default function Page() {
	const t = useTranslations();
	return (
		<body className="bg-secondary">
			<main className="m-5 p-2">
				<ModeToggle />
				<NeonGradientCard
					neonColors={{ firstColor: "#66e", secondColor: "#6ea" }}
				>
					<TypographyH1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#66e] from-25% to-[#6ea] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
						{t("meTitle")}
					</TypographyH1>
				</NeonGradientCard>
			</main>
		</body>
	);
}
