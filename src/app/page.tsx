import FlexDiv from "@/components/FlexDiv";

import { TypographyH1, TypographyH3 } from "@/components/Typo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

export default function Page() {
	const t = useTranslations();
	return (
		<>
			<main className="m-5 p-2 pt-20 overflow-y-hidden">
				<Fade delay={500} triggerOnce cascade damping={0.2}>
					<Card withGradient>
						<CardContent>
							<FlexDiv overflow="hidden">
								<FlexDiv flow="column" align="flex-start">
									<Bounce delay={1000} triggerOnce direction="right">
										<TypographyH1
											className="whitespace-pre-wrap lg:text-6xl"
											gradient
										>
											{t("meTitle")}
										</TypographyH1>
									</Bounce>
									<Bounce delay={1000} triggerOnce direction="left">
										<TypographyH3>{t("meText")}</TypographyH3>
									</Bounce>
								</FlexDiv>
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

				<Bounce direction="up" delay={1500} triggerOnce>
					<FlexDiv mt={"5rem"}>
						<Button variant="ghost">my projecs</Button>
						<Button variant="secondary">reach out to me</Button>
					</FlexDiv>
				</Bounce>
			</main>
		</>
	);
}
