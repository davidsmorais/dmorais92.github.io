import { ModeToggle } from "@/components/ThemeToggle";
import { TypographyH3 } from "@/components/Typo";
import { useTranslations } from "next-intl";
export default function Page() {
	const t = useTranslations();
	return (
		<body className="bg-secondary">
			<main className="m-5 p-2">
				<ModeToggle />
				<TypographyH3>{t("meTitle")}</TypographyH3>
			</main>
		</body>
	);
}
