import FlexDiv from "@/components/FlexDiv";

import { TypographyH1, TypographyH2, TypographyH3 } from "@/components/Typo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Card, CardContent } from "@/components/ui/card";
import AboutMe from "Modules/AboutMe";
import FindMe from "Modules/FindMe";
import TechStack from "Modules/TechStack";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

export default function Page() {
	const t = useTranslations();
	return (
		<>
			<main className="m-5 p-2 pt-20 ">
				<Fade delay={500} triggerOnce cascade damping={0.2}>
					<Card withGradient className="w-full">
						<CardContent>
							<FlexDiv overflow="hidden">
								<FlexDiv flow="column" align="flex-start">
									<Bounce delay={1000} triggerOnce cascade direction="right">
										<TypographyH1 className="lg:text-6xl">
											{t("home.hello")} 👋
										</TypographyH1>
										<FlexDiv flow="row nowrap" className="mt-1" align="center">
											<TypographyH2 className="lg:text-4xl">
												{t("home.myName")}
											</TypographyH2>
											<TypographyH1 className="ml-2 lg:text-4xl" gradient>
												David
											</TypographyH1>
										</FlexDiv>
									</Bounce>
									<Bounce delay={1000} triggerOnce direction="left">
										<TypographyH3 className="mt-4">{t("meText")}</TypographyH3>
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

				<Separator className="mt-96 mb-24" />
				<Bounce direction="up" delay={1500} triggerOnce>
					<FlexDiv gap={"2.5rem"}>
						<Slide
							cascade
							damping={0.2}
							delay={1500}
							direction="down"
							triggerOnce
						>
							<Button variant="secondary">{t("home.about.title")}</Button>
							<Button variant="secondary">{t("home.techstack")}</Button>
							<Button>{t("home.findme")}</Button>
						</Slide>
					</FlexDiv>
				</Bounce>
				<AboutMe />
				<TechStack />
				<FindMe />
			</main>
		</>
	);
}
