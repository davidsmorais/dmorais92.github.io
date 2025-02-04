import FlexDiv from "@/components/FlexDiv";

import { TypographyH1 } from "@/components/Typo";
import { Card, CardContent } from "@/components/ui/card";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Page() {
	const t = useTranslations();
	return (
		<>
			<main className="m-5 p-2 pt-20 overflow-y-hidden">
				<Fade delay={500} triggerOnce>
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
			</main>
		</>
	);
}
