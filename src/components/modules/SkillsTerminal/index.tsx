"use client";

import FlexDiv from "Components/FlexDiv";

import { Button } from "@/components/ui/button";
import { Badge, badgeVariants } from "Components/ui/badge";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import {
	ClickablesContainer,
	MonoLabel,
	MonoTitle,
	SectionsBar,
	StacksContainer,
	TerminalBtn,
	TerminalContainer,
	Titlebar,
} from "./styles";
import { ProjectEntity, Skill, WorkEntity } from "./types";

const SkillsTerminal = ({
	skills,
}: {
	skills: Skill[];
}) => {
	const t = (key: string) => `${key}`;
	const [activeSkill, changeActiveSkill] = useState<Skill | null | undefined>(
		skills?.[0],
	);
	const [activeClickable, setClickable] = useState<
		(ProjectEntity | WorkEntity)[] | null | undefined
	>(null);
	const SectionBtns = () => {
		return (
			<SectionsBar className="w-full">
				{skills.map((skill) => {
					const { title } = skill;
					const isActive = title === activeSkill?.title;
					return (
						<Button
							type="button"
							variant="ghost"
							size="sm"
							key={`btn-${title}`}
							className={"px-2 rounded-none"}
							onClick={() => {
								setClickable(null);
								changeActiveSkill(skill.mainSkills && skill);
							}}
						>
							<MonoTitle
								className="text-nowrap
"
							>
								{t(skill.title)}
							</MonoTitle>
							{isActive ? <ChevronDown className="text-accent" /> : ""}{" "}
						</Button>
					);
				})}
			</SectionsBar>
		);
	};

	const renderClickableContent = (content: (ProjectEntity & WorkEntity)[]) => {
		return content.map((item) => {
			switch (item.type) {
				case "image":
					return (
						<Image
							alt={"Project logo"}
							width={120}
							height={120}
							src={`./projects/${item.src}`}
						/>
					);
				case "title":
					if (item.content) return <MonoTitle>{t(item.content)}</MonoTitle>;
					return;
				case "label":
					if (item.content)
						return item.link ? (
							<Link
								href={item.link}
								className={badgeVariants({ variant: "outline" })}
							>
								{t(item.content)} {item.icon}
							</Link>
						) : (
							<Badge>{t(item.content)}</Badge>
						);
					return;
				case "emoji":
					if (item.content) return <MonoLabel>{t(item.content)}</MonoLabel>;
					return;
			}
		});
	};

	const Clickables = () => {
		return (
			<ClickablesContainer>
				{activeClickable && renderClickableContent(activeClickable)}
			</ClickablesContainer>
		);
	};

	const SkillStacks = () => {
		if (!activeSkill) return null;
		const { mainSkills, clickables } = activeSkill;
		return (
			<StacksContainer className="w-full mx-2 ">
				{mainSkills?.map((skill) => {
					const { clickableKeys } = skill;
					if (!skill.title) return null;
					return (
						<FlexDiv
							flow="col"
							align="start"
							justify="start"
							className="h-full"
							key={`skill-${skill.title}`}
						>
							{Array.isArray(skill.title) ? (
								skill.title.map((title) => (
									<MonoTitle key={`title-${title}`} className={"title"}>
										👉{t(title)}
									</MonoTitle>
								))
							) : (
								<MonoTitle className={"font-bold text-accent/80"}>
									{t(skill.title)} 👇
								</MonoTitle>
							)}
							{(skill?.stack ?? []).map((item) => {
								const clickableData = (clickableKeys || []).find(
									(clk) => clk.label === item,
								);
								return clickables &&
									clickableData &&
									clickables[clickableData.key] ? (
									<Button
										className="my-1"
										variant={"ghost"}
										key={`clickable-${clickableData.key}-${item}`}
										type="button"
										onClick={() => setClickable(clickables[clickableData.key])}
									>
										<MonoLabel>▶ {t(item)}</MonoLabel>
									</Button>
								) : (
									<MonoLabel key={`mono-label-${item}`}>▶ {t(item)}</MonoLabel>
								);
							})}
						</FlexDiv>
					);
				})}
				{activeClickable && <Clickables />}
			</StacksContainer>
		);
	};
	return (
		<TerminalContainer>
			<Slide cascade damping={0.2} triggerOnce direction="up">
				<Titlebar>
					<div />
					<MonoTitle className={"font-bold text-accent lowercase"}>
						~david 🌍
					</MonoTitle>
					<FlexDiv className="rounded-t-md">
						<TerminalBtn color="green" />
						<TerminalBtn color="yellow" />
						<TerminalBtn color="red" />
					</FlexDiv>
				</Titlebar>
				<SectionBtns />
				<SkillStacks />
			</Slide>
		</TerminalContainer>
	);
};

export default SkillsTerminal;
