import FlexDiv from "Components/FlexDiv";

import { TypographyH1, TypographyLead, TypographySmall } from "Components/Typo";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "Components/ui/card";
import {
	BriefcaseBusiness,
	Kanban,
	MonitorSmartphone,
	Palette,
	Rocket,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as React from "react";
import { Fade, Flip } from "react-awesome-reveal";

const CARD_ICONS = {
	responsive: MonitorSmartphone,
	work: BriefcaseBusiness,
	projects: Rocket,
	planning: Kanban,
	frontEnd: Palette,
};

const AboutMe = () => {
	const t = useTranslations();
	const CARDS = [
		{
			title: "Responsive",
			description:
				"I build responsive websites that look great on all devices.",
			Icon: CARD_ICONS.responsive,
			footer: "Mobile & desktop applications",
			color: "text-teal-500",
		},
		{
			title: "Work",
			description:
				"I've been consistently delivering projects for the last 8 years.",
			Icon: CARD_ICONS.work,
			color: "text-blue-500",
			footer: "Pennylane, Gaspard+Bruno, ITS",
		},
		{
			title: "Projects",
			Icon: CARD_ICONS.projects,
			color: "text-cyan-500",
			description:
				"I like to build small side projects for fun and to keep up with the latest technologies.",
			footer: "Check out my projects !",
		},
		{
			title: "Planning",
			Icon: CARD_ICONS.planning,
			description:
				"I have experience planning projects and reporting on their progress.",
			footer: "using tools like JIRA, Notion, Linear and simillar",
			color: "text-purple-500",
		},
		{
			title: "Front End",
			description:
				"I've specialized in Front End development and am up to date with the latest technologies and best practices",
			Icon: CARD_ICONS.frontEnd,
			color: "text-orange-500",
			footer: "Next.js, Typescript, Vite, TailwindCSS, React",
		},
	];
	return (
		<Fade cascade damping={0.5} triggerOnce delay={500}>
			<FlexDiv mt="10rem" id="#about" flow="column">
				<FlexDiv flow="column" align="start">
					<TypographyH1>{t("home.about.title")}</TypographyH1>
					<TypographyLead className="mt-2">
						{t("home.about.description")}
					</TypographyLead>
				</FlexDiv>
				<FlexDiv className="mt-5">
					<FlexDiv size={2}>
						<Flip cascade damping={0.5} triggerOnce>
							{CARDS.map((card) => (
								<Card key={card.title} className="max-w-[300px] m-2">
									<CardHeader>
										<CardTitle>{card.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<FlexDiv justify="center" flow="row nowrap" gap="1rem">
											<CardDescription>{card.description}</CardDescription>
											<card.Icon size={150} className={card.color} />
										</FlexDiv>
									</CardContent>
									<CardFooter>
										<TypographySmall>{card.footer}</TypographySmall>
									</CardFooter>
								</Card>
							))}
						</Flip>
					</FlexDiv>

					<FlexDiv size={1}>
						<Image
							src="/img/avatar.png"
							width={200}
							height={200}
							alt="Picture of the author"
						/>
					</FlexDiv>
				</FlexDiv>
			</FlexDiv>
		</Fade>
	);
};

export default AboutMe;
