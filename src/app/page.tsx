import FlexDiv from "@/components/FlexDiv";
import { ModeToggle } from "@/components/ThemeToggle";
import { TypographyH1, TypographyH3 } from "@/components/Typo";
import { NeonGradientCard } from "@/components/ui/neon-card";
import { RetroGrid } from "@/components/ui/retro-grid";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
	const t = useTranslations();
	return (
		<>
			<RetroGrid darkLineColor="#6ea" lightLineColor="#ed199f" />
			<body className="bg-secondary min-h-svh max-w-svw">
				<main className="m-5 p-2">
					<NeonGradientCard
						neonColors={{ firstColor: "#66e", secondColor: "#6ea" }}
					>
						<FlexDiv>
							<TypographyH1 className="whitespace-pre-wrap" gradient>
								{t("meTitle")}
							</TypographyH1>
							<Image
								src="/img/avatar.png"
								width={200}
								height={200}
								alt="Picture of the author"
							/>
						</FlexDiv>
					</NeonGradientCard>
					<ModeToggle />
				</main>
			</body>
		</>
	);
}
