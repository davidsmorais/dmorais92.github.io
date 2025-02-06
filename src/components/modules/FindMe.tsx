import CONTACTS from "Data/contacts";
import {
	Github,
	Linkedin,
	Mail,
	Phone,
	Twitter,
	UserRoundSearch,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Fade, Slide } from "react-awesome-reveal";
import FlexDiv from "../FlexDiv";
import { TypographyH1 } from "../Typo";
import { Badge } from "../ui/badge";

const FindMe = () => {
	const t = useTranslations();
	const { contacts, socials } = CONTACTS;
	const IconMap = {
		github: Github,
		twitter: Twitter,
		linkedIn: Linkedin,
	};
	const socialList = (Object.keys(socials) as Array<keyof typeof socials>).map(
		(key) => {
			const Icon = IconMap[key];
			return (
				<Badge key={key} className="m-2 items-center" variant="secondary">
					{socials[key]}
					<Icon className="mx-2 text-accent" size="1.2rem" />
				</Badge>
			);
		},
	);

	return (
		<>
			<FlexDiv
				id="findme"
				className="mt-[15vh] mb-24 w-full p-8 bg-accent/50 rounded-xl"
				justify="start"
			>
				<Fade delay={500} triggerOnce cascade className="w-full">
					<FlexDiv
						className="w-fit p-2 bg-background mb-4"
						align="center"
						flow="row nowrap"
						justify="between"
					>
						<TypographyH1 className="mx-2">{t("home.findme")}</TypographyH1>
						<UserRoundSearch />
					</FlexDiv>
					<Slide
						cascade
						damping={0.2}
						triggerOnce
						direction="up"
						className="w-full"
					>
						<FlexDiv className="shadow-md bg-[#66e]/20 rounded-xl py-2 justify-between w-full justify-center items-center">
							<Slide cascade direction="up" delay={250} triggerOnce>
								<Badge className="ml-4" variant="secondary">
									{contacts.email}{" "}
									<Mail className=" mx-2 text-accent" size="1.2rem" />
								</Badge>

								<Badge className="ml-4" variant="secondary">
									{contacts.phone}{" "}
									<Phone className=" mx-2 text-accent" size="1.2rem" />
								</Badge>
								<FlexDiv
									flow="row"
									className="bg-purple-500/20 rounded-xl px-4 ml-4 shadow-md"
									justify="center"
								>
									<Slide
										cascade
										direction="up"
										delay={500}
										triggerOnce
										damping={0.2}
									>
										{socialList}
									</Slide>
								</FlexDiv>
							</Slide>
						</FlexDiv>
					</Slide>
				</Fade>
			</FlexDiv>
		</>
	);
};

export default FindMe;
