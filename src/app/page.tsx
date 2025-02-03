import { ModeToggle } from "@/components/ThemeToggle";
import { TypographyH1, TypographyH3 } from "@/components/Typo";
import { NeonGradientCard } from "@/components/ui/neon-card";
import { RetroGrid } from "@/components/ui/retro-grid";
import { useTranslations } from "next-intl";
export default function Page() {
	const t = useTranslations();
	return (
		<>
			<RetroGrid darkLineColor="#6ea" />
			<body className="bg-secondary min-h-svh max-w-svw">
				<main className="m-5 p-2">
					<NeonGradientCard
						neonColors={{ firstColor: "#66e", secondColor: "#6ea" }}
					>
						<TypographyH1 className="whitespace-pre-wrap" gradient>
							{t("meTitle")}
						</TypographyH1>
					</NeonGradientCard>
					<ModeToggle />
				</main>
			</body>
		</>
	);
}
