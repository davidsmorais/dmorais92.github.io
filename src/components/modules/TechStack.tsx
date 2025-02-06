import SKILLS from "Data/skillsTerminal";
import { useTranslations } from "next-intl";
import { Fade, Slide } from "react-awesome-reveal";
import FlexDiv from "../FlexDiv";
import { TypographyH1, TypographyLead } from "../Typo";
import SkillsTerminal from "./SkillsTerminal";

const TechStack = () => {
	const t = useTranslations();
	return (
		<FlexDiv className="mt-48 mb-24 w-full" justify="flex-start">
			<Fade direction="up" triggerOnce cascade damping={0.5} delay={250}>
				<FlexDiv className="bg-card px-4 py-2 border-accent border-2 rounded-lg mb-2 shadow-md shadow-accent">
					<TypographyH1 gradient>{t("home.my_tech_stack.title")}</TypographyH1>
				</FlexDiv>
				<FlexDiv>
					<TypographyLead className="border-2 border-ring text-muted-foreground rounded-lg shadow-md shadow-muted mb-10 px-2">
						{t("home.my_tech_stack.description")}
					</TypographyLead>
				</FlexDiv>
			</Fade>
			<FlexDiv justify="center" className="w-full">
				<Slide direction="up" triggerOnce>
					<SkillsTerminal skills={SKILLS} />
				</Slide>
			</FlexDiv>
		</FlexDiv>
	);
};

export default TechStack;
