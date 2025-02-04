import FlexDiv from "@/components/FlexDiv";
import { ModeToggle } from "@/components/ThemeToggle";

import { TypographyH1 } from "@/components/Typo";
import { Card, CardContent } from "@/components/ui/card";

import { RetroGrid } from "@/components/ui/retro-grid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Page() {
	const t = useTranslations();
	return (
		<>
			<RetroGrid darkLineColor="#6ea" lightLineColor="#ed199f" angle={10} />
			<body className="bg-secondary min-h-svh max-w-svw">
				<main className="m-5 p-2">
					<Fade delay={500}>
						<Card>
							<CardContent>
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
							</CardContent>
						</Card>
					</Fade>
					<ModeToggle />
				</main>
			</body>
		</>
	);
}
